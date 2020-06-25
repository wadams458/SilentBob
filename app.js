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
  startTimer(3);
}

// "Begin" Timer

function startTimer() {
  const Timer = setInterval(function () {
    if (time > 0) {
      time--;
      console.log(time);
      updateTime();
    } else {
      console.log("Time is up");
      clearInterval(Timer);
    }
  }, 1000);
}

function updateTime() {
  // select the time element
  // on each interval, update the time element with new time value
  //const timer = document.getElementById("timer");
  document.getElementById("timer").innerText = time;

  //timer.innerText = time;
}

// Eat Timer

// function startTimer() {
//   const eat = setInterval(function () {
//     if (time > 0) {
//       time--;
//       console.log(eat);
//     } else {
//       console.log("Time is up");
//       clearInterval(Timer);
//     }
//   }, 1000);
// }
