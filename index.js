// document.getElementById("academics").addEventListener("click", function() {
//     window.location.href = "academic.html";
// })

//jQuery imported for button response
$(document).ready(function() {
    $("#academics").click(function() {
        window.location.href = "academic.html";
    });
    $("#career").click(function() {
        window.location.href = "career.html";
    });
    $("#personal").click(function() {
        window.location.href = "personal.html";
    });
    $("#miscellaneous").click(function(){
        window.location.href = "miscellaneous.html"
    })
});

let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Downscroll code
        document.querySelector('.sidebar').classList.add('hide-navbar');
    } else {
        // Upscroll code
        document.querySelector('.sidebar').classList.remove('hide-navbar');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);