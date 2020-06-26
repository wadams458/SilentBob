console.log("Hi im Silent Bob");

let hunger = 0;
let sleep = 0;
let boredom = 0;
let time = 0;
let score = 0;
let death = 0;

// Select Button
// Save Button in Variable
// Add click event listener to button

//--------App State

//Event Delegation
//Event listeners are registered when the DOM Loads
// To fix this problem use event delegation (assigning listener to parent)

//----------- Function Declarations

function handleStartGame() {
  console.log("Start Game clicked...!");

  //------- Timer ------- //

  // Start Timer
  startTimer(0);
}

function handleEat() {
  if (hunger > 0) {
    hunger--;
    document.getElementById("hunger").innerHTML = `<h3>HUNGER ${hunger}</h3>`;
    console.log("hunger!", hunger);
  }
}
function handlePlay() {
  if (boredom > 0) {
    boredom--;
    document.getElementById(
      "boredom"
    ).innerHTML = `<h3>BOREDOM ${boredom}</h3>`;
    console.log("play", play);
  }
}
function handleNap() {
  if (sleep > 0) {
    sleep--;
    document.getElementById(
      "sleepiness"
    ).innerHTML = `<h3>SLEEPINESS ${sleep}</h3>`;
    console.log("Nap!!", nap);
  }
}

// "Begin" Timer

function startTimer() {
  const timer = setInterval(function () {
    time++;
    console.log(time);
    updateTime();
    // increaseHunger();
    // increaseSleep();
    // increaseBoredom();
    if (time % 3 === 0) {
      increaseHunger();
      increaseSleep();
      increaseBoredom();
      console.log(hunger);
    }
    if (hunger >= 10 || boredom >= 10 || sleep >= 10) {
      clearInterval(timer);
      //fix this
      console.log("creature died");
    }
  }, 1000);
}

function increaseHunger() {
  hunger++;
  document.getElementById("hunger").innerHTML = `<h3>Hunger ${hunger}</h3>`;

  //console.log("hunger!", hunger);
}

function increaseSleep() {
  sleep++;
  document.getElementById(
    "sleepiness"
  ).innerHTML = `<h3>SLEEPINESS ${sleep}</h3>`;

  console.log("sleep!", sleep);
}

function increaseBoredom() {
  boredom++;
  document.getElementById("boredom").innerHTML = `<h3>BOREDOM ${boredom}</h3>`;
  console.log("Boredom!", boredom);
}

function updateTime() {
  // select the time element
  // on each interval, update the time element with new time value
  //const timer = document.getElementById("timer");
  document.getElementById("timer").innerText = time;

  //timer.innerText = time;
}

//Event  Delegation

// Add a class to the new div

//Add classes to class list

const startButton = document.getElementById("startGame");
const eatButton = document.getElementById("eat");
const playButton = document.getElementById("play");
const napButton = document.getElementById("nap");

// document.getElementById("eat") = eat;
// document.getElementById("play") = play;
// document.getElementById("nap") = nap;

// be connected to methods

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

// Status Update Function

//----Increment
let a = 1;
a++;
++a;

//-----Decrement
let b = 1;
b--;
--b;
