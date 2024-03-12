const imagePlayerOne = document.querySelector(".img1");
const imagePlayerTwo = document.querySelector(".img2");

const title = document.querySelector("h1");

const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);

imagePlayerOne.setAttribute("src", `images/dice${randomNumber1}.png`);
imagePlayerTwo.setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
  title.innerHTML = "Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  title.innerHTML = "Player 2 Wins";
} else {
  title.innerHTML = "Draw";
}
