var randomnumer1 = Math.floor(Math.random() * 6) +1;
var randomDiceImage = "dice" + randomnumer1 + ".png";
var randomImageSource = "Images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomnumer2 = Math.floor(Math.random() *6) +1;

var randomImageSource2 = "images/dice" + randomnumer2 + ".png";
document.querySelectorAll("img")[1].setAttribute("Src", randomImageSource2);

///if player wins
if (randomnumer1 > randomnumer2){
  document.querySelector("h1").innerHTML = "player 1 win";
}else if(randomnumer2 > randomnumer1){
  document.querySelector("h1").innerHTML ="player 2 win";
}
else {
  document.querySelector("h1").innerHTML ="Draw";
}
