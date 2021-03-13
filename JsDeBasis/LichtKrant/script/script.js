var scrollDelay = 2000;
var marqueeSpeed = 1;
var timer;

var scrollArea = document.querySelector('#scroll-area');
var marquee = document.querySelector('#marquee');
var scrollPosition = 0;

var scrolling = function () {
  if (scrollPosition + scrollArea.offsetHeight <= 0) {
    scrollPosition = marquee.offsetHeight;
  } else {
     
    scrollPosition = scrollPosition - marqueeSpeed;
  }
  scrollArea.style.top = scrollPosition + "px";
}

var startScrolling = function () {
  timer = setInterval(scrolling, 30);
}

var initializeMarquee = function () {
  scrollArea.style.top = 0;
  setTimeout(startScrolling, scrollDelay);
}

var pauseMarquee = function(){
  if(marqueeSpeed > 0){
    marqueeSpeed = 0;
  }
  else{
    marqueeSpeed = 1
  }
} 


var speedUpMarquee = function(){
  if (marqueeSpeed <= 3){
    marqueeSpeed++;
  }
}

var slowDownMarquee = function(){
  if(marqueeSpeed > 1){
    marqueeSpeed--;
  }  
}

window.onload = initializeMarquee;
