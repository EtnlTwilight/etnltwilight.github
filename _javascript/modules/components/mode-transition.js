/*
 * Load transition after page loaded,
 * to avoid a strange visual when switching page.
 */

export function initTransition() {
    window.addEventListener("load", function () {
        window.setTimeout(function () {
            loadTransition();
        }, 2000);
    });

    window.addEventListener("unload", function () {
        removeTransition();
    });
}

function loadTransition() {
    var newStyle = document.createElement('style');
    var cssRules = `
            * {
                transition: 
                    background-color 0.2s ease-in-out,
                    border 0.2s ease-in-out,
                    box-shadow 0.2s ease-in-out,
                    color 0.2s ease-in-out;
            }
        `;
    newStyle.id = "color-mode-transition";
    newStyle.appendChild(document.createTextNode(cssRules));
    document.head.appendChild(newStyle);
}

function removeTransition() {
    var style = document.getElementById("color-mode-transition")
    if (!(style == null)) {
        document.head.removeChild(style);
    }
}