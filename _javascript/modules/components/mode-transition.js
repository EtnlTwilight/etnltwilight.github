/*
 * Load transition after page loaded,
 * to avoid a strange visual when switching page.
 */

export function initTransition() {
    window.addEventListener("load", function () {
        window.setTimeout(function () {
            loadTransition();
        }, 200);
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
                    
            .a,
            .time,
            .p,
            .span,
            a,
            time,
            p,
            span {
                transition: color .05s ease-in-out;
                will-change: color;
            }

            .h1,
            .h2,
            .h3,
            .h4,
            .h5,
            .h6,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                transition: color .05s ease-in-out;
                will-change: color;
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