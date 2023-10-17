function generateRandoNumber() {
    var random1 = Math.random();
    random1 = random1 * 6;
    random1 = Math.floor(random1)+1;
    return random1;
}

var n1 = generateRandoNumber();
var n2 = generateRandoNumber();

if(n1 > n2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}
else if(n1 < n2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}
var dice1 = "./images/dice" + n1 + ".png"
document.querySelector(".img1").setAttribute("src", dice1)

var dice2 = "./images/dice" + n2 + ".png"
document.querySelector(".img2").setAttribute("src", dice2)