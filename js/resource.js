var gameImage = function (name) {
  this.img = null; // đây là ảnh thật luôn nhá, cái name ở trên là tên file thôi
  this.name = name;
  this.loaded = false; // trạng thái load ảnh xong hay chưa, tạm thời là false;
  var self = this;

  this.load = function () {
    this.img = new Image();
    this.img.onload = function () {
      self.loaded = true; // load xong ảnh thì đặt lại là true
    };
    this.img.src = "images/" + name + ".png"; // tất cả ảnh là png hết nhé
  };
};

var resource = function (game) {
  this.game = game;
  this.bar = new gameImage("bg2"); // là cái thanh cho gà đậu
  this.bowl = new gameImage("7-01"); // là cái bát hứng trứng
  this.chicken = new gameImage("chicken");
  this.egg1 = new gameImage("p-01"); // có 2 p
  this.egg2 = new gameImage("pen-02"); // có 2 p
  this.egg3 = new gameImage("marker-01"); // có 2 p
  this.egg4 = new gameImage("seccsein-01"); // có 2 p
  this.egg_popped = new gameImage("egg-popped");
  this.shit = new gameImage("shit");
  this.btn1 = new gameImage("btn1");
  this.btn2 = new gameImage("btn2");
  this.btn3 = new gameImage("btn2");
  this.end_game = new gameImage("gift");

  var self = this;

  // giờ thì load tất cả hình ảnh nào
  this.load = function () {
    this.bar.load();
    this.bowl.load();
    this.chicken.load();
    this.egg1.load();
    this.egg2.load();
    this.egg3.load();
    this.egg4.load();
    this.egg_popped.load();
    this.shit.load();
    this.btn1.load();
    this.btn2.load();
    this.btn3.load();
    this.end_game.load();

    setInterval(function () {
      self.checkAllImageLoaded(); // chứ nửa giây, kiểm tra xem tất cả ảnh đã load xong chưa
    }, 500);
  };

  this.checkAllImageLoaded = function () {
    // nếu tất cả ảnh đã load xong
    if (
      this.bar.loaded &&
      this.bowl.loaded &&
      this.chicken.loaded &&
      this.egg1.loaded &&
      this.egg2.loaded &&
      this.egg3.loaded &&
      this.egg4.loaded &&
      this.egg_popped.loaded &&
      this.btn1.loaded &&
      this.btn2.loaded &&
      this.btn3.loaded &&
      this.shit.loaded &&
      this.end_game.loaded
    ) {
      this.game.resourceLoaded = true;
    }
  };
};
