var touches = [];
var prevElements = [];

function setFrameSize() {
  var height = visualViewport.height * 0.4;
  var width = visualViewport.width;
  document.getElementById('frame').style.height = height + "px";
  document.getElementById('frame').style.width = width + "px";
  for(var i = 0; i < document.getElementsByClassName('button').length; i++){
    document.getElementsByClassName('button')[i].height = 50;
  }
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
  console.log(e);
  Array.prototype.forEach.call(new Array(e.changedTouches), tEnd);
}, {passive: false});

function tEnd(touch){
  var toRemove = [parseFloat(touch.clientX), parseFloat(touch.clientY)];
  console.log(touch.clientX);
  var index = touches.indexOf(toRemove);
  touches.splice(index, 1);
  var removeElem = touch.target;
  switch(removeElem.id){
    case "bup":
      document.getElementById('frame').contentWindow.pressButtonUp(38);
      break;
    case "bright":
      document.getElementById('frame').contentWindow.pressButtonUp(39);
      break;
    case "bdown":
      document.getElementById('frame').contentWindow.pressButtonUp(40);
      break;
    case "bleft":
      document.getElementById('frame').contentWindow.pressButtonUp(37);
      break;
    case "bb":
      document.getElementById('frame').contentWindow.pressButtonUp(90);
      break;
    case "ba":
      document.getElementById('frame').contentWindow.pressButtonUp(32);
      break;
    case "bx":
      document.getElementById('frame').contentWindow.pressButtonUp(88);
      break;
    case "by":
      document.getElementById('frame').contentWindow.pressButtonUp(89);
      break;
    case "bl":
      document.getElementById('frame').contentWindow.pressButtonUp(76);
      break;
    case "br":
      document.getElementById('frame').contentWindow.pressButtonUp(82);
      break;
    case "bselect":
      document.getElementById('frame').contentWindow.pressButtonUp(16);
      break;
    case "bstart":
      document.getElementById('frame').contentWindow.pressButtonUp(13);
      break;
  }
}

function tMove(touch, tnum){
  touches[tnum] = [parseFloat(touch.clientX), parseFloat(touch.clientY)];
}

function tStart(touch) {
  touches.push([parseFloat(touch.clientX), parseFloat(touch.clientY)]);
}

function touchHandler(){
  for(var i = 0; i < touches.length; i++){
    touchedElem = document.elementFromPoint(parseFloat(touches[i][0]), parseFloat(touches[i][1]));
    try {
      previous = prevElements[i];
      if(touchedElem === previous){
        return;
      } else {
        prevElements[i] = touchedElem;
        switch(previous.id){
          case "bup":
            document.getElementById('frame').contentWindow.pressButtonUp(38);
            break;
          case "bright":
            document.getElementById('frame').contentWindow.pressButtonUp(39);
            break;
          case "bdown":
            document.getElementById('frame').contentWindow.pressButtonUp(40);
            break;
          case "bleft":
            document.getElementById('frame').contentWindow.pressButtonUp(37);
            break;
          case "bb":
            document.getElementById('frame').contentWindow.pressButtonUp(90);
            break;
          case "ba":
            document.getElementById('frame').contentWindow.pressButtonUp(32);
            break;
          case "bx":
            document.getElementById('frame').contentWindow.pressButtonUp(88);
            break;
          case "by":
            document.getElementById('frame').contentWindow.pressButtonUp(89);
            break;
          case "bl":
            document.getElementById('frame').contentWindow.pressButtonUp(76);
            break;
          case "br":
            document.getElementById('frame').contentWindow.pressButtonUp(82);
            break;
          case "bselect":
            document.getElementById('frame').contentWindow.pressButtonUp(16);
            break;
          case "bstart":
            document.getElementById('frame').contentWindow.pressButtonUp(13);
            break;
        }
        switch(touchedElem.id){
          case "bup":
            document.getElementById('frame').contentWindow.pressButtonDown(38);
            break;
          case "bright":
            document.getElementById('frame').contentWindow.pressButtonDown(39);
            break;
          case "bdown":
            document.getElementById('frame').contentWindow.pressButtonDown(40);
            break;
          case "bleft":
            document.getElementById('frame').contentWindow.pressButtonDown(37);
            break;
          case "bb":
            document.getElementById('frame').contentWindow.pressButtonDown(90);
            break;
          case "ba":
            document.getElementById('frame').contentWindow.pressButtonDown(32);
            break;
          case "bx":
            document.getElementById('frame').contentWindow.pressButtonDown(88);
            break;
          case "by":
            document.getElementById('frame').contentWindow.pressButtonDown(89);
            break;
          case "bl":
            document.getElementById('frame').contentWindow.pressButtonDown(76);
            break;
          case "br":
            document.getElementById('frame').contentWindow.pressButtonDown(82);
            break;
          case "bselect":
            document.getElementById('frame').contentWindow.pressButtonDown(16);
            break;
          case "bstart":
            document.getElementById('frame').contentWindow.pressButtonDown(13);
            break;
        }
      }
    } catch(err) {
      switch(touchedElem.id){
        case "bup":
          document.getElementById('frame').contentWindow.pressButtonDown(38);
          break;
        case "bright":
          document.getElementById('frame').contentWindow.pressButtonDown(39);
          break;
        case "bdown":
          document.getElementById('frame').contentWindow.pressButtonDown(40);
          break;
        case "bleft":
          document.getElementById('frame').contentWindow.pressButtonDown(37);
          break;
        case "bb":
          document.getElementById('frame').contentWindow.pressButtonDown(90);
          break;
        case "ba":
          document.getElementById('frame').contentWindow.pressButtonDown(32);
          break;
        case "bx":
          document.getElementById('frame').contentWindow.pressButtonDown(88);
          break;
        case "by":
          document.getElementById('frame').contentWindow.pressButtonDown(89);
          break;
        case "bl":
          document.getElementById('frame').contentWindow.pressButtonDown(76);
          break;
        case "br":
          document.getElementById('frame').contentWindow.pressButtonDown(82);
          break;
        case "bselect":
          document.getElementById('frame').contentWindow.pressButtonDown(16);
          break;
        case "bstart":
          document.getElementById('frame').contentWindow.pressButtonDown(13);
          break;
      }
    }
  }
}

setInterval(touchHandler, 0);
setInterval(setFrameSize, 100);
