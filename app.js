console.log("Hi im Silent Bob");

//------- Timer ------- //

// Select Button
// Save Button in Variable
// Add click event listener to button

//--------App State
let time = 3;

//---------- Cached DOM Elements

const startButton = document.getElementById("startGame");

//------------Event Listeners

startButton.addEventListener("click", handleStartGame);

//----------- Function Declarations

function handleStartGame() {
  console.log("Start Game clicked...!");

  // Start Timer
  startTimer();
}

function startTimer() {
  const Timer = setInterval(function () {
    if (time > 0) {
      time--;
      console.log(time);
    } else {
      console.log("Time is up");
      clearInterval(Timer);
    }
  }, 1000);
}
