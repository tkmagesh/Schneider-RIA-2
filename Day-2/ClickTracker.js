(function (window, document) {
  var counter = 0;
  function displayMessage(msg) {
    if (document.getElementById("divMessage")) {
      document.getElementById("divMessage").innerHTML = msg;
    }
  }
  
  function trackClick() {
    counter++;
    displayMessage(counter);
  }

  function initialize() {
    document.getElementById("btnTrack").onclick = trackClick;
  }
  window.onload = initialize;
}(window, document));