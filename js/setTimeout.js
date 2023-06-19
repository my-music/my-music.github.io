const clockIcon = document.getElementById("clock-icon");
const setTimeoutBtn = document.getElementById("set-timeout-btn");
const timeoutOptions = document.getElementById("timeout-options");
const confirmTimeoutBtn = document.getElementById("confirm-timeout-btn");
const timer = document.getElementById("timer");
let timeoutID = null;

function startTimeout(duration) {
  clearTimeout(timeoutID);

  if (duration) {
    timeoutID = setTimeout(() => {
      clockIcon.classList.remove("red");
      audio.pause();
    }, duration);

    clockIcon.classList.add("red");
      audio.play();
  } else {
    clockIcon.classList.remove("red");
    // Continue audio and don't set a timeout
  }
}

function showTimeoutOptions() {
  timeoutOptions.style.display = "block";
}

function hideTimeoutOptions() {
  timeoutOptions.style.display = "none";
}

setTimeoutBtn.addEventListener("click", () => {
  startTimeout(0); // clear current timeout, if any
  showTimeoutOptions();
});

function myFunction() {
    const x = document.getElementById('timeout').value;
    if(x < 60000){
        timer.innerHTML = "Sẽ dừng phát vào: " + Math.floor(x / 1000) + " giây nữa" ;
    }  else{
        timer.innerHTML = "Sẽ dừng phát vào: " + Math.floor(x / 60000) + " phút nữa" ;
    }
    
};

confirmTimeoutBtn.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="timeout-option"]');

  if (selectedOption) {
    const duration = parseInt(selectedOption.value);
    startTimeout(duration);
  } else {
    startTimeout(0);
  }

  hideTimeoutOptions();
});
