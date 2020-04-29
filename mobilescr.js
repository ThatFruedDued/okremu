var touches = [];
var prevElements = [];

function setFrameSize() {
  var height = visualViewport.height * 0.4;
  var width = visualViewport.width;
  document.getElementById('frame').style.height = height + "px";
  document.getElementById('frame').style.width = width + "px";
  for(var i = 0; i < document.getElementsByClassName('button').length; i++){
    switch(document.getElementsByClassName('button')[i].id){
      case "shoulder":
        document.getElementsByClassName('button')[i].style.height = "100px";
        document.getElementsByClassName('button')[i].style.width = width + "px";
        document.getElementsByClassName('button')[i].style.display = "block";
        break;
      case "dpadabxy":
        document.getElementsByClassName('button')[i].style.position = "absolute";
        document.getElementsByClassName('button')[i].style.top = (height * 1.75) + "px";
        document.getElementsByClassName('button')[i].style.height = "150px";
        document.getElementsByClassName('button')[i].style.width = width + "px";
        document.getElementsByClassName('button')[i].style.display = "block";
        break;
      case "dpad":
        document.getElementsByClassName('button')[i].style.position = "absolute";
        document.getElementsByClassName('button')[i].style.left = "10px";
        document.getElementsByClassName('button')[i].style.height = "150px";
        document.getElementsByClassName('button')[i].style.width = "150px";
        document.getElementsByClassName('button')[i].style.display = "block";
        break;
      case "abxy":
        document.getElementsByClassName('button')[i].style.position = "absolute";
        document.getElementsByClassName('button')[i].style.right = "10px";
        document.getElementsByClassName('button')[i].style.height = "150px";
        document.getElementsByClassName('button')[i].style.width = "150px";
        document.getElementsByClassName('button')[i].style.float = "left";
        document.getElementsByClassName('button')[i].style.display = "block";
        break;
      case "selst":
        document.getElementsByClassName('button')[i].style.position = "absolute";
        document.getElementsByClassName('button')[i].style.bottom = "0px";
        document.getElementsByClassName('button')[i].style.height = "50px";
        document.getElementsByClassName('button')[i].style.width = "100px";
        document.getElementsByClassName('button')[i].style.left = "0px";
        document.getElementsByClassName('button')[i].style.display = "block";
        break;
      case "bpause":
        document.getElementsByClassName('button')[i].style.position = "absolute";
        document.getElementsByClassName('button')[i].style.bottom = "0px";
        document.getElementsByClassName('button')[i].style.height = "50px";
        document.getElementsByClassName('button')[i].style.right = "0px";
        break;
      case "bup":
        document.getElementsByClassName('button')[i].style.position = "absolute";
        document.getElementsByClassName('button')[i].style.top = "0px";
        document.getElementsByClassName('button')[i].style.height = "50px";
        document.getElementsByClassName('button')[i].style.left = "50px";
        break;
      case "bright":
        document.getElementsByClassName('button')[i].style.position = "absolute";
        document.getElementsByClassName('button')[i].style.right = "0px";
        document.getElementsByClassName('button')[i].style.top = "50px";
        document.getElementsByClassName('button')[i].style.height = "50px";
        break;
      case "bdown":
        document.getElementsByClassName('button')[i].style.position = "absolute";
        document.getElementsByClassName('button')[i].style.height = "50px";
        document.getElementsByClassName('button')[i].style.bottom = "0px";
        document.getElementsByClassName('button')[i].style.left = "50px";
        break;
      case "bleft":
        document.getElementsByClassName('button')[i].style.position = "absolute";
        document.getElementsByClassName('button')[i].style.left = "0px";
        document.getElementsByClassName('button')[i].style.top = "50px";
        document.getElementsByClassName('button')[i].style.height = "50px";
        break;
      case "bb":
        if(!isSwapped){
          document.getElementsByClassName('button')[i].style.position = "absolute";
          document.getElementsByClassName('button')[i].style.height = "50px";
          document.getElementsByClassName('button')[i].style.bottom = "0px";
          document.getElementsByClassName('button')[i].style.left = "50px";
        }
        break;
      case "ba":
        document.getElementsByClassName('button')[i].style.position = "absolute";
        document.getElementsByClassName('button')[i].style.right = "0px";
        document.getElementsByClassName('button')[i].style.top = "50px";
        document.getElementsByClassName('button')[i].style.height = "50px";
        break;
      case "bx":
        if(!isSwapped){
          document.getElementsByClassName('button')[i].style.position = "absolute";
          document.getElementsByClassName('button')[i].style.top = "0px";
          document.getElementsByClassName('button')[i].style.height = "50px";
          document.getElementsByClassName('button')[i].style.left = "50px";
        }
        break;
      case "by":
        document.getElementsByClassName('button')[i].style.position = "absolute";
        document.getElementsByClassName('button')[i].style.left = "0px";
        document.getElementsByClassName('button')[i].style.top = "50px";
        document.getElementsByClassName('button')[i].style.height = "50px";
        break;
      case "bl":
        document.getElementsByClassName('button')[i].style.position = "absolute";
        document.getElementsByClassName('button')[i].style.left = "10px";
        document.getElementsByClassName('button')[i].style.height = "100px";
        break;
      case "br":
        document.getElementsByClassName('button')[i].style.position = "absolute";
        document.getElementsByClassName('button')[i].style.right = "10px";
        document.getElementsByClassName('button')[i].style.height = "100px";
        break;
      case "bselect":
        document.getElementsByClassName('button')[i].style.position = "absolute";
        document.getElementsByClassName('button')[i].style.left = "0px";
        document.getElementsByClassName('button')[i].style.height = "50px";
        break;
      case "bstart":
        document.getElementsByClassName('button')[i].style.position = "absolute";
        document.getElementsByClassName('button')[i].style.right = "0px";
        document.getElementsByClassName('button')[i].style.height = "50px";
        break;
    }
  }
}

