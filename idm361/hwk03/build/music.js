let pianoObj = document.getElementById('piano_pad');
let saxObj = document.getElementById('sax_pad');
let guitarObj = document.getElementById('guitar_pad');
let violinObj = document.getElementById('violin_pad');
let vocalObj = document.getElementById('vocal_pad');
let drumObj = document.getElementById('drum_pad');

let playSoundObj = document.getElementById('playSound');
let soundPlayerObj = document.getElementById("soundPlayer");
      
function playSomething(whichOne) {
    console.log('This audio is playing ' + whichOne)
    soundPlayerObj.src = whichOne;
    soundPlayerObj.play();
}

// MUSIC PADS
pianoObj.addEventListener('click', function () {
    playSomething('./audio/music1.wav');
  }, false);

saxObj.addEventListener('click', function () {
    playSomething('./audio/music2.wav');
  }, false);

guitarObj.addEventListener('click', function () {
    playSomething('./audio/music3.wav');
  }, false);

violinObj.addEventListener('click', function () {
    playSomething('./audio/music4.wav');
  }, false);

vocalObj.addEventListener('click', function () {
    playSomething('./audio/music5.wav');
  }, false);

drumObj.addEventListener('click', function () {
    playSomething('./audio/music6.wav');
  }, false);