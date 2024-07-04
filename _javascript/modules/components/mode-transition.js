/**
 * Load transition after page loaded,
 * to avoid a strange visual when switching page.
 */

var isPageLoaded = false;
var isTransitionLoaded = false;

export function initTransition() {
    document.addEventListener("DOMContentLoaded", function () {
        isPageLoaded = true;
        isPageUnLoaded = false;
    });

    window.addEventListener("message", function (event) {
        if (event.data.direction === ModeToggle.ID) {
            if (!isPageLoaded) {
                loadTransition();
                isTransitionLoaded = true;
            }
        }
    });

    window.addEventListener("unload", function(){
        if(isTransitionLoaded){
            removeTransition();
            isTransitionLoaded = false;
        }
    });
}

function loadTransition() {
    var newStyle = document.createElement('style');
    var cssRules = `
            * {
                transition: background-color 0.3s ease-in-out,
                            border 0.3s ease-in-out,
                            box-shadow 0.3s ease-in-out,
                            color 0.3s ease-in-out;
            }
        `;
    newStyle.id = "color-mode-transition";
    newStyle.appendChild(document.createTextNode(cssRules));

    // 将新样式添加到文档的head部分
    document.head.appendChild(newStyle);
}

function removeTransition() {
    var style = document.getElementById("color-mode-transition")
    if (!(style == null)) {
        document.head.removeChild(style);
    }
}