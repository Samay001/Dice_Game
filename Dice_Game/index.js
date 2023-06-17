var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomImageName = "dice" + randomNumber1 + ".png";
var randomImageSrc1 = "images/" + randomImageName;

//image 1
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSrc1);

//image2
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImageSrc2 = "images/dice" + randomNumber2 +".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSrc2);
// document.querySelectorAll("img")[1].setAttribute("src","images/dice" + (Math.floor(Math.random()*6) + 1) +".png"); -> in one line

//winner
if(randomNumber1 > randomNumber2)
{
    //player 1 win
    document.querySelector("h1").innerHTML ="Player 1 Wins";
}
else if(randomNumber1 < randomNumber2)
{
    //player 2 win
    document.querySelector("h1").innerHTML ="Player 2 Win";
}
else
{
    document.querySelector("h1").innerHTML="Draw!";
}