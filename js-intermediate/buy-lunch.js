function whosPaying(names) {
  /******Don't change the code above*******/

  //Write your code here.
  names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

  console.log(`${shuffleArray(names)} is going to buy lunch today!`);

  /******Don't change the code below*******/
}

function shuffleArray(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

whosPaying();
