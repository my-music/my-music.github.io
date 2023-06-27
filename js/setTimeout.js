const clockIcon = $("#clock-icon");
const setTimeoutBtn = $("#set-timeout-btn");
const timeoutOptions = $("#timeout-options");
const confirmTimeoutBtn = $("#confirm-timeout-btn");
const timer = $("#timer");
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
    clockIcon.title = "Đã hẹn giờ trong: " + duration / 60000 + " phút";
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
// startTimeout(0); // clear current timeout, if any
  showTimeoutOptions();
});

confirmTimeoutBtn.disabled = true;
function myFunction() {
    const x = $('#timeout').value;
    if(x < 5){
        timer.innerHTML = "Hãy hẹn giờ ít nhất 5 phút" ;
        confirmTimeoutBtn.disabled = true;
    } else if(x > 181){
      timer.innerHTML = "Không nên nghe nhạc quá 181 phút!" ;
      confirmTimeoutBtn.disabled = true;
    } else{
        timer.innerHTML = "Sẽ dừng phát trong: " + x + " phút" ;
        confirmTimeoutBtn.disabled = false;
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
  const x = $('#timeout').value;
  if( x >= 5 && x <= 181 ){
    const selectedOption = document.querySelector('input[name="timeout-option"]');
    if (selectedOption) {
      const duration = parseInt(selectedOption.value) * 60000;
      startTimeout(duration);
    } else {
      startTimeout(0);
    }
    hideTimeoutOptions();
  }
}