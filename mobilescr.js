var touches = [];
var prevElements = [];
var frame = document.getElementById('frame');

function setFrameSize() {
  var height = visualViewport.height * 0.4;
  var width = visualViewport.width;
  frame.style.height = height + "px";
  frame.style.width = width + "px";
}

window.addEventListener("touchstart", e => {
  e.preventDefault();
  Array.prototype.forEach.call(e.touches, tStart);
}, {passive: false});

window.addEventListener("touchmove", e => {
  e.preventDefault();
  Array.prototype.forEach.call(e.touches, tMove);
}, {passive: false});

window.addEventListener("touchend", e => {
  e.preventDefault();
  Array.prototype.forEach.call(e.touches, tEnd);
}, {passive: false});

function tEnd(touch){
  var toRemove = [touch.clientX, touch.clientY];
  var index = touches.indexOf(toRemove);
  touches.splice(index, 1);
}

function tMove(touch, tnum){
  touches[tnum] = [touch.clientX, touch.clientY];
}

function tStart(touch) {
  touches.push(touch.clientX, touch.clientY);
}

function touchHandler(){
  for(var i = 0; i < touches.length; i++){
    touchedElem = document.elementFromPoint(touches[i][0], touches[i][1]);
    try {
      previous = prevElements[i];
      if(touchedElem === previous){
        return;
      } else {
        switch(previous.id){
          case "bup":
            frame.contentWindow.pressButtonUp(38);
            break;
          case "bright":
            frame.contentWindow.pressButtonUp(39);
            break;
          case "bdown":
            frame.contentWindow.pressButtonUp(40);
            break;
          case "bleft":
            frame.contentWindow.pressButtonUp(37);
            break;
          case "bb":
            frame.contentWindow.pressButtonUp(90);
            break;
          case "ba":
            frame.contentWindow.pressButtonUp(32);
            break;
          case "bx":
            frame.contentWindow.pressButtonUp(88);
            break;
          case "by":
            frame.contentWindow.pressButtonUp(89);
            break;
          case "bl":
            frame.contentWindow.pressButtonUp(76);
            break;
          case "br":
            frame.contentWindow.pressButtonUp(82);
            break;
          case "bselect":
            frame.contentWindow.pressButtonUp(16);
            break;
          case "bstart":
            frame.contentWindow.pressButtonUp(13);
            break;
        }
        switch(touchedElem.id){
          case "bup":
            frame.contentWindow.pressButtonDown(38);
            break;
          case "bright":
            frame.contentWindow.pressButtonDown(39);
            break;
          case "bdown":
            frame.contentWindow.pressButtonDown(40);
            break;
          case "bleft":
            frame.contentWindow.pressButtonDown(37);
            break;
          case "bb":
            frame.contentWindow.pressButtonDown(90);
            break;
          case "ba":
            frame.contentWindow.pressButtonDown(32);
            break;
          case "bx":
            frame.contentWindow.pressButtonDown(88);
            break;
          case "by":
            frame.contentWindow.pressButtonDown(89);
            break;
          case "bl":
            frame.contentWindow.pressButtonDown(76);
            break;
          case "br":
            frame.contentWindow.pressButtonDown(82);
            break;
          case "bselect":
            frame.contentWindow.pressButtonDown(16);
            break;
          case "bstart":
            frame.contentWindow.pressButtonDown(13);
            break;
        }
      }
    } catch(err) {
      switch(touchedElem.id){
        case "bup":
          frame.contentWindow.pressButtonDown(38);
          break;
        case "bright":
          frame.contentWindow.pressButtonDown(39);
          break;
        case "bdown":
          frame.contentWindow.pressButtonDown(40);
          break;
        case "bleft":
          frame.contentWindow.pressButtonDown(37);
          break;
        case "bb":
          frame.contentWindow.pressButtonDown(90);
          break;
        case "ba":
          frame.contentWindow.pressButtonDown(32);
          break;
        case "bx":
          frame.contentWindow.pressButtonDown(88);
          break;
        case "by":
          frame.contentWindow.pressButtonDown(89);
          break;
        case "bl":
          frame.contentWindow.pressButtonDown(76);
          break;
        case "br":
          frame.contentWindow.pressButtonDown(82);
          break;
        case "bselect":
          frame.contentWindow.pressButtonDown(16);
          break;
        case "bstart":
          frame.contentWindow.pressButtonDown(13);
          break;
      }
    }
  }
}

setInterval(touchHandler, 0);
setInterval(setFrameSize, 100);
