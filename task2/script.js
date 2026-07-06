
var currentTime = 0;      
var timerId = null;      
var isRunning = false;    

var MAX_TIME = 30;       
var STEP = 3;             
var TICK_SPEED = 1000;    
function getMascotFace(time) {
  if (time >= MAX_TIME) {
    return "🎉";
  } else if (time >= 24) {
    return "🤩";
  } else if (time >= 12) {
    return "😃";
  } else if (time >= 3) {
    return "🙂";
  } else {
    return "😴";
  }
}
function getProgressColor(time) {
  if (time >= MAX_TIME) {
    return "#f9a825";  
  } else if (time >= 21) {
    return "#ef6c00";  
  } else {
    return "#1565c0";  
  }
}

function updateDisplay() {
  var display = document.getElementById("display");
  display.textContent = currentTime;
  document.getElementById("mascot").textContent = getMascotFace(currentTime);
  var percent = (currentTime / MAX_TIME) * 100;
  var progressFill = document.getElementById("progressFill");
  progressFill.style.width = percent + "%";
  progressFill.style.backgroundColor = getProgressColor(currentTime);
  if (isRunning) {
    display.classList.add("running");
  } else {
    display.classList.remove("running");
  }
  var box = document.getElementById("stopwatchBox");
  var confetti = document.getElementById("confetti");
  if (currentTime >= MAX_TIME) {
    confetti.style.display = "block";
    box.classList.add("celebrate");
  } else {
    confetti.style.display = "none";
    box.classList.remove("celebrate");
  }

  updateStatusText();
  updateButtonStates();
}
function updateStatusText() {
  var status = document.getElementById("statusText");

  if (currentTime >= MAX_TIME) {
    status.textContent = "Woohoo! You made it to 30! Press Reset to go again.";
  } else if (isRunning) {
    status.textContent = "Ticking away...";
  } else if (currentTime > 0) {
    status.textContent = "Paused at " + currentTime + " seconds.";
  } else {
    status.textContent = "Ready when you are!";
  }
}
function updateButtonStates() {
  var startBtn = document.getElementById("startBtn");
  var stopBtn = document.getElementById("stopBtn");
  startBtn.disabled = isRunning || currentTime >= MAX_TIME;
  stopBtn.disabled = !isRunning;
}
function startTimer() {
  if (isRunning) {
    return;
  }

  if (currentTime >= MAX_TIME) {
    return;
  }

  isRunning = true;
  updateDisplay();
  timerId = setInterval(function () {
    currentTime = currentTime + STEP;
    updateDisplay();
    if (currentTime >= MAX_TIME) {
      stopTimer();
    }
  }, TICK_SPEED);
}
function stopTimer() {
  clearInterval(timerId);
  isRunning = false;
  updateDisplay();
}
function resetTimer() {
  clearInterval(timerId);
  isRunning = false;
  currentTime = 0;
  updateDisplay();
}
updateDisplay();
