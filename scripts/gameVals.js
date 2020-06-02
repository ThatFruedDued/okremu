(function(){
  let jsonString = localStorage.getItem("gamevals");
  if(typeof jsonString !== "undefined"){
    window.gameVals = JSON.parse(jsonString)
  } else {
    fetch("https://okremugamepaks.github.io/default.json")
    .then(r => {
      r.text()
      .then(j => {
        localStorage.setItem("gamevals", j);
        alert("[CODE OEMU-00001] okrEMU is undergoing an update. You will be reloaded and everything will continue as normal. Please dismiss this popup to use okrEMU.")
      });
    });
  }
})();
