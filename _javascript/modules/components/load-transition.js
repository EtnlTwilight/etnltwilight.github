/**
 * Load transition after page loaded,
 * to avoid a strange visual when switching page.
 */

export function loadTransition() {
    document.addEventListener('DOMContentLoaded', function () {
        // 页面加载完成后，给body添加transition-active类
        var css = document.styleSheets[document.styleSheets.length - 1];
        css.insertRule("* {will-change: unset;transition: background-color .3s ease-in-out,border .3s ease-in-out,box-shadow .3s ease-in-out,color .3s ease-in-out;}", css.length);
        console.log(css);
    });
}