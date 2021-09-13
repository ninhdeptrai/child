var communicate = {
  data: [
    [
      {
        name: "1 Hello kid",
        text_en: "Hello kid",
        text_vn: "chào con",
        time: 0,
        image: "",
      },
    ],
    [
      {
        name: "2 hello teacher - chào cô giáo",
        time: 0,
        text_en: "Hello teacher",
        text_vn: "chào cô giáo",
        image: "",
      },
    ],
    [
      {
        name: "3 What’s your name - con tên là gì",
        time: 0,
        text_en: "What’s your name?",
        text_vn: "Con tên là gì?",
        image: "",
      },
    ],
    [
      {
        name: "4 My name is Julie - con tên là Julie",
        time: 0,
        text_en: "My name is Julie",
        text_vn: "Con tên là Julie",
        image: "",
      },
    ],
    [
      {
        name: "5 woo julie, How do you spell your name",
        time: 0,
        text_en: "Woo julie, How do you spell your name?",
        text_vn: "Woo julie, con có thể đánh vần tên mình?",
        image: "",
      },
    ],
    [
      {
        name: "6 J-U-L-I-E",
        time: 0,
        text_en: "J-U-L-I-E",
        text_vn: "J-U-L-I-E",
        image: "",
      },
    ],
    [
      {
        name: "7 Good, Teacher’s name is Katalin, Tốt, cô tên là Katalin",
        time: 0,
        text_en: "Good, Teacher’s name is Katalin",
        text_vn: "Tốt, cô tên là Katalin",
        image: "",
      },
      {
        name: "8 You can call me Linda. Con có thể gọi cô là Linda nhé",
        time: 0,
        text_en: "You can call me Linda",
        text_vn: "Con có thể gọi cô là Linda nhé",
        image: "",
      },
      {
        name: "9 How old are you  Julie Con mấy tuổi  Julie",
        time: 0,
        text_en: "How old are you Julie?",
        text_vn: "Con mấy tuổi  Julie?",
        image: "",
      },
    ],
    [
      {
        name: "10 I’m five years old",
        time: 0,
        text_en: "I’m five years old",
        text_vn: "Con 5 tuổi ạ",
        image: "",
      },
    ],
    [
      {
        name: "11 ohh Five years oll Very young - Ồ  5 tuổi rất trẻ",
        time: 0,
        text_en: "ohh Five years oll Very young",
        text_vn: "Ồ  5 tuổi rất trẻ",
        image: "",
      },
      {
        name: "12 Miss Linda is twenty years old. Cô Linda 20 tuổi",
        time: 0,
        text_en: "Miss Linda is twenty years old",
        text_vn: "Cô Linda 20 tuổi?",
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
