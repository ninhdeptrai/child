var communicate = {
  data: [
    [
      {
        name: "39 Thank you very much Julie - Cô cảm ơn Julie rất nhiều",
        time: 0,
        text_en: "Thank you very much Julie",
        text_vn: "Cô cảm ơn Julie rất nhiều",
        image: "",
      },
      {
        name: "40 Today Miss Linda feel very happy - hôm nay cô Linda cản thấy rất vui",
        time: 0,
        text_en: "Today Miss Linda feel very happy",
        text_vn: "hôm nay cô Linda cản thấy rất vui",
        image: "",
      },
      {
        name: "41 Becase Juilie speak english very well Vì Julie nói tiếng anh rất giỏi",
        time: 0,
        text_en: "Becase Juilie speak english very well",
        text_vn: "Vì Julie nói tiếng anh rất giỏi",
        image: "",
      },
    ],
    [
      {
        name: "34 yes",
        time: 0,
        text_en: "Yes",
        text_vn: "Vâng",
        image: "",
      },
    ],
  ],
};

const pennding = 6000;

// function getDuration(src, cb) {
//   var audio = new Audio();
//   $(audio).on("loadedmetadata", function () {
//     cb(audio.duration);
//   });
//   audio.src = src;
// }

$(document).ready(function () {
  
  var text_initial = communicate.data[0][0].text_en;
  $(".actor-2 .communicate .text-wrapper .text").text(text_initial);

  $("body #teacher").on("click", function () {
    let index = $(this).attr("data-index");
    readVoice(index);
    
    let time_actor_1_said = communicate.data[index].length;
    index++;
    let time_actor_2_said = 0;
    
    setTimeout(function () {
      readVoice(index);
    }, time_actor_1_said * pennding);

    setTimeout(function () {
      index++;
      $(".actor-2 .communicate .text-wrapper img").attr("data-index", index);
      $(".actor-1 .communicate").css("display", "none");
      $(".actor-2 .communicate").css("display", "block");
      $(".actor-1").removeClass("action");
      (new_text_en = communicate.data[index][0].text_en),
        $(".actor-2 .communicate span").text(new_text_en);
    }, (time_actor_1_said + time_actor_2_said + 1) * pennding);
  });
});

function readVoice(index) {
  $(".description .image img").attr("src", "");

  var objects = communicate.data[index];
  objects.forEach((obj, indexing) => {
    setTimeout(function () {
      var name = obj.name ?? "",
        audio_src = "./lib/images/M13/voices/" + name + ".mp3" ?? "",
        text_en = obj.text_en ?? "",
        text_vn = obj.text_vn ?? "",
        image_name = obj.image ?? "",
        image_src = image_name
          ? "./lib/images/M13/actor/" + image_name + ".png"
          : "";

      $(".description").css("display", "block");

      // getDuration(audio_src, function (duration) {
      //   document
      //     .getElementById("duration")
      //     .setAttribute("data-duration", duration);
      //   communicate.data[index][indexing].time = duration;
      // });

      var audio = new Audio(audio_src);
      audio.play();

      if (index % 2 == 0) {
        $(".actor-2").addClass("action");
        $(".actor-1").removeClass("action");
        $(".actor-2 .communicate").css("display", "block");
        $(".actor-1 .communicate").css("display", "none");
        $(".actor-2 .communicate span").text(text_en);
      } else {
        $(".actor-1").addClass("action");
        $(".actor-2").removeClass("action");
        $(".actor-1 .communicate").css("display", "block");
        $(".actor-2 .communicate").css("display", "none");
        $(".actor-1 .communicate span").text(text_en);
      }

      $(".description .text .en").fadeIn().text(text_en);
      $(".description .text .vn")
        .fadeIn()
        .text("(" + text_vn + ")");

      image_src ? $(".description .image img").attr("src", image_src) : "";
    }, indexing * pennding);
  });
}
