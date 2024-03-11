let boyfriendName = "Angela";
let girlfriendName = "Jack";

let loveScore = Math.floor(Math.random() * 100);

if (loveScore > 70) {
  console.log(
    boyfriendName +
      " love " +
      loveScore +
      "% " +
      girlfriendName +
      " " +
      "- Like Kanye loves Kanye"
  );
}

if (loveScore > 30 && loveScore <= 70) {
  console.log(boyfriendName + " love " + loveScore + "% " + girlfriendName);
}

if (loveScore < 30) {
  console.log(
    boyfriendName +
      " love " +
      loveScore +
      "% " +
      girlfriendName +
      " " +
      "- You go together like oil and water"
  );
}
