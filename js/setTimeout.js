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
      clockIcon.title = "Hẹn giờ";
      audio.pause();
    }, duration);

    clockIcon.classList.add("red");
    clockIcon.title = "Hủy hẹn giờ";
    audio.play();
  } else {
    clockIcon.classList.remove("red");
    clockIcon.title = "Hẹn giờ";
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
    if(x < 1){
        timer.innerHTML = "Hãy hẹn giờ ít nhất 1 phút" ;
    } else if(x > 181){
      timer.innerHTML = "Không nên nghe nhạc quá 181 phút!" ;
    } else{
        timer.innerHTML = "Sẽ dừng phát trong: " + x + " phút" ;
    }
};

confirmTimeoutBtn.addEventListener("click", handleTimeoutConfirmation);
document.addEventListener("keydown", (event) => {
  var keyCode = event.keyCode || event.which;
  if (keyCode === 13) {
    handleTimeoutConfirmation();
  }
});

function handleTimeoutConfirmation() {
  const selectedOption = document.querySelector('input[name="timeout-option"]');
  if (selectedOption) {
    const duration = parseInt(selectedOption.value) * 60000;
    startTimeout(duration);
  } else {
    startTimeout(0);
  }
  hideTimeoutOptions();
}
