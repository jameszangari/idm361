$(document).ready(function() {
    $(".content__button").on("click", function(e) {
    $(".content-pads").toggle("display");
    $(".content-pads").css("display","grid")
    $(".content__logo").toggleClass("content__logo-shrink");
    $(".content__title").toggleClass("content__title-shrink");
    $(".content__button").toggleClass("content__button-return");
    });

    var padOne = new Audio('audio/kick_pad.mp3');
    $('#kick_pad').mousedown(function() {
      padOne.load()
      padOne.play();
    });
  
    var padTwo = new Audio('audio/snare_pad.mp3');
    $('#snare_pad').mousedown(function() {
      padTwo.load();
      padTwo.play();
    });
  
    var padThree = new Audio('audio/hat_pad.mp3');
    $('#hat_pad').mousedown(function() {
      padThree.load();
      padThree.play();
    });
  
    var padFour = new Audio('audio/crash_pad.mp3');
    $('#crash_pad').mousedown(function() {
      padFour.load();
      padFour.play();
    });
  
    var padFive = new Audio('audio/tom_pad.mp3');
    $('#tom_pad').mousedown(function() {
      padFive.load();
      padFive.play();
    });

    var padSix = new Audio('audio/perc_pad.mp3');
    $('#perc_pad').mousedown(function() {
      padSix.load();
      padSix.play();
    });
  
});