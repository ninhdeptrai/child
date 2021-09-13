$(document).ready(function(){
    introduce("#introduce");
});


function introduce(intro){
  $(intro).click(function(){
    var audio = new Audio("./lib/images/M0/voices/Introduce_yourself.mpeg");
    audio.play();
    setTimeout(function() {
      actor(1,".m0-static1",".m0-gif1",".actor-1");
      actor(2,".m0-static2",".m0-gif2",".actor-2");
      actor(3,".m0-static3",".m0-gif3",".actor-3");
      actor(4,".m0-static4",".m0-gif4",".actor-4");
    },4000)
    $(intro).fadeOut(1000);
    bus();
 })
}
function actor(num,static, gif, actor){
  if(num == 1){
    $(".container-chat").delay(500).fadeIn();
    $(static).css("display","none");
    $(gif).css("display","inline");
    setTimeout(function(){
      $(gif).css("display","none");
      $(static).css("display","inline");
    },3000)
  }else{
    $(actor).css("display","inline");
    var x = "";
    if(num == 2){ x = "550px";}
    if(num == 3){ x = "450px" }
    if(num == 4){ x = "400px" }
    setTimeout(function(){
      $(actor).css("right",x);
    },200)
    setTimeout(function(){
      $(gif).css("display","none");
      $(static).css("display","inline");
    },3000)
 }
 
}
function bus() {
  setTimeout(function(){
    $("#bus").css("right","20px");
    setTimeout(function() {
      $("#m0-bus").css("display","none");
      $("#m0-bus-stop").css("display","block");
      $(".m0-sub-voice").css("display","flex");
    },3500)
  },2000)
}