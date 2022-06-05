var counterVal = 0;



function incrementClick() {
    updateLikes(++counterVal);

}

function updateLikes(val) {
    document.getElementById("likes").innerHTML = val;
}

var counterVal1 = 0;

function incrementClick1() {
    updateLikes1(++counterVal1);

}

function updateLikes1(val1) {
    document.getElementById("likes-2").innerHTML = val1;
}

var counterVal2 = 0;

function incrementClick2() {
    updateLikes2(++counterVal2);

}

function updateLikes2(val2) {
    document.getElementById("likes-3").innerHTML = val2;
}

// song

var song = document.getElementById("song");
var play = document.getElementById("icon");

icon.onclick = function() {
    song.play();
}

