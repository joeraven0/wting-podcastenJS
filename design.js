var imgCounter = 0;
var bgCounter = 0;
var textCounter = 0;
var fontCounter = 0;
var currentImage = "woman";

//Image size changer
function imgSize() {
    imgCounter = imgCounter + 1;
    switch (imgCounter) {
        case 1:
            document.getElementById("header_img").style.width = "60%";
            document.getElementById("header_img").style.transition = "all .8s";
            break;
        case 2:
            document.getElementById("header_img").style.width = "100%";
            document.getElementById("header_img").style.transition = "all .8s";
            break;
        default:         
            document.getElementById("header_img").style.width = "351px";   
            imgCounter = 0;
    }
    var imgString = document.getElementById("header_img").style.width;
    document.getElementById("imgsizeJS").innerHTML = imgString;
}
//Change image
function imgChange() {
    if (currentImage == "woman") {
        document.getElementById("header_img").style.backgroundImage = "url(img/brussels-sprouts.jpg)";
        document.getElementById("header_img").style.color = "white";
        document.getElementById("header_img").style.transition = "all .8s";
        currentImage = "bryssel"
    } else if (currentImage == "bryssel") {
        document.getElementById("header_img").style.backgroundImage = "url(img/header.jpg)";
        document.getElementById("header_img").style.color = "black";
        document.getElementById("header_img").style.transition = "all .8s";
        currentImage = "woman"
    }
    
    document.getElementById("imgchangeJS").innerHTML = currentImage;
}
//Background color changer
function backgroundColor() {
    bgCounter = bgCounter + 1;
    switch (bgCounter) {
        case 1:
            document.body.style.backgroundColor = "grey";
            document.body.style.transition = "all .8s";
            break;
        case 2:
            document.body.style.backgroundColor = "tomato";
            document.body.style.transition = "all .8s";
            break;
        default:
            document.body.style.backgroundColor = "white";
            bgCounter = 0;
    }
    var bgString = document.body.style.backgroundColor;
    document.getElementById("bgcolorJS").innerHTML = bgString;
}
//Change text color
function textColor() {
    textCounter++;
    var randomColor = Math.round(Math.random() * 1000);
    switch (textCounter) {
        case 1:
            document.body.style.color = "#" + randomColor;
            document.body.style.transition = "all .8s";
            break;
        case 2:
            document.body.style.color = "red";
            document.body.style.transition = "all .8s";
            break;
        default:
            document.body.style.color = "black";
            textCounter = 0;
    }
    var textString = document.body.style.color;
    document.getElementById("colorJS").innerHTML = textString;
}



function fontSize() {
    fontCounter++;
    switch (fontCounter) {
        case 1:
            document.body.style.fontSize = "small";
            document.body.style.transition = "all .8s";
            break;
        case 2:
            document.body.style.fontSize = "medium";
            document.body.style.transition = "all .8s";
            break;
        default:
            document.body.style.fontSize = "large";
            fontCounter = 0;
    }
    var textString = document.body.style.fontSize;
    document.getElementById("fontsizeJS").innerHTML = textString;
}
function scrollablePage(){
    // document.getElementById('sidebar').style.display = 'none';
    document.getElementById('sidebar').style.height='100vh';
    document.body.style.overflow = 'auto';
    document.body.style.height = "auto";
   
}


var randomNumber = 0;
var counter = 0;
function generateNumber() {
    document.getElementById("randNmbr").style.fontWeight = "bold";
    document.getElementById("randNmbr").style.fontSize = "30px";
    document.getElementById("randNmbr").style.textDecoration = "underline";
    var delayer = setTimeout(function() {
        counter++;
        randomNumber = Math.round(Math.random() * 1000);
        document.getElementById("randNmbr").innerHTML = '#' + randomNumber;
        if (counter >= 30) {
            counter = 0;
            printResult(randomNumber);
        }
        generateNumber();
    }, 50);
}
function printResult(randomNumber) {
    document.getElementById("randNmbr").innerHTML = '#' + randomNumber;
    document.body.style.backgroundColor = '#' + randomNumber;
    clearTimeout(delayer);
}