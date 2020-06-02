(function(){
  let jsonString = localStorage.getItem("gamevals");
  if(typeof jsonString !== "undefined"){
    window.gameVals = JSON.parse(jsonString)
  } else {
    fetch("https://okremugamepaks.github.io/default.json")
    .then(r => {
      r.json()
      .then(j => {
        window.gameVals = j;
      });
    });
  }
})();
