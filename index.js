// let fileNames = [];
// for (let i = 1; i <= 6; i++) {
//   fileNames.push(`images/dice${i}.png`);
// }

// console.log(fileNames);
let randomGenerator = Math.random() * 6 + 1;
let randomNumber1 = Math.floor(randomGenerator);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber1);
// let myWindow = document.querySelectorAll("img")[1].getAttribute("class");

// Ik kan hier ook een variabele van maken
document
  .querySelectorAll("img")[1]
  .setAttribute("src", `images/dice${randomNumber1}.png`);

document
  .querySelectorAll("img")[2]
  .setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 wins";
} else {
  document.querySelector("h1").innerText = "Draw! Try again!";
}

// console.log(myWindow);
