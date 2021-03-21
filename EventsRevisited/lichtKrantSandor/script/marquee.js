var scrollDelay = 2000;
var marqueeSpeed = 1;
var timer;

var scrollArea;
var marquee;
var scrollPosition = 0;

var scrolling = function() {
    if (scrollPosition + scrollArea.offsetHeight <= 0) {
        scrollPosition = marquee.offsetHeight;
    }
    else {
        scrollPosition = scrollPosition - marqueeSpeed;
    }
    scrollArea.style.top = scrollPosition + "px";
}

var startScrolling = function() {
    timer = setInterval(scrolling, 30);
}

var initializeMarquee = function() {
    scrollArea = document.getElementById("scroll-area");
    scrollArea.style.top = 0;
    marquee = document.getElementById("marquee");
    setTimeout(startScrolling, scrollDelay);
}

var pauseMarquee = function() {
    if (marqueeSpeed > 0) {
        marqueeSpeed = 0;
    }
    else {
        marqueeSpeed = 1;
    }
}

var speedUpMarquee = function() {
    if (marqueeSpeed <= 3) {
        marqueeSpeed++;
    }
}

var slowDownMarquee = function() {
    if (marqueeSpeed > 1) {
        marqueeSpeed--;
    }
}

// function handleClickEvent(event) {
//     var target = event.target;
//     if (target.getElementById('speedUp')) {
//         speedUpMarquee();
//     }
//     else if (target.getElementById('slowDown')) {
//         slowDownMarquee();
//     }
// }


// window.onload = initializeMarquee;
window.addEventListener("load", initializeMarquee);

// onclick="speedUpMarquee()" 
document.querySelector("#speedUp").addEventListener("click", function() {
    if (marqueeSpeed <= 3) {
        marqueeSpeed++;
    }
});

// onclick="slowDownMarquee()"
document.querySelector("#slowDown").addEventListener("click", slowDownMarquee);

// onmouseover="pauseMarque();" onmouseout="pauseMarque()"
document.querySelector('#marquee').addEventListener("mouseover", pauseMarquee);
document.querySelector('#marquee').addEventListener("mouseout", pauseMarquee);