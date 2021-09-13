let fn05 = function () {
    (function () {
        const slide = $('.slide');
        const text = $('.screen-m5 .body .text p');
        const elSubmit = $('.screen-m5 #button-submit');
        const elTop = $('.screen-m5 .top');
        const stars = `<img src="./lib/images/M5_new/sao.png" alt="">`;
        const elStart = $('.screen-m5 .btn-play img');

        let lenghtSlide = slide.length;
        let currentIndex = 0;
        let widthSide = 84;
        let width = widthSide * lenghtSlide + 'vh';
        let dataText = [];
        let dataAudio = [];
        let result = 0;
        let countStars = 0;
        let finishResult = [];
        let musicBackground;
        let siderAuto;

        slide.each(function (i, item) {
            dataText.push($(item).data('value'));
            dataAudio.push($(item).data('audio'));
        })

        $('#slideshow').css({
            'width': width
        })

        $('#slideshow').css({
            transform: `translateX(-${lenghtSlide * widthSide}vh)`,
        })

        function defaultSlide() {
            result = randomResult();
            text.html(dataText[result - 1]);
        }

        
        let  start = () => {
            defaultSlide();
            siderAuto = setInterval(() => {
                next();
            }, 4000)
        };

        elStart.on('click', function (e){
            start();
            musicBackground = playAudio('lib/images/M5_new/voice/nen.mp3');
            playAudio(dataAudio[result - 1]);
            $('.screen-m5 .btn-play').hide();
        })

        elSubmit.on('click', function (e) {
            if (currentIndex == result) {
                countStars++;
                finishResult.push(result);
                playAudio('lib/images/M6_new/voice/true.mp3');
                elTop.append(stars);
                reset();
            } else {
                playAudio('lib/images/M6_new/voice/false.mp3');
            }
        });

        function reset() {
            result = randomResult();
            if (countStars >= lenghtSlide) {
                result = 1;
                clearInterval(siderAuto);
                playAudio('lib/images/M5_new/voice/git.mp3');
                $('#slideshow').css({
                    transform: `translateX(-${lenghtSlide * widthSide}vh)`,
                })
                return;
            }
            currentIndex = 0;
            text.html(dataText[result - 1]);
            $('#slideshow').css({
                transform: `translateX(-${lenghtSlide * widthSide}vh)`,
            })
            playAudio(dataAudio[result - 1]);
        }

        function next() {
            if (currentIndex >= lenghtSlide) {
                currentIndex = 0;
            }
            $('#slideshow').css({
                transform: `translateX(-${(lenghtSlide - currentIndex - 1) * widthSide}vh)`,
            });
            currentIndex++;
        }

        function playAudio(path) {
            var audio = new Audio(path);
            audio.play();
            return audio;
        }

        function randomResult() {
            let array = [];

            for (let i = 1; i <= lenghtSlide; i++) {
                array.push(i)
            }

            if (finishResult.length > 0 && finishResult.length < lenghtSlide) {
                array = array.filter(function (el) {
                    return finishResult.indexOf(el) < 0;
                })
            }

            let i = array.length,
                j = 0,
                temp;

            while (i--) {
                j = Math.floor(Math.random() * (i + 1));
                // swap randomly chosen element with current element
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }

            return array[0];
        }

    })()


}
document.addEventListener("DOMContentLoaded", fn05);