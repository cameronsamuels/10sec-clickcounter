document.addEventListener("DOMContentLoaded", function() {
  
  var clickCount = 0;
  var timeStarted;
  var restartTimeout;
  
  function randomizeBackground() {
  	var colors = [
  		"rgb(196, 143, 101)",
  		"rgb(220, 76, 70)",
  		"rgb(146, 181, 88)",
  		"rgb(79, 132, 196)",
  		"rgb(210, 105, 30)",
  		"rgb(34, 58, 94)",
  		"rgb(250, 179, 1)",
  		"rgb(0, 89, 96)",
  		"rgb(137, 142, 140)",
  		"rgb(103, 46, 59)"
  	];
  	do {
  		var hexColor = colors[Math.floor(Math.random() * colors.length)];
  	} while (hexColor == document.body.style.background);
  	document.body.style.background = hexColor;
  }
  randomizeBackground();
  
  function tick() {
    if (!timeStarted) {
      timeStarted = new Date();
      document.querySelector("div").style.fontSize = "24vmin";
    }
  	if (new Date() - timeStarted >= 10000) {
  		clickCount = 0;
  		timeStarted = 0;
  		restartTimeout = true;
  		setTimeout(function(){ restartTimeout = false }, 2000);
  		document.querySelectorAll("div")[1].textContent = "Time's Up!";
  	} else {
  		document.querySelectorAll("div")[1].textContent = 10 - Math.round((new Date() - timeStarted) / 1000);
  		requestAnimationFrame(tick);
  	}
  }
  
  document.addEventListener(navigator.userAgent.match(/Android|iPhone|iPad/i) ? "touchend" : "click", function() {
  	if (restartTimeout) return;
  	clickCount++;
  	document.querySelector("div").textContent = clickCount;
  	randomizeBackground();
  	if (!timeStarted) tick();
  });
  
  document.addEventListener("contextmenu", function(e) { e.preventDefault() });
  
});