function indexOfById(id){
  for(var i = 0; i < touches.length; i++){
    if(touches[i][2] === id){
      return i;
    }
  }
  return -1;
}

window.addEventListener("touchstart", e => {
  e.preventDefault();
  Array.prototype.forEach.call(e.changedTouches, tStart);
}, {passive: false});

window.addEventListener("touchmove", e => {
  e.preventDefault();
  Array.prototype.forEach.call(e.changedTouches, tMove);
}, {passive: false});

window.addEventListener("touchend", e => {
  e.preventDefault();
  for(var i = 0; i < e.changedTouches.length; i++){
    tEnd(e.changedTouches[i]);
  }
}, {passive: false});

window.addEventListener("touchcancel", e => {
  e.preventDefault();
  for(var i = 0; i < e.changedTouches.length; i++){
    tEnd(e.changedTouches[i]);
  }
}, {passive: false});

function tEnd(touch){
  window.toRemove = parseFloat(touch.identifier);
  window.index = indexOfById(toRemove);
  touches.splice(index, 1);
  if(indexOfById(toRemove) !== -1){
    touches.splice(index, 1);
  }
  var removeElem = document.elementFromPoint(parseFloat(touch.clientX), parseFloat(touch.clientY));
  window.index = prevElements.indexOf(removeElem);
  prevElements.splice(index, 1);
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

function tMove(touch){
  touches[indexOfById(parseFloat(touch.identifier))] = [parseFloat(touch.clientX), parseFloat(touch.clientY), touches[indexOfById(parseFloat(touch.identifier))][2]];
}

function tStart(touch) {
  touches.push([parseFloat(touch.clientX), parseFloat(touch.clientY), parseFloat(touch.identifier)]);
}

function touchHandler(){
  touches.forEach(function(garbage, i){
    touchedElem = document.elementFromPoint(parseFloat(touches[i][0]), parseFloat(touches[i][1]));
    try {
      previous = prevElements[i];
      if(i > prevElements.length - 1){
        throw new error('Catch me if you can!');
      }
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
      prevElements[i] = touchedElem;
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
  });
}

let thInterval = setInterval(touchHandler, 0);
let sfsInterval = setInterval(setFrameSize, 100);

window.pauseGame = function(){
  clearInterval(thInterval);
  clearInterval(sfsInterval);
  document.getElementById("buttons").style.display = "none";
  document.getElementById("frame").style.display = "none";
  document.getElementById("pausemenu").style.display = "block";
  document.getElementById("frame").contentWindow.retro.stop();
};

window.resumeGame = function(){
  thInterval = setInterval(touchHandler, 0);
  sfsInterval = setInterval(setFrameSize, 100);
  document.getElementById("buttons").style.display = "block";
  document.getElementById("frame").style.display = "block";
  document.getElementById("pausemenu").style.display = "none";
  document.getElementById("frame").contentWindow.retro.start();
};

window.reset = function(){
  document.getElementById("frame").contentWindow.reset();
  resumeGame();
};

window.save = function(){
  document.getElementById("frame").contentWindow.save();
  resumeGame();
};

window.load = function(){
  document.getElementById("frame").contentWindow.loadfunc();
  resumeGame();
};

window.deleteSave = function(){
  var didConfirm = document.getElementById("frame").contentWindow.confirmation();
  if(didConfirm){
    resumeGame();
  }
};

window.quickSave = function(){
  document.getElementById("frame").contentWindow.quickSave();
  resumeGame();
};

window.quickLoad = function(){
  document.getElementById("frame").contentWindow.quickLoad();
  resumeGame();
};

let isSwapped = false;

window.swap = function(){
  if(!isSwapped){
    isSwapped = true;
    document.getElementById('bb').style.bottom = null;
    document.getElementById('bb').style.top = "0px";
    document.getElementById('bb').style.left = "50px";
    document.getElementById('bx').style.top = null;
    document.getElementById('bx').style.bottom = "0px";
    document.getElementById('bx').style.left = "50px";
  } else {
    isSwapped = false;
    document.getElementById('bx').style.bottom = null;
    document.getElementById('bx').style.top = "0px";
    document.getElementById('bx').style.left = "50px";
    document.getElementById('bb').style.top = null;
    document.getElementById('bb').style.bottom = "0px";
    document.getElementById('bb').style.left = "50px";
  }
  resumeGame();
};
