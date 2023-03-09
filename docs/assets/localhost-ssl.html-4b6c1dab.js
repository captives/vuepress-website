import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, e as createTextVNode, f as createVNode, j as createStaticVNode } from "./app-9194e199.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "开发调试ssl证书-浏览器信任localhost",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#开发调试ssl证书-浏览器信任localhost",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 开发调试SSL证书-浏览器信任localhost")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "在实际开发中,需要用到ssl证书, 比如启用摄像头、麦克风和屏幕共享等;",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "在没有域名,并且更没有泛域名证书的情况下,需要用到https服务,怎么办?",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "mkcert-生成localhost证书",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#mkcert-生成localhost证书",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" mkcert 生成localhost证书")
  ],
  -1
  /* HOISTED */
);
const _hoisted_5 = {
  href: "https://github.com/FiloSottile/mkcert/releases",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "创建证书")
  ],
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<div class="language-text" data-ext="text"><pre class="language-text"><code>./mkcert.exe example.com &quot;*.example.com&quot; example.test localhost 127.0.0.1\n</code></pre></div><p>就创建了对以下名称有效的新证书</p><ul><li>example.com</li><li>*.example.com</li><li>example.test</li><li>localhost</li><li>127.0.0.1</li></ul><p>在当前目录下,产生两个<code>*.pem</code>文件</p><div class="language-text" data-ext="text"><pre class="language-text"><code>example.com+3.pem\nexample.com+3-key.pem\n</code></pre></div><ul><li>安装证书</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>./mkcert -install\n</code></pre></div><ul><li>证书使用</li></ul><ol><li>Nginx 配置证书</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># HTTPS server\nserver {\n    listen 443 ssl;\n    server_name localhost;\n\n    ssl	on;\n    ssl_certificate D:\\\\nginx-1.8.1\\\\conf\\\\ssl\\\\seven.uuabc.com+3.pem;\n    ssl_certificate_key D:\\\\nginx-1.8.1\\\\conf\\\\ssl\\\\seven.uuabc.com+3-key.pem;\n    ssl_ciphers EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH;\n    ssl_protocols TLSv1.1 TLSv1.2;\n\n    # 反向代理\n    location /app {\n        #允许跨域请求的域，* 代表所有\n        add_header &#39;Access-Control-Allow-Origin&#39; *;\n        #允许带上cookie请求\n        add_header &#39;Access-Control-Allow-Credentials&#39; &#39;true&#39;;\n        #允许请求的方法，比如 GET/POST/PUT/DELETE\n        add_header &#39;Access-Control-Allow-Methods&#39; *;\n        #允许请求的header\n        add_header &#39;Access-Control-Allow-Headers&#39; *;\n        \n        proxy_pass http://127.0.0.1:8080/app/;\n    }\n\n    location / {\n        root html;\n        index index.html index.htm;\n    }\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重启Nginx服务 浏览器访问 <code>https://localhost</code>地址,证书就可以被信任了。</li></ul>', 11);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createTextVNode("下载"),
          createBaseVNode("a", _hoisted_5, [
            createTextVNode("mkcert-vx.y.z-windows-amd64.exe"),
            createVNode(_component_ExternalLinkIcon)
          ])
        ])
      ]),
      _hoisted_6
    ]),
    _hoisted_7
  ]);
}
const localhostSsl_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "localhost-ssl.html.vue"]]);
export {
  localhostSsl_html as default
};
