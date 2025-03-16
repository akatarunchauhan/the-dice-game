let randomnumber1 = Math.floor(Math.random() * 6 + 1);
console.log(randomnumber1);
let randomnumber2 = Math.floor(Math.random() * 6 + 1);
console.log(randomnumber2);

let diceImage1 = document.querySelector(".img1");
let diceImage2 = document.querySelector(".img2");

diceImage1.setAttribute("src", "/images/dice" + randomnumber1 + ".png");
diceImage2.setAttribute("src", "/images/dice" + randomnumber2 + ".png");

let heading = document.querySelector("h1");

if (randomnumber1 > randomnumber2) {
    heading.innerText = "🚩 Player 1 Wins";
} else if (randomnumber1 < randomnumber2) {
    heading.innerText = "Player 2 Wins 🚩";
} else {
    heading.innerText = "It's a Draw!";
}
