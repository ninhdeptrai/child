$(document).ready(function(){
    var i = -1;  console.log(i);
    $(".play").click(function(){
        i = 1; console.log(i);
        $(".play").css("display","none");
        $(".pause").css("display","inline");
        $("#m1-video").trigger('play');
    });
    $(".pause").click(function(){
        i = 0; console.log(i);
        $(".pause").css("display","none");
        $(".play").css("display","inline");
        $("#m1-video").trigger('pause');
    });
    $(".m1-video").click(function(){
        if(i == 0 || i == -1){
            i = 1; console.log(i);
            $(".play").css("display","none");
            $(".pause").css("display","inline");
        }else{
            i = 0; console.log(i);
            $(".pause").css("display","none");
            $(".play").css("display","inline");
        }
    });
    $(document).keypress(function (e) {
        if (e.which == 32 && i != -1) {
            if(i == 0){
                i = 1; console.log(i);
                $(".play").css("display","none");
                $(".pause").css("display","inline");
                $("#m1-video").trigger('play');
            }else{
                i = 0; console.log(i);
                $(".pause").css("display","none");
                $(".play").css("display","inline");
                $("#m1-video").trigger('pause');
            }
        }
    });
});