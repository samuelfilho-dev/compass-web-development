function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + calcBottles(money, 1.5) + " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return calcChange(money, 1.5);
}

function calcBottles(startingMoney, costPetBottle) {
  return Math.floor(startingMoney, costPetBottle);
}

function calcChange(startingMoney, costPetBottle) {
  return startingMoney % costPetBottle;
}

const change = getMilk(4);
console.log(change);
