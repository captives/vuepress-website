import { q as defineComponent, x as ref, l as onMounted, o as openBlock, a as createElementBlock, O as pushScopeId, P as popScopeId, b as createBaseVNode, i as createCommentVNode, f as createVNode, F as Fragment } from "./app-46e25049.js";
import { S as StreamPlayer } from "./StreamPlayer-1ae5192a.js";
import { S as StreamTracks } from "./StreamTracks-53cd32a8.js";
import { M as MediaError } from "./MediaError-043920b9.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
import "./webrtc-faffc1a5.js";
var TAU = Math.PI * 2;
function extend(a, b) {
  for (var prop in b) {
    a[prop] = b[prop];
  }
  return a;
}
function lerp(a, b, t) {
  return (b - a) * t + a;
}
function modulo(num, div) {
  return (num % div + div) % div;
}
function Vector3(position) {
  this.set(position);
}
Vector3.prototype.set = function(pos) {
  pos = Vector3.sanitize(pos);
  this.x = pos.x;
  this.y = pos.y;
  this.z = pos.z;
  return this;
};
Vector3.prototype.rotate = function(rotation) {
  if (!rotation) {
    return;
  }
  this.rotateZ(rotation.z);
  this.rotateY(rotation.y);
  this.rotateX(rotation.x);
  return this;
};
Vector3.prototype.rotateZ = function(angle) {
  rotateProperty(this, angle, "x", "y");
};
Vector3.prototype.rotateX = function(angle) {
  rotateProperty(this, angle, "y", "z");
};
Vector3.prototype.rotateY = function(angle) {
  rotateProperty(this, angle, "x", "z");
};
function rotateProperty(vec, angle, propA, propB) {
  if (angle % TAU === 0) {
    return;
  }
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);
  var a = vec[propA];
  var b = vec[propB];
  vec[propA] = a * cos - b * sin;
  vec[propB] = b * cos + a * sin;
}
Vector3.prototype.add = function(vec) {
  if (!vec) {
    return;
  }
  vec = Vector3.sanitize(vec);
  this.x += vec.x;
  this.y += vec.y;
  this.z += vec.z;
  return this;
};
Vector3.prototype.multiply = function(vec) {
  if (!vec) {
    return;
  }
  vec = Vector3.sanitize(vec);
  this.x *= vec.x;
  this.y *= vec.y;
  this.z *= vec.z;
  return this;
};
Vector3.prototype.lerp = function(vec, t) {
  this.x = lerp(this.x, vec.x, t);
  this.y = lerp(this.y, vec.y, t);
  this.z = lerp(this.z, vec.z, t);
  return this;
};
Vector3.sanitize = function(vec) {
  vec = vec || {};
  vec.x = vec.x || 0;
  vec.y = vec.y || 0;
  vec.z = vec.z || 0;
  return vec;
};
function PathAction(method, points, previousPoint) {
  this.method = method;
  this.points = points.map(mapVectorPoint);
  this.renderPoints = points.map(mapVectorPoint);
  this.previousPoint = previousPoint;
  this.endRenderPoint = this.renderPoints[this.renderPoints.length - 1];
  if (method == "arc") {
    this.controlPoints = [new Vector3(), new Vector3()];
  }
}
function mapVectorPoint(point) {
  return new Vector3(point);
}
PathAction.prototype.reset = function() {
  var points = this.points;
  this.renderPoints.forEach(function(renderPoint, i) {
    var point = points[i];
    renderPoint.set(point);
  });
};
PathAction.prototype.transform = function(translation, rotation, scale) {
  this.renderPoints.forEach(function(renderPoint) {
    renderPoint.multiply(scale);
    renderPoint.rotate(rotation);
    renderPoint.add(translation);
  });
};
PathAction.prototype.render = function(ctx) {
  this[this.method](ctx);
};
PathAction.prototype.move = function(ctx) {
  var point = this.renderPoints[0];
  ctx.moveTo(point.x, point.y);
};
PathAction.prototype.line = function(ctx) {
  var point = this.renderPoints[0];
  ctx.lineTo(point.x, point.y);
};
PathAction.prototype.bezier = function(ctx) {
  var cp0 = this.renderPoints[0];
  var cp1 = this.renderPoints[1];
  var end = this.renderPoints[2];
  ctx.bezierCurveTo(cp0.x, cp0.y, cp1.x, cp1.y, end.x, end.y);
};
PathAction.prototype.arc = function(ctx) {
  var prev = this.previousPoint;
  var corner = this.renderPoints[0];
  var end = this.renderPoints[1];
  var cp0 = this.controlPoints[0];
  var cp1 = this.controlPoints[1];
  cp0.set(prev).lerp(corner, 9 / 16);
  cp1.set(end).lerp(corner, 9 / 16);
  ctx.bezierCurveTo(cp0.x, cp0.y, cp1.x, cp1.y, end.x, end.y);
};
function Shape(options) {
  this.create(options);
}
Shape.prototype.create = function(options) {
  extend(this, Shape.defaults);
  setOptions(this, options);
  this.updatePathActions();
  this.translate = new Vector3(options.translate);
  this.rotate = new Vector3(options.rotate);
  var scale = extend({ x: 1, y: 1, z: 1 }, options.scale);
  this.scale = new Vector3(scale);
  this.children = [];
  if (this.addTo) {
    this.addTo.addChild(this);
  }
};
Shape.defaults = {
  stroke: true,
  fill: false,
  color: "black",
  lineWidth: 1,
  closed: true,
  rendering: true,
  path: [{}]
};
var optionKeys = Object.keys(Shape.defaults).concat(["rotate", "translate", "scale", "addTo", "width", "height"]);
function setOptions(shape, options) {
  for (var key in options) {
    if (optionKeys.includes(key)) {
      shape[key] = options[key];
    }
  }
}
var actionNames = ["move", "line", "bezier", "arc"];
Shape.prototype.updatePathActions = function() {
  var previousPoint;
  this.pathActions = this.path.map(function(pathPart, i) {
    var keys = Object.keys(pathPart);
    var method = keys[0];
    var points = pathPart[method];
    var isInstruction = keys.length === 1 && actionNames.includes(method) && Array.isArray(points);
    if (!isInstruction) {
      method = "line";
      points = [pathPart];
    }
    method = i === 0 ? "move" : method;
    var pathAction = new PathAction(method, points, previousPoint);
    previousPoint = pathAction.endRenderPoint;
    return pathAction;
  });
};
Shape.prototype.addChild = function(shape) {
  this.children.push(shape);
};
Shape.prototype.update = function() {
  this.reset();
  this.children.forEach(function(child) {
    child.update();
  });
  this.transform(this.translate, this.rotate, this.scale);
};
Shape.prototype.reset = function() {
  this.pathActions.forEach(function(pathAction) {
    pathAction.reset();
  });
};
Shape.prototype.transform = function(translation, rotation, scale) {
  this.pathActions.forEach(function(pathAction) {
    pathAction.transform(translation, rotation, scale);
  });
  this.children.forEach(function(child) {
    child.transform(translation, rotation, scale);
  });
};
Shape.prototype.updateSortValue = function() {
  var sortValueTotal = 0;
  this.pathActions.forEach(function(pathAction) {
    sortValueTotal += pathAction.endRenderPoint.z;
  });
  this.sortValue = sortValueTotal / this.pathActions.length;
};
Shape.prototype.render = function(ctx) {
  var length = this.pathActions.length;
  if (!this.rendering || !length) {
    return;
  }
  var isDot = length == 1;
  if (isDot) {
    this.renderDot(ctx);
  } else {
    this.renderPath(ctx);
  }
};
Shape.prototype.renderDot = function(ctx) {
  ctx.fillStyle = this.color;
  var point = this.pathActions[0].endRenderPoint;
  ctx.beginPath();
  var radius = this.lineWidth / 2;
  ctx.arc(point.x, point.y, radius, 0, TAU);
  ctx.fill();
};
Shape.prototype.renderPath = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.strokeStyle = this.color;
  ctx.lineWidth = this.lineWidth;
  ctx.beginPath();
  this.pathActions.forEach(function(pathAction) {
    pathAction.render(ctx);
  });
  var isTwoPoints = this.pathActions.length == 2 && this.pathActions[1].method == "line";
  if (!isTwoPoints && this.closed) {
    ctx.closePath();
  }
  if (this.stroke) {
    ctx.stroke();
  }
  if (this.fill) {
    ctx.fill();
  }
};
Shape.prototype.getShapes = function() {
  var shapes = [this];
  this.children.forEach(function(child) {
    var childShapes = child.getShapes();
    shapes = shapes.concat(childShapes);
  });
  return shapes;
};
Shape.prototype.copy = function(options) {
  var shapeOptions = {};
  optionKeys.forEach(function(key) {
    shapeOptions[key] = this[key];
  }, this);
  setOptions(shapeOptions, options);
  var ShapeClass = this.constructor;
  return new ShapeClass(shapeOptions);
};
Shape.prototype.normalizeRotate = function() {
  this.rotate.x = modulo(this.rotate.x, TAU);
  this.rotate.y = modulo(this.rotate.y, TAU);
  this.rotate.z = modulo(this.rotate.z, TAU);
};
function Ellipse(options) {
  options = this.setPath(options);
  options.closed = false;
  this.create(options);
}
Ellipse.prototype = Object.create(Shape.prototype);
Ellipse.prototype.constructor = Ellipse;
Ellipse.prototype.setPath = function(options) {
  var w = (options.width || 1) / 2;
  var h = (options.height || 1) / 2;
  options.path = [
    { x: 0, y: -h },
    {
      arc: [
        // top right
        { x: w, y: -h },
        { x: w, y: 0 }
      ]
    },
    {
      arc: [
        // bottom right
        { x: w, y: h },
        { x: 0, y: h }
      ]
    },
    {
      arc: [
        // bottom left
        { x: -w, y: h },
        { x: -w, y: 0 }
      ]
    },
    {
      arc: [
        // bottom left
        { x: -w, y: -h },
        { x: 0, y: -h }
      ]
    }
  ];
  return options;
};
function Rect(options) {
  options = this.setPath(options);
  this.create(options);
}
Rect.prototype = Object.create(Shape.prototype);
Rect.prototype.constructor = Rect;
Rect.prototype.setPath = function(options) {
  var w = (options.width || 1) / 2;
  var h = (options.height || 1) / 2;
  options.path = [
    { x: -w, y: -h },
    { x: w, y: -h },
    { x: w, y: h },
    { x: -w, y: h }
  ];
  return options;
};
function Group(options) {
  this.create(options);
}
Group.prototype.create = function(options) {
  setGroupOptions(this, options);
  this.translate = Vector3.sanitize(this.translate);
  this.rotate = Vector3.sanitize(this.rotate);
  this.children = [];
  if (this.addTo) {
    this.addTo.addChild(this);
  }
};
var groupOptionKeys = ["rotate", "translate", "addTo"];
function setGroupOptions(shape, options) {
  for (var key in options) {
    if (groupOptionKeys.includes(key)) {
      shape[key] = options[key];
    }
  }
}
Group.prototype.addChild = function(shape) {
  this.children.push(shape);
};
Group.prototype.update = function() {
  this.reset();
  this.children.forEach(function(child) {
    child.update();
  });
  this.transform(this.translate, this.rotate, this.scale);
};
Group.prototype.reset = function() {
};
Group.prototype.transform = function(translation, rotation, scale) {
  this.children.forEach(function(child) {
    child.transform(translation, rotation, scale);
  });
};
Group.prototype.updateSortValue = function() {
  var sortValueTotal = 0;
  this.children.forEach(function(child) {
    child.updateSortValue();
    sortValueTotal += child.sortValue;
  });
  this.sortValue = sortValueTotal / this.children.length;
};
Group.prototype.render = function(ctx) {
  this.children.forEach(function(child) {
    child.render(ctx);
  });
};
Group.prototype.getShapes = function() {
  return [this];
};
var downEvent = "mousedown";
var moveEvent = "mousemove";
var upEvent = "mouseup";
if (window.PointerEvent) {
  downEvent = "pointerdown";
  moveEvent = "pointermove";
  upEvent = "pointerup";
} else if ("ontouchstart" in window) {
  downEvent = "touchstart";
  moveEvent = "touchmove";
  upEvent = "touchend";
}
function noop() {
}
function Dragger(options) {
  this.startElement = options.startElement;
  this.onPointerDown = options.onPointerDown || noop;
  this.onPointerMove = options.onPointerMove || noop;
  this.onPointerUp = options.onPointerUp || noop;
  this.startElement.addEventListener(downEvent, this);
}
Dragger.prototype.handleEvent = function(event) {
  var method = this["on" + event.type];
  if (method) {
    method.call(this, event);
  }
};
Dragger.prototype.onmousedown = Dragger.prototype.onpointerdown = function(event) {
  this.pointerDown(event, event);
};
Dragger.prototype.ontouchstart = function(event) {
  this.pointerDown(event, event.changedTouches[0]);
};
Dragger.prototype.pointerDown = function(event, pointer) {
  event.preventDefault();
  this.dragStartX = pointer.pageX;
  this.dragStartY = pointer.pageY;
  window.addEventListener(moveEvent, this);
  window.addEventListener(upEvent, this);
  this.onPointerDown(pointer);
};
Dragger.prototype.ontouchmove = function(event) {
  this.pointerMove(event, event.changedTouches[0]);
};
Dragger.prototype.onmousemove = Dragger.prototype.onpointermove = function(event) {
  this.pointerMove(event, event);
};
Dragger.prototype.pointerMove = function(event, pointer) {
  event.preventDefault();
  var moveX = pointer.pageX - this.dragStartX;
  var moveY = pointer.pageY - this.dragStartY;
  this.onPointerMove(pointer, moveX, moveY);
};
Dragger.prototype.onmouseup = Dragger.prototype.onpointerup = Dragger.prototype.ontouchend = Dragger.prototype.pointerUp = function(event) {
  window.removeEventListener(moveEvent, this);
  window.removeEventListener(upEvent, this);
  this.onPointerUp(event);
};
var isRotating = true;
var camera = new Shape({
  rendering: false
});
const start = (dom) => {
  var canvas = dom.querySelector("canvas");
  var ctx = canvas.getContext("2d");
  var w = 450;
  var h = 450;
  var minWindowSize = Math.min(dom.clientWidth, dom.clientHeight);
  var zoom = Math.min(3, Math.floor(minWindowSize / (w / 2)) / 2);
  var pixelRatio = window.devicePixelRatio || 1;
  zoom *= pixelRatio;
  var canvasWidth = canvas.width = w * zoom;
  var canvasHeight = canvas.height = h * zoom;
  if (pixelRatio > 1) {
    canvas.style.width = canvasWidth / pixelRatio + "px";
    canvas.style.height = canvasHeight / pixelRatio + "px";
  }
  var midnight = "#313";
  var eggplant = "#525";
  var magenta = "#936";
  var amber = "#D65";
  var gold = "#FA6";
  var white = "#FFF";
  var layerSpace = 56;
  var background = new Shape({
    translate: { z: layerSpace * 2 },
    rendering: false,
    addTo: camera
  });
  var bgStripe = new Rect({
    width: 180,
    height: 44,
    addTo: background,
    translate: { y: -40, z: 24 },
    color: magenta,
    lineWidth: 12,
    fill: true
  });
  var bgCircle = new Ellipse({
    width: 96,
    height: 96,
    addTo: background,
    translate: { y: -16, z: 24 },
    color: magenta,
    lineWidth: 24,
    fill: true
  });
  bgStripe.copy({
    translate: { y: -8 },
    color: amber
  });
  bgCircle.copy({
    width: 64,
    height: 64,
    translate: { y: -16 },
    color: amber
  });
  bgStripe.copy({
    height: 60,
    addTo: background,
    translate: { y: 32, z: -24 },
    color: gold
  });
  bgCircle.copy({
    width: 32,
    height: 32,
    translate: { y: -16, z: -24 },
    color: gold
  });
  new Shape({
    addTo: background,
    translate: { y: -16, z: -48 },
    lineWidth: 24,
    color: white
  });
  var midBackground = new Group({
    addTo: camera,
    translate: { z: layerSpace * 1 }
  });
  var midBGDot = new Shape({
    addTo: midBackground,
    translate: { x: -36, y: 18 },
    lineWidth: 24,
    color: amber
  });
  midBGDot.copy({
    translate: { x: -24, y: 24 }
  });
  midBGDot.copy({
    translate: { x: -6, y: 26 }
  });
  midBGDot.copy({
    translate: { x: 12, y: 16 }
  });
  midBGDot.copy({
    translate: { x: 28, y: 12 }
  });
  midBGDot.copy({
    translate: { x: 48, y: 20 }
  });
  var midBGBigDot = midBGDot.copy({
    lineWidth: 48,
    translate: { x: -52, y: 40 }
  });
  midBGBigDot.copy({
    translate: { x: 20, y: 40 }
  });
  midBGBigDot.copy({
    lineWidth: 40,
    translate: { x: 56, y: 40 }
  });
  midBGBigDot.copy({
    lineWidth: 40,
    translate: { x: -16, y: 48 }
  });
  var midground = new Shape({
    rendering: false,
    addTo: camera
  });
  var midgroundGroundA = new Shape({
    path: [
      { x: -96, y: 10 },
      { x: -86, y: 10 },
      {
        arc: [
          { x: -60, y: 42 },
          { x: -26, y: 42 }
        ]
      },
      { x: -26, y: 74 },
      { x: -96, y: 74 }
    ],
    addTo: midground,
    color: magenta,
    lineWidth: 48,
    fill: true
  });
  midgroundGroundA.copy({
    path: [
      { x: -26, y: 42 },
      {
        arc: [
          { x: -8, y: 74 },
          { x: 36, y: 74 }
        ]
      },
      { x: 96, y: 74 },
      { x: -26, y: 74 }
    ]
  });
  function tree(groupOptions, options) {
    options = extend(options, groupOptions);
    var treeW = options.width / 2;
    var treeH = options.height / 2;
    var pointA = { x: 0, y: -treeH };
    var pointB = { x: treeW, y: treeH };
    var pointC = { x: -treeW, y: treeH };
    var treeOptions = extend(
      {
        path: [
          pointA,
          {
            bezier: [pointA, { x: treeW, y: treeH * 1 / 3 }, pointB]
          },
          pointC,
          {
            bezier: [{ x: -treeW, y: treeH * 1 / 3 }, pointA, pointA]
          }
        ],
        fill: true
      },
      options
    );
    var treePlane = new Shape(treeOptions);
    treePlane.copy({
      rotate: { y: TAU / 4 }
    });
  }
  var midgroundTree = {
    addTo: midground,
    color: magenta,
    lineWidth: 2
  };
  tree(midgroundTree, {
    width: 10,
    height: 24,
    translate: { x: -86, y: -14, z: 8 }
  });
  tree(midgroundTree, {
    width: 16,
    height: 36,
    translate: { x: -70, y: -12, z: -14 }
  });
  tree(midgroundTree, {
    width: 10,
    height: 24,
    translate: { x: -60, y: -4 }
  });
  tree(midgroundTree, {
    width: 10,
    height: 24,
    translate: { x: -26, y: 12, z: 8 }
  });
  tree(midgroundTree, {
    width: 10,
    height: 24,
    translate: { x: -18, y: 18, z: -2 }
  });
  var lonelyTranslate = { x: 32, y: 24 };
  tree(midgroundTree, {
    width: 16,
    height: 36,
    translate: lonelyTranslate
  });
  new Shape({
    path: [{ y: 18 }, { y: 28 }],
    addTo: midground,
    translate: lonelyTranslate,
    color: magenta,
    lineWidth: 4
  });
  tree(midgroundTree, {
    width: 10,
    height: 24,
    translate: { x: 64, y: 40, z: -6 }
  });
  tree(midgroundTree, {
    width: 10,
    height: 24,
    translate: { x: 72, y: 44, z: 2 }
  });
  var midForeground = new Shape({
    rendering: false,
    addTo: camera,
    translate: { z: -layerSpace }
  });
  var midForegroundGround = new Shape({
    path: [
      { x: 96, y: 26 },
      { x: 72, y: 26 },
      {
        arc: [
          { x: 56, y: 50 },
          { x: 18, y: 50 }
        ]
      },
      { x: 18, y: 90 },
      { x: 96, y: 90 }
    ],
    addTo: midForeground,
    color: eggplant,
    lineWidth: 48,
    fill: true
  });
  midForegroundGround.copy({
    path: [
      { x: 18, y: 50 },
      {
        arc: [
          { x: -16, y: 90 },
          { x: -48, y: 72 }
        ]
      },
      { x: -64, y: 56 },
      { x: -96, y: 48 },
      { x: -96, y: 90 },
      { x: 18, y: 90 }
    ]
  });
  var midForeBall = new Shape({
    addTo: midForeground,
    translate: { x: -92, y: 18 },
    lineWidth: 20,
    color: eggplant
  });
  midForeBall.copy({
    translate: { x: -104, y: 28 }
  });
  midForeBall.copy({
    translate: { x: -84, y: 28 },
    lineWidth: 24
  });
  midForeBall.copy({
    translate: { x: -74, y: 20 }
  });
  midForeBall.copy({
    translate: { x: -60, y: 28 }
  });
  midForeBall.copy({
    translate: { x: -50, y: 36 }
  });
  midForeBall.copy({
    translate: { x: -44, y: 46 }
  });
  var midForeTree = {
    addTo: midForeground,
    color: eggplant,
    lineWidth: 2
  };
  tree(midForeTree, {
    width: 10,
    height: 24,
    translate: { x: -12, y: 42 }
  });
  tree(midForeTree, {
    width: 10,
    height: 24,
    translate: { x: 10, y: 22, z: -2 }
  });
  tree(midForeTree, {
    width: 16,
    height: 36,
    translate: { x: 22, y: 18, z: 6 }
  });
  tree(midForeTree, {
    width: 16,
    height: 36,
    translate: { x: 76, y: -6, z: -12 }
  });
  tree(midForeTree, {
    width: 10,
    height: 24,
    translate: { x: 86, y: -4, z: 10 }
  });
  var foregroundA = new Shape({
    path: [
      { x: -96, y: 52 },
      { x: -84, y: 52 },
      {
        arc: [
          { x: -72, y: 72 },
          { x: -44, y: 72 }
        ]
      },
      {
        arc: [
          { x: -32, y: 90 },
          { x: 0, y: 90 }
        ]
      },
      { x: -96, y: 90 }
    ],
    addTo: camera,
    translate: { z: -layerSpace * 2 },
    color: midnight,
    lineWidth: 48,
    fill: true
  });
  var foregroundTree = {
    color: midnight,
    lineWidth: 2
  };
  tree(foregroundTree, {
    addTo: foregroundA,
    width: 18,
    height: 44,
    translate: { x: -80, y: 18 }
  });
  var foreTree1Translate = { x: -44, y: 14 };
  tree(foregroundTree, {
    addTo: foregroundA,
    width: 18,
    height: 44,
    translate: { x: -44, y: 14 }
  });
  new Shape({
    path: [{ y: 22 }, { y: 38 }],
    addTo: foregroundA,
    translate: foreTree1Translate,
    lineWidth: 6,
    color: midnight
  });
  tree(foregroundTree, {
    addTo: foregroundA,
    width: 16,
    height: 36,
    translate: { x: -2, y: 64 }
  });
  var grassBlade = new Shape({
    path: [
      // semi-circle outside on left
      { x: 0, y: 1 },
      {
        arc: [
          { x: -1, y: 1 },
          { x: -1, y: 0 }
        ]
      },
      {
        arc: [
          { x: -1, y: -1 },
          { x: 0, y: -1 }
        ]
      },
      // shallow semi-circle back
      {
        arc: [
          { x: -0.5, y: -0.7 },
          { x: -0.5, y: 0 }
        ]
      },
      {
        arc: [
          { x: -0.5, y: 0.7 },
          { x: 0, y: 1 }
        ]
      }
    ],
    addTo: foregroundA,
    translate: { x: -20, y: 56 },
    scale: { x: 8, y: 8 },
    rotate: { z: 0.6 },
    color: midnight,
    lineWidth: 1,
    fill: true,
    closed: false
  });
  grassBlade.copy({
    translate: { x: -33, y: 50 },
    rotate: { z: TAU / 2 + 0.2 }
  });
  grassBlade.copy({
    translate: { x: -62, y: 40 },
    rotate: { z: 0.8 },
    scale: { x: 7, y: 7 }
  });
  grassBlade.copy({
    translate: { x: -64, y: 35 },
    rotate: { z: 0.4 },
    scale: { x: 7, y: 7 }
  });
  var foregroundB = new Shape({
    path: [
      { x: 96, y: 52 },
      {
        arc: [
          { x: 80, y: 72 },
          { x: 56, y: 72 }
        ]
      },
      {
        arc: [
          { x: 40, y: 90 },
          { x: 8, y: 90 }
        ]
      },
      { x: 0, y: 90 },
      { x: 96, y: 90 }
    ],
    addTo: camera,
    translate: { z: -layerSpace * 2 },
    color: midnight,
    lineWidth: 48,
    fill: true
  });
  tree(foregroundTree, {
    addTo: foregroundB,
    width: 16,
    height: 36,
    translate: { x: 10, y: 54 }
  });
  var bigTreeTranslate = { x: 58, y: 2 };
  tree(foregroundTree, {
    addTo: foregroundB,
    width: 20,
    height: 64,
    translate: bigTreeTranslate
  });
  new Shape({
    path: [{ y: 32 }, { y: 48 }],
    addTo: foregroundB,
    translate: bigTreeTranslate,
    lineWidth: 6,
    color: midnight
  });
  tree(foregroundTree, {
    addTo: foregroundB,
    width: 16,
    height: 36,
    translate: { x: 86, y: 26 }
  });
  grassBlade.copy({
    addTo: foregroundB,
    scale: { x: 12, y: 12 },
    translate: { x: 46, y: 54 },
    rotate: { z: 0 }
  });
  grassBlade.copy({
    addTo: foregroundB,
    scale: { x: 10, y: 10 },
    translate: { x: 28, y: 58 },
    rotate: { z: TAU / 2 - 0.4 }
  });
  var particle = new Shape({
    addTo: camera,
    translate: { x: -70, y: -50, z: layerSpace * 0.25 },
    lineWidth: 4,
    color: gold
  });
  particle.copy({
    translate: { x: 68, y: -28, z: layerSpace * -0.5 }
  });
  particle.copy({
    translate: { x: -70, y: 2, z: layerSpace * -0.75 },
    color: amber
  });
  particle.copy({
    translate: { x: 74, y: 14, z: layerSpace * -1.5 }
  });
  particle.copy({
    translate: { x: -24, y: 34, z: layerSpace * -1.75 }
  });
  particle.copy({
    translate: { x: 34, y: 34, z: layerSpace * -1.9 },
    color: amber
  });
  particle.copy({
    translate: { x: 22, y: 40, z: layerSpace * -2.2 }
  });
  var twoCloud = new Shape({
    path: [
      { x: -20, y: 0 },
      {
        bezier: [
          { x: -13, y: 0 },
          { x: -12, y: -4 },
          { x: -10, y: -4 }
        ]
      },
      {
        bezier: [
          { x: -8, y: -4 },
          { x: -8, y: -2 },
          { x: -4, y: -2 }
        ]
      },
      {
        bezier: [
          { x: 0, y: -2 },
          { x: 1, y: -6 },
          { x: 4, y: -6 }
        ]
      },
      {
        bezier: [
          { x: 7, y: -6 },
          { x: 6, y: 0 },
          { x: 20, y: 0 }
        ]
      }
    ],
    addTo: camera,
    translate: { x: -84, y: -38, z: layerSpace * 1 },
    rotate: { y: TAU * 1 / 16 },
    scale: { x: 1 / Math.cos(TAU * 1 / 16) },
    lineWidth: 4,
    color: white,
    fill: true
  });
  twoCloud.copy({
    translate: { x: -38, y: -22, z: layerSpace * 0.5 },
    rotate: { y: TAU * 1 / 8 },
    scale: { x: 1 / Math.cos(TAU * 1 / 8) * -1 }
  });
  new Shape({
    path: [
      { x: -32, y: 0 },
      { x: -28, y: 0 },
      {
        bezier: [
          { x: -22, y: 0 },
          { x: -20, y: -6 },
          { x: -16, y: -6 }
        ]
      },
      {
        bezier: [
          { x: -12, y: -6 },
          { x: -12, y: -2 },
          { x: -8, y: -2 }
        ]
      },
      {
        bezier: [
          { x: -4, y: -2 },
          { x: -4, y: -6 },
          { x: 0, y: -6 }
        ]
      },
      {
        bezier: [
          { x: 4, y: -6 },
          { x: 4, y: -2 },
          { x: 8, y: -2 }
        ]
      },
      {
        bezier: [
          { x: 12, y: -2 },
          { x: 12, y: -6 },
          { x: 16, y: -6 }
        ]
      },
      {
        bezier: [
          { x: 20, y: -6 },
          { x: 22, y: 0 },
          { x: 28, y: 0 }
        ]
      },
      { x: 32, y: 0 }
    ],
    addTo: camera,
    translate: { x: 72, y: -52, z: layerSpace * 1 },
    rotate: { y: TAU * -1 / 16 },
    scale: { x: 1 / Math.cos(TAU * -1 / 16) },
    lineWidth: 4,
    color: white,
    fill: true
  });
  var starA = new Shape({
    path: [
      { x: 0, y: -4 },
      {
        arc: [
          { x: 0, y: 0 },
          { x: 4, y: 0 }
        ]
      },
      {
        arc: [
          { x: 0, y: 0 },
          { x: 0, y: 4 }
        ]
      },
      {
        arc: [
          { x: 0, y: 0 },
          { x: -4, y: 0 }
        ]
      },
      {
        arc: [
          { x: 0, y: 0 },
          { x: 0, y: -4 }
        ]
      }
    ],
    addTo: camera,
    translate: { x: -50, y: -50, z: layerSpace * 1.5 },
    color: gold,
    lineWidth: 2,
    fill: true
  });
  starA.copy({
    rotate: { y: TAU / 4 }
  });
  var starB = starA.copy({
    translate: { x: 42, y: -20, z: layerSpace * 0.5 }
  });
  starB.copy({
    rotate: { y: TAU / 4 }
  });
  new Shape({
    path: [
      { x: -6, y: -4 },
      { x: -4, y: -4 },
      {
        arc: [
          { x: 0, y: -4 },
          { x: 0, y: 0 }
        ]
      },
      {
        arc: [
          { x: 0, y: -4 },
          { x: 4, y: -4 }
        ]
      },
      { x: 6, y: -4 },
      { move: [{ z: -2, y: 0 }] },
      { z: 3, y: 0 }
    ],
    addTo: camera,
    translate: { x: 18, y: -30, z: layerSpace * 1 },
    lineWidth: 3,
    color: midnight,
    closed: false
  });
  var shapes = camera.getShapes();
  var t = 0;
  var tSpeed = 1 / 320;
  function animate() {
    update();
    render();
    requestAnimationFrame(animate);
  }
  animate();
  function update() {
    if (isRotating) {
      t += tSpeed;
      var theta = easeInOut(t) * TAU;
      camera.rotate.y = Math.sin(theta) * TAU / 32;
      camera.rotate.x = (Math.cos(theta) * -0.5 + 0.5) * TAU / 32;
    }
    camera.update();
    shapes.forEach(function(shape) {
      shape.updateSortValue();
    });
    shapes.sort(function(a, b) {
      return b.sortValue - a.sortValue;
    });
  }
  function easeInOut(i) {
    i = i % 1;
    var isFirstHalf = i < 0.5;
    var i1 = isFirstHalf ? i : 1 - i;
    i1 = i1 / 0.5;
    var i2 = i1 * i1;
    i2 = i2 / 2;
    return isFirstHalf ? i2 : i2 * -1 + 1;
  }
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  function render() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.save();
    ctx.scale(zoom, zoom);
    ctx.translate(w / 2, h / 2);
    shapes.forEach(function(shape) {
      shape.render(ctx);
    });
    ctx.restore();
  }
  var dragStartAngleX, dragStartAngleY;
  new Dragger({
    startElement: dom,
    onPointerDown: function() {
      isRotating = false;
      dragStartAngleX = camera.rotate.x;
      dragStartAngleY = camera.rotate.y;
    },
    onPointerMove: function(pointer, moveX, moveY) {
      var angleXMove = moveY / canvasWidth * TAU;
      var angleYMove = moveX / canvasWidth * TAU;
      camera.rotate.x = dragStartAngleX + angleXMove;
      camera.rotate.y = dragStartAngleY + angleYMove;
    }
  });
};
function reset() {
  isRotating = false;
  camera.rotate.set({ x: 0, y: 0 });
}
const _withScopeId = (n) => (pushScopeId("data-v-a51e811d"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "canvas",
  null,
  null,
  -1
  /* HOISTED */
));
const _hoisted_2 = [
  _hoisted_1
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CanvasSample3DForest",
  emits: ["ready"],
  setup(__props, { emit }) {
    const element = ref();
    onMounted(() => {
      var _a;
      start(element.value);
      emit("ready", ((_a = element.value) == null ? void 0 : _a.querySelector("canvas")) || void 0);
      window.addEventListener("resize", () => {
        reset();
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          ref_key: "element",
          ref: element,
          class: "container"
        },
        _hoisted_2,
        512
        /* NEED_PATCH */
      );
    };
  }
});
const CanvasSample3DForest_vue_vue_type_style_index_0_scoped_a51e811d_lang = "";
const CanvasSample = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a51e811d"], ["__file", "CanvasSample3DForest.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "06VideoStreamFromCanvas",
  setup(__props) {
    const error = ref();
    const videoStream = ref();
    const canvasReadyHandler = (canvas) => {
      videoStream.value = canvas == null ? void 0 : canvas.captureStream();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createCommentVNode(" Demo see https://webrtc.github.io/samples/src/content/capture/canvas-video/ "),
          createVNode(CanvasSample, { onReady: canvasReadyHandler }),
          createVNode(StreamPlayer, {
            stream: videoStream.value,
            class: "mt-20",
            autoplay: true
          }, null, 8, ["stream"]),
          createVNode(StreamTracks, {
            value: videoStream.value,
            class: "mt-20"
          }, null, 8, ["value"]),
          createVNode(MediaError, { error: error.value }, null, 8, ["error"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const _06VideoStreamFromCanvas = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "06VideoStreamFromCanvas.vue"]]);
export {
  _06VideoStreamFromCanvas as default
};
