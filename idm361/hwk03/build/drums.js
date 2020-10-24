let drumKickObj = document.getElementById('drum_pad_kick');
let drumSnareObj = document.getElementById('drum_pad_snare');
let drumHatObj = document.getElementById('drum_pad_hat');
let drumCrashObj = document.getElementById('drum_pad_crash');
let drumPercObj = document.getElementById('drum_pad_perc');
let drumTomObj = document.getElementById('drum_pad_tom');

let playSoundObj = document.getElementById('playSound');
let soundPlayerObj = document.getElementById("soundPlayer");
      
function playSomething(whichOne) {
    console.log('This audio is playing ' + whichOne)
    soundPlayerObj.src = whichOne;
    soundPlayerObj.play();
}

// DRUM PADS
drumKickObj.addEventListener('click', function () {
    playSomething('./audio/audio1.wav');
  }, false);
  
drumSnareObj.addEventListener('click', function () {
    playSomething('./audio/audio2.wav');
  }, false);
  
drumHatObj.addEventListener('click', function () {
    playSomething('./audio/audio3.wav');
  }, false);
  
drumCrashObj.addEventListener('click', function () {
    playSomething('./audio/audio4.wav');
  }, false);
  
drumPercObj.addEventListener('click', function () {
    playSomething('./audio/audio5.wav');
  }, false);
  
drumTomObj.addEventListener('click', function () {
    playSomething('./audio/audio6.wav');
  }, false);