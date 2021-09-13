var communicate = {
  data: [
    [
      {
        name: "21 What subject do you like - Con thích môn học nào",
        time: 0,
        text_en: "What subject do you like?",
        text_vn: "Con thích môn học nào?",
        image: "",
      },
    ],
    [
      {
        name: "22 I like Art  Con thích môn mỹ thuật",
        time: 0,
        text_en: "I like Art",
        text_vn: "Con thích môn mỹ thuật ạ",
        image: "",
      },
    ],
    [
      {
        name: "23 Why do you like that subject Tại sao con thích môn học đó",
        time: 0,
        text_en: "Why do you like that subject?",
        text_vn: "Tại sao con thích môn học đó?",
        image: "",
      },
    ],
    [
      {
        name: "24 Because I love the pictures - Vì con yêu các  bức tranh",
        time: 0,
        text_en: "Because  I love the pictures",
        text_vn: "Vì con yêu các  bức tranh",
        image: "",
      },
    ],
    [
      {
        name: "26 what color do you like  Con thích màu nào",
        time: 0,
        text_en: "What color do you like?",
        text_vn: "Con thích màu nào?",
        image: "",
      },
    ],
    [
      {
        name: "27 I like red",
        time: 0,
        text_en: "I like red",
        text_vn: "Con thích màu đỏ ạ",
        image: "red",
      },
      {
        name: "28 and yellow",
        time: 0,
        text_en: "and yellow",
        text_vn: "và màu vàng",
        image: "yelow-01",
      },
    ],
    [
      {
        name: "29 what animal do you like  Con thích loài vật nào",
        time: 0,
        text_en: "what animal do you like?",
        text_vn: "Con thích loài vật nào?",
        image: "",
      },
    ],
    [
      {
        name: "30 I like monkey con thích khỉ",
        time: 0,
        text_en: "I like monkey",
        text_vn: "Con thích khỉ ạ",
        image: "monkey-01",
      },
    ],
    [
      {
        name: "31 Why do you like monkey  Tại sao con thích con khỉ",
        time: 0,
        text_en: "Why do you like monkey?",
        text_vn: "Tại sao con thích con khỉ?",
        image: "",
      },
    ],
    [
      {
        name: "32 because, it’s  funny. Bởi vì nó hài hước ạ",
        time: 0,
        text_en: "Because, it’s  funny",
        text_vn: "Bởi vì nó hài hước ạ",
        image: "",
      },
    ],
    [
      {
        name: "33 very good Can you tell me about the geometry  Rất tốt con thể kể về các hình học  đk",
        time: 0,
        text_en: "Very good Can you tell me about the geometry?",
        text_vn: "Rất tốt con có thể kể về các hình học được không?",
        image: "",
      },
    ],
    [
      {
        name: "34 yes",
        time: 0,
        text_en: "34 yes",
        text_vn: "Được ạ",
        image: "",
      },
      {
        name: "35 Oval",
        time: 0,
        text_en: "Oval",
        text_vn: "Hình trái xoan",
        image: "Oval-01",
      },
      {
        name: "36 circle",
        time: 0,
        text_en: "circle",
        text_vn: "Hình tròn",
        image: "circle-01",
      },
      {
        name: "37 triangle",
        time: 0,
        text_en: "circle",
        text_vn: "Hình tròn",
        image: "triangle-01",
      },
      {
        name: "38 square",
        time: 0,
        text_en: "circle",
        text_vn: "Hình tròn",
        image: "square-01",
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
