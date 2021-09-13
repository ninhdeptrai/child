$(document).ready(function(){
  hello_kid();
  hello_teacher();
  var x = 0;
  var audio1 = new Audio("./lib/images/KID_M1/voices/sound-in-page.mpeg");
  var audio2 = new Audio("./lib/images/KID_M1/voices/soundtrack.mp3");
  $("#kid-mute-sound").click(function(){
    $("#kid-mute-sound").css("display","none");
    $("#kid-sound").fadeIn();
    if(x==0){audio1.play();}
    audio2.play();
    x = 1;
  });
  $("#kid-sound").click(function(){
    $("#kid-sound").css("display","none");
    $("#kid-mute-sound").fadeIn();
    audio1.pause();
    audio2.pause();
  });
});

 

function hello_kid(){
  $("#kid-chu-02").click(function(){
    var audio = new Audio("./lib/images/KID_M2/voices/hello-kid.mp3");
    audio.play();
    $(".kid-sub-void").fadeIn();
  })
}

function hello_teacher(){
  $("#kid-chu-03").click(function(){
    var audio = new Audio("./lib/images/KID_M3/voices/hello-teacher.mp3");
    audio.play();
    $(".kid-sub-void").fadeIn();
  })
}
