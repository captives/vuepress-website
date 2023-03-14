
export default function onAnimationFrame(callback: FrameRequestCallback) {
    callback(0);
    if ("requestAnimationFrame" in window) {
        window.requestAnimationFrame(onAnimationFrame.bind(window, callback));
    } else if ("webkitRequestAnimationFrame" in window) {
        window['webkitRequestAnimationFrame'](onAnimationFrame.bind(window, callback));
    } else if ("msRequestAnimationFrame" in window) {
        window['msRequestAnimationFrame'](onAnimationFrame.bind(window, callback));
    } else if ("mozRequestAnimationFrame" in window) {
        window['mozRequestAnimationFrame'](onAnimationFrame.bind(window, callback));
    }
}