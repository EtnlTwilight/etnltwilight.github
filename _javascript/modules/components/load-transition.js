/**
 * Load transition after page loaded,
 * to avoid a strange visual when switching page.
 */

export function loadTransition() {
    document.addEventListener('DOMContentLoaded', function () {
        // 页面加载完成后，给body添加transition-active类
        var newStyle = document.createElement('style');
        var cssRules = `
            * {
                transition: background-color 0.3s ease-in-out,
                            border 0.3s ease-in-out,
                            box-shadow 0.3s ease-in-out,
                            color 0.3s ease-in-out;
            }
        `;
        newStyle.appendChild(document.createTextNode(cssRules));

        // 将新样式添加到文档的head部分
        document.head.appendChild(newStyle);
    });
}