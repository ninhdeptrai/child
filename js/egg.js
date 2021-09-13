var egg = function (game) {
  this.game = game;
  this.x = 0;
  this.y = 80;
  this.img = null; // cái này chứa hình ảnh của quả trứng, vì có 2 loại trứng
  this.type = 1; // loại quả trứng, có 2 loại
  this.popped = false; // trứng đã vỡ chưa, nếu rơi xuống thì trứng vỡ
  this.visible = true;
  this.addedScore = false; // kiểm tra quả trứng này đã được tính điểm chưa, khỏi cộng điểm nhiều lần
  this.type_e = 0; // kiểm tra quả trứng này đã được tính điểm chưa, khỏi cộng điểm nhiều lần

  var self = this;

  // khởi tạo quả trứng
  this.init = function () {
    // loại quả trứng ngẫu nhiên, tìm google đã
    this.type = this.getRandomInt(1, 4); // loại trứng 1 và 2
    // lấy hình ảnh trứng tương ứng
    switch (this.type) {
      case 1:
        this.img = this.game.resource.egg1.img;
        this.type_e = 1;
        break;
      case 2:
        this.img = this.game.resource.egg2.img;
        this.type_e = 2;
        break;
      case 3:
        this.img = this.game.resource.egg3.img;
        this.type_e = 3;
        break;
      case 4:
        this.img = this.game.resource.egg4.img;
        this.type_e = 4;
        break;
    }
    var t_width = window.innerWidth / 4 - 100;
    var positions = [t_width, t_width * 2, t_width * 3, t_width * 4];
    this.x = positions[this.getRandomInt(0, 3)];
  };

  this.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // tạo xong rồi, giờ mỗi lần lặp thì update
  this.update = function () {
    if (this.y <= window.screen.height - 100) {
      this.y += 2;
    } else {
      this.popped = true;
    }

    if (this.popped) {
      this.visible = false;
      if (this.addedScore == false && this.type_e == 1) {
        var audio = new Audio("audio/false.mp3");
        audio.play();
        if (this.game.score > 0) this.game.score -= 1;
        this.addedScore = true;
      }
      // this.img = this.game.resource.egg_popped.img;
    }

    this.checkInBowl();
  };

  this.checkInBowl = function () {
    if (
      this.x > this.game.bowl.x &&
      this.x < this.game.bowl.x + this.game.resource.bowl.img.width &&
      this.y >= window.screen.height - 200 &&
      this.y <= window.screen.height - 120
    ) {
      // ẩn trứng đi
      this.visible = false;
      // cộng điểm
      if (this.addedScore == false && this.type_e == 1) {
        var audio = new Audio("audio/true.mp3");
        audio.play();
        this.game.score += 1;
        this.addedScore = true;
      }
      if (this.addedScore == false && this.type_e != 1) {
        var audio = new Audio("audio/false.mp3");
        audio.play();
        if (this.game.score > 0) this.game.score -= 1;
        this.addedScore = true;
      }
    }
  };

  // vẽ trứng ra nào
  this.draw = function () {
    if (this.visible) {
      this.game.context.drawImage(
        self.img,
        this.x - this.img.width / 2, // vẽ ở giữa chiều ngang
        this.y
      );
    }
  };
};
