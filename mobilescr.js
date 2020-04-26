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
});

window.addEventListener("touchmove", e => {
  e.preventDefault();
});

window.addEventListener("touchend", e => {
  e.preventDefault();
});

setInterval(setFrameSize, 100);
