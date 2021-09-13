
// click object
$.fn.voidRead = function (element) {
    $(this).each(function(){
        var sub = $(this).siblings('.sub_void').text();
        $(this).click(function(){
            var audio = new Audio("./lib/images/" + element + ".mp3");
            audio.play();
            $(this).parents('.actor').addClass('action').siblings().removeClass('action');
            $('#sub_void').fadeIn().text(sub);
            // setTimeout(function(){
            //     $('#sub_void').fadeOut()
            // }, 5000)
        })
    });
}