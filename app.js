console.log("Hi im Silent Bob");

class Pet {
  constructor(name = "Pet") {
    this.name = name;
    this.hunger = 0;
    this.hungerWidth = 0;
    this.sleep = 0;
    this.sleepWidth = 0;
    this.boredom = 0;
    this.boredomWidth = 0;
    this.time = 60;
    this.age = 1;
  }
}

//------- Timer ------- //

// Select Button
// Save Button in Variable
// Add click event listener to button

//--------App State
const bed = document.querySelector(".bed");
const hourglass = document.querySelector(".hourglass");
const bone = document.querySelector(".bone");
//const bone = 10;
let time = 10;
let score = 0;

//---------- Cached DOM Elements

// const boneContainer = document.querySelector(.bone);
// const hourGlassContainer = document.querySelector(.hourGlass);
// const bedContainer = document.querySelector(.bed);

//------------Event Listeners

// startButton.addEventListener("click", handleStartGame);

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
    //checkScore(play);
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

// function checkScore(play) {
//   //if play = boredom; score + 1
//   //else score = score - 1

//   if (play === "boredom") {
//     //score = score -1
//     score++;
//     //document.querySelector.('h1').innerText = `Day: $(score)`;
//   } else {
//     //score = score -1
//     score--;
//     //document.querySelector.('h1').innerText = `Day: $(score)`;
//   }
// }

//-----MVP FUNCTIN CODE-------->
// one function to do all 3. make dry
//string Checkscore eat,

//Write  new code here

//---------BROKEN CODE MAYBE------------------------>

// function checkScore(Eat), Nap, Play) {
//   //if play = boredom; score + 1
//   //else score = score - 1

//   if (Eat === "sleepiness") {
//     //score = score -1
//     score++;
//     //document.querySelector.('h1').innerText = `Day: $(score)`;
//   } else {
//     //score = score -1
//     score--;
//     //document.querySelector.('h1').innerText = `Day: $(score)`;
//   }
// }

// function checkScore(Nap) {
//   //if play = boredom; score + 1
//   //else score = score - 1

//   if ("sleepiness" === "boredom") {
//     //score = score -1
//     score++;
//     //document.querySelector.('h1').innerText = `Day: $(score)`;
//   } else {
//     //score = score -1
//     score--;
//     //document.querySelector.('h1').innerText = `Day: $(score)`;
//   }
// }

// Add a class to the new div
//bone. className = 'bone';
//Add classes to class list

//----------END BROKEN CODE--------------------------->

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

//Buttons

const startButton = document.getElementById("startGame");
const eatButton = document.getElementById("eat");
const playButton = document.getElementById("play");
const napButton = document.getElementById("nap");

// document.getElementById("eat") = eat;
// document.getElementById("play") = play;
// document.getElementById("nap") = nap;

startButton.addEventListener("click", handleStartGame);
eatButton.addEventListener("click", handleEat);
playButton.addEventListener("click", handlePlay);
napButton.addEventListener("click", handleNap);

// const playButton = $("#play");
// const eatButton = $("#eat");
// const napButton = $("#nap");

//User actions
// $(playButton).on("click", play);
// $(feedButton).on("click", eat);
// $(napButton).on("click", nap);
