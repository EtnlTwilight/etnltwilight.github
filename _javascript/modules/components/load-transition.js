/**
 * Load transition after page loaded,
 * to avoid a strange visual when switching page.
 */

export function loadTransition(){
    document.addEventListener('DOMContentLoaded', function() {
        // 页面加载完成后，给body添加transition-active类
        document.body.classList.add('transition-active');});
}