var randomNumber1 =Math.floor( Math.random()*6);
var randomNumber2 =Math.floor( Math.random()*6);
var imageSrc = [["/images/dice1.png"],["/images/dice2.png"],["/images/dice3.png"],["/images/dice4.png"],["/images/dice5.png"],["/images/dice6.png"]]
var imageSrcRandom1 = imageSrc[randomNumber1][0];
var imageSrcRandom2 = imageSrc[randomNumber2][0];
document.querySelector(".img1").setAttribute("src",imageSrcRandom1);
document.querySelector(".img2").setAttribute("src",imageSrcRandom2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Win"
}else if (randomNumber2>randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Win"
}else{
    document.querySelector("h1").textContent = "Match draw"
}