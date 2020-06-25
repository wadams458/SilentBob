console.log("Hi im Silent Bob");

//------- Timer ------- //

// Select Button
// Save Button in Variable
// Add click event listener to button

//--------App State
const bed = document.querySelector(".bed");
const hourglass = document.querySelector(".hourglass");
const bone = document.querySelector(".bone");
//const bone = 10;
let time = 3;
let score = 0;

//---------- Cached DOM Elements

const startButton = document.getElementById("startGame");
// const boneContainer = document.querySelector(.bone);
// const hourGlassContainer = document.querySelector(.hourGlass);
// const bedContainer = document.querySelector(.bed);

//------------Event Listeners

startButton.addEventListener("click", handleStartGame);

//Event Delegation
//Event listeners are registered when the DOM Loads
// To fix this problem use event delegation (assigning listener to parent)

bone.addEventListener("click", handleBoneClick);
bed.addEventListener("click", handleBedClick);
hourglass.addEventListener("click", handleHourglassClick);

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

//Event  Delegation

function handleBoneClick(event) {
  console.log(event.target.classList.contains("bone"));
  {
    //const bone = event.target.style.button;

    //if (event.target.classList.contains("bone")) {
    //boneContainer.removeChild(event.target);
    checkScore(play);
  }
}

function handleBedClick(event) {
  console.log("bed Clicked!");
  //f (event.target.classList.contains("bed")) {
}

function handleHourglassClick(event) {
  console.log("hourGlass Clicked!");
  //if (event.target.classList.contains("hourGlass")) {
}

function checkScore(play) {
  //if play = boredom; score + 1
  //else score = score - 1

  if (play === "boredom") {
    //score = score -1
    score++;
    //document.querySelector.('h1').innerText = `Day: $(score)`;
  } else {
    //score = score -1
    score--;
    //document.querySelector.('h1').innerText = `Day: $(score)`;
  }
}

function checkScore(Eat) {
  //if play = boredom; score + 1
  //else score = score - 1

  if (Eat === "sleepiness") {
    //score = score -1
    score++;
    //document.querySelector.('h1').innerText = `Day: $(score)`;
  } else {
    //score = score -1
    score--;
    //document.querySelector.('h1').innerText = `Day: $(score)`;
  }
}

function checkScore(Nap) {
  //if play = boredom; score + 1
  //else score = score - 1

  if ("sleepiness" === "boredom") {
    //score = score -1
    score++;
    //document.querySelector.('h1').innerText = `Day: $(score)`;
  } else {
    //score = score -1
    score--;
    //document.querySelector.('h1').innerText = `Day: $(score)`;
  }
}

// Add a class to the new div
//bone. className = 'bone';
//Add classes to class list

bone.classList.add("bone");
hourglass.classList.add("hourglass");
bed.classList.add("bed");

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
