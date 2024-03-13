const buttonColors = ["red", "blue", "green", "yellow"];

let level = 0;
let started = false;
let gamePattern = [];
let userClickedPattern = [];

$(document).keydown(() => {
  if (!started) {
    $("#level-title").text(`Level ${level}`);
    nextSequence();
    started = true;
  }
});

$(".btn").click((target) => {
  const userChosenColor = target.target.id;
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);

  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text(`Level ${level}`);

  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColors = buttonColors[randomNumber];

  gamePattern.push(randomChosenColors);

  $(`#${randomChosenColors}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColors);
}

function playSound(songName) {
  return new Audio(`sounds/${songName}.mp3`).play();
}

function animatePress(currentColor) {
  $(`#${currentColor}`).addClass("pressed");

  setInterval(() => {
    $(`#${currentColor}`).removeClass("pressed");
  }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");

    setInterval(() => {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}
