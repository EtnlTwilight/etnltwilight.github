/**
 * Load transition after page loaded,
 * to avoid a strange visual when switching page.
 */

export function initTransition() {
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function() {
            loadTransition();
        }, 800);
    });
}

function loadTransition() {
    var newStyle = document.createElement('style');
    var cssRules = `
            * {
                transition: background-color 0.3s ease-in-out,
                            border-color 0.3s ease-in-out,
                            box-shadow 0.3s ease-in-out,
                            color 0.3s ease-in-out;
            }
        `;
    newStyle.id = "color-mode-transition";
    newStyle.appendChild(document.createTextNode(cssRules));

    // 将新样式添加到文档的head部分
    document.head.appendChild(newStyle);
}