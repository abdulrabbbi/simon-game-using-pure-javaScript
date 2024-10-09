let h2 = document.querySelector("h2");
let btn = document.querySelector(".box");
let btncolor = ["red", "blue", "green", "yellow"];

let gameSquence = [];
let userSquence = [];

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (started == false) {
    // console.log("game is statered let continue");
    started = true;

    levelUp();
  }
});
// to flash the button function
function btnFlash(btn) {
  btn.classList.add("flash");

  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}

// to userflash the button function
function userflash(btn) {
  btn.classList.add("userflash");

  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 250);
}

//   to play with level function
function levelUp() {
  userSquence = [];
  level++;
  h2.innerText = `The level of your game : ${level}`;

  let randidx = Math.floor(Math.random() * 3); // to pick the rand index from randcolor array
  let randColor = btncolor[randidx]; // the randindex pick the random color
  let randBtn = document.querySelector(`.${randColor}`); // to pick the box class for the color chose
  gameSquence.push(randColor);
  console.log("game squence", gameSquence);
  if (randBtn) {
    btnFlash(randBtn);
  } else {
    console.error("Random button not found in the DOM!");
  }
}

function buttonPress() {
  let btn = this;
  userflash(btn);

  let userbtn = btn.getAttribute("id");
  userSquence.push(userbtn);
  resultcheck(userSquence.length - 1); // to check the result is math to game squence
}

function resultcheck(idx) {
  if (userSquence[idx] === gameSquence[idx]) {
    if (userSquence.length === gameSquence.length) {
      setTimeout(levelUp, 500);
    }
  } else {
    h2.innerHTML = `Game Over!<b>you score is ${level} <b> <br>  press any key to conti..`;
    document.querySelector("body").style.background = "red";
    setTimeout(function () {
      document.querySelector("body").style.background = "rgb(185, 179, 179)";
    }, 250);
    reset();
  }

  //   console.log("anser check");
}
let allbtns = document.querySelectorAll(".box");
for (let btn of allbtns) {
  btn.addEventListener("click", buttonPress);
}
let highScore = localStorage.getItem("highScore") || 0;
function reset() {
    
    if(level > highScore){
       highScore = level;
       let span = document.querySelector("span");
       span.innerText = highScore;
       console.log(highScore);
    }
  started = false;
  userSquence = [];
  gameSquence = [];
  level = 0;
}
