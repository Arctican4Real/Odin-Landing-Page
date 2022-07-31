console.log("Connection stable");

var audio = document.getElementById("audio");
var button = document.getElementsByClassName("musicButton");
var img = document.getElementById("musicIcon")

audio.play();

var toggler = true;

function playPause(){
    if (toggler == true) {
        toggler = false;
        img.src = "./music/pixel-perfect-on.png"
        audio.play();
    }
    else{
        toggler = true;
        img.src = "./music/pixel-perfect-off.png"
        audio.pause();
    }
}

