var randomNumber1 = Math.floor(Math.random() * 6)+1;
var RandomDieceImage = "dice" + randomNumber1+".png";
var RandomImageSource = "images/"+ RandomDieceImage;
document.querySelectorAll("img")[1].setAttribute("src", RandomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6)+1;
var RandomDieceImage1 = "dice" + randomNumber2+".png";
var RandomImageSource2 = "images/"+ RandomDieceImage1;
document.querySelectorAll("img")[0].setAttribute("src", RandomImageSource2);



    if (randomNumber1 < randomNumber2) {
        document.querySelectorAll("h1")[0].innerHTML = " Player 1 won"
    }
    else if (randomNumber2 < randomNumber1) {
        document.querySelectorAll("h1")[0].innerHTML = "Player 2 won "
    }
    else{
        document.querySelectorAll("h1")[0].innerHTML = "Draw";
    }



