let timer;
let score = 0;
let hitrn = 0;
let gameRunning = false;

function increaseScore() {
  score += 5;
  document.querySelector("#scoreval").textContent = score;
}

function decreaseScore() {
  if (score >= 5) {
    score -= 5;
  } else {
    score = 0;
  }
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 114; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  timer = 59;
  let timerint = setInterval(function () {
    if (timer > 0 && gameRunning) {
      timer--;
    } else {
      clearInterval(timerint);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1 style= "font-size: 5vw;">Oliver Felix1453<br>oliverfelix1453@gmail.com</h1>`;
      gameRunning = false;
      document.querySelector("#startButton").textContent = "Restart";
    }
    document.querySelector("#timerVal").textContent = timer;
  }, 1000);
}

document.querySelector("#startButton").addEventListener("click", function () {
  if (!gameRunning) {
    gameRunning = true;
    document.querySelector("#startButton").textContent = "Pause";
    getNewHit();
    runTimer();
    makeBubble();
  } else {
    gameRunning = false;
    document.querySelector("#startButton").textContent = "Resume";
  }
});

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  if (gameRunning) {
    let clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn) {
      increaseScore();
      makeBubble();
      getNewHit();
    } else {
      decreaseScore();
    }
  }
});

getNewHit();
