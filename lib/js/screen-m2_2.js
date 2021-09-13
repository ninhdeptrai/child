var communicate = {
  data: [
    [
      {
        name: "13 What  class are you in  Julie - Con học lớp mấy Julie",
        time: 0,
        text_en: "What  class are you in  Julie?",
        text_vn: "Con học lớp mấy Julie?",
        image: "",
      },
    ],
    [
      {
        name: "14 I’m in class B1 - con học lớp B1 ạ",
        time: 0,
        text_en: "I’m in class B1",
        text_vn: "Con học lớp B1 ạ",
        image: "",
      },
    ],
    [
      {
        name: "15 What your school name - Trường con tên là gì",
        time: 0,
        text_en: "What your school name?",
        text_vn: "Trường con tên là gì",
        image: "",
      },
    ],
    [
      {
        name: "16 My school name Viet Sinh IQ Kindergarten Trường con là trường mầm non Viet Sinh IQ",
        time: 0,
        text_en: "My school name Viet Sinh IQ Kindergarten",
        text_vn: "Trường con là trường mầm non Viet Sinh IQ",
        image: "",
      },
    ],
    [
      {
        name: "17 What is your favorite food Món ăn yêu thích của con là gì",
        time: 0,
        text_en: "What is your favorite food?",
        text_vn: "Món ăn yêu thích của con là gì?",
        image: "",
      },
    ],
    [
      {
        name: "18 My favorite food is pasta",
        time: 0,
        text_en: "My favorite food is ...",
        text_vn: "Món ăn yêu thích của con là ...",
        image: "",
      },
      {
        name: "18 pasta",
        time: 0,
        text_en: "pasta",
        text_vn: "pasta",
        image: "pasta-01",
      },
      {
        name: "19 pizza",
        time: 0,
        text_en: "pizza",
        text_vn: "pizza",
        image: "pizza-01",
      },
      {
        name: "20 cake",
        time: 0,
        text_en: "Cake",
        text_vn: "Bánh",
        image: "cake-01",
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
    let time_actor_2_said = communicate.data[index].length;
    
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
