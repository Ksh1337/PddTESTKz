const img = document.querySelector('#img');
const main = document.querySelector('#menu-main')

img.addEventListener('click', () => {
    if (main.classList.contains('display') == true) {
        main.classList.remove('display')
    } else {
        main.classList.add('display')
    }
});

$(document).ready(function () {
    window.onload = function () {
        if (window.jQuery) {
            // jQuery is loaded
            alert("Yeah!");
        } else {
            // jQuery is not loaded
            alert("Doesn't Work");
        }
    }
})
/*
quest.addEventListener('click', () => {
    if (qq.classList.contains('display') == true) {
        qq.classList.remove('display')
    } else {
        qq.classList.add('display')
    }
});
*/


/*

questions.addEventListener('click', () => {
     if (qq.classList.contains('display') == true) {
         qq.classList.remove('display')
     } else {
         qq.classList.add('display')
     }
 });

 */