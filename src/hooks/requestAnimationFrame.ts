
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

export const useAnimationFrame = () => {
    function onAnimationFrame(callback: FrameRequestCallback): number {
        callback(0);
        if ("requestAnimationFrame" in window) {
            return window.requestAnimationFrame(onAnimationFrame.bind(window, callback));
        } else if ("webkitRequestAnimationFrame" in window) {
            return window['webkitRequestAnimationFrame'](onAnimationFrame.bind(window, callback));
        } else if ("msRequestAnimationFrame" in window) {
            return window['msRequestAnimationFrame'](onAnimationFrame.bind(window, callback));
        } else if ("mozRequestAnimationFrame" in window) {
            return window['mozRequestAnimationFrame'](onAnimationFrame.bind(window, callback));
        }
        return 0;
    }

    function cancelAnimationFrame(id: number) {
        if ("cancelAnimationFrame" in window) {
            window.cancelAnimationFrame(id);
        } else if ("webkitCancelAnimationFrame" in window) {
            window['webkitRequestAnimationFrame'](id);
        } else if ("msCancelAnimationFrame" in window) {
            window['msRequestAnimationFrame'](id);
        } else if ("mozCancelAnimationFrame" in window) {
            window['mozRequestAnimationFrame'](id);
        }
    }

    return {
        onAnimationFrame,
        cancelAnimationFrame
    }
}