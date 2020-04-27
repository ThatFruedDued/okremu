function setFrameSize() {
  var height = visualViewport.height * 0.4;
  var width = visualViewport.width;
  var frame = document.getElementById('frame');
  frame.style.height = height + "px";
  frame.style.width = width + "px";
}

var up = document.getElementById("upbutton");
var right = document.getElementById("rightbutton");
var down = document.getElementById("downbutton");
var left = document.getElementById("leftbutton");

window.addEventListener("touchstart", e => {
  e.preventDefault();
}, {passive: false});

window.addEventListener("touchmove", e => {
  e.preventDefault();
}, {passive: false});

window.addEventListener("touchend", e => {
  e.preventDefault();
}, {passive: false});

setInterval(setFrameSize, 100);
