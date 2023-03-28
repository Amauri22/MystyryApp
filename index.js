let fileNames = [];
for (let i = 1; i <= 6; i++) {
  fileNames.push(`images/dice${i}.png`);
}

console.log(fileNames);
let randomGenerator = Math.random() * 6;
let randomNumber1 = Math.floor(randomGenerator);
console.log(randomNumber1);
let myWindow = document.querySelectorAll("img")[1].getAttribute("class");
document.querySelectorAll("img")[1];
document.querySelectorAll("img")[1].setAttribute("src", "images/[9]");

console.log(myWindow);
