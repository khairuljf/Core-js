'use strict';

document.addEventListener("DOMContentLoaded", function () {

    var targetDiv = document.querySelector('#welcome-read');
    var divHeight = targetDiv.clientHeight;
    targetDiv.style.cssText = 'height:285px; overflow:hidden;transition:all .5s';
    var targetClick = document.querySelector('.read-more');

    if (divHeight <= 300) {
        targetClick.style = 'display:none';
        targetDiv.style.cssText = 'height:' + divHeight + 'px;';
    }

    targetClick.addEventListener('click', function (e) {

        if (targetDiv.clientHeight > 300) {
            targetDiv.style.cssText = 'height:285px; overflow:hidden;transition:all .5s';
            targetClick.textContent = 'Read more';
        } else {
            targetDiv.style.cssText = 'height:' + divHeight + 'px; overflow:hidden;transition:all .5s';
            targetClick.textContent = 'close';
        }

        e.preventDefault();
    });
});

function khairul() {
    console.log('hey, khairul');
}
