let fn = function () {
    let audioCurrent = playAudio('lib/images/M4/voice_new/nen.mp3') ;
    $('.body-payper').on('click', '.payper', function (e) {
        audioCurrent.pause();
        $(this).children('p').css({
            display: "block"
        });
        let descriptionEn = $(this).children('p').html();
        let descriptionVi = $(this).children('p').data('vi');
        let audio = $(this).children('p').data('audio');
        $('.description-payper .description-en').html(descriptionEn);
        $('.description-payper .description-vi').html(descriptionVi);
        audioCurrent = playAudio(audio);
    })

    function playAudio(path) {
        var audio = new Audio(path);
        audio.play();
        return audio;
    }
}
document.addEventListener("DOMContentLoaded", fn);