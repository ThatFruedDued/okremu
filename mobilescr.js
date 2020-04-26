function setFrameSize() {
  var height = visualViewport.height * 0.4;
  var width = visualViewport.width;
  var frame = document.getElementById('frame');
  frame.style.height = height + "px";
  frame.style.width = width + "px";
}

setInterval(setFrameSize, 100);
