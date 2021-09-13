var game = function () {
  this.canvas = null;
  this.context = null;
  this.resource = null;
  this.chickens = [];
  this.eggs = [];
  this.bar = null;
  this.bowl = null;
  this.resourceLoaded = false; // cái này kiểm tra tất cả ảnh đã tải xong chưa
  this.score = 0;
  this.running = true;
  this.seconds = 60;

  var self = this;

  this.init = function () {
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.screen.width;
    this.canvas.height = window.screen.height;
    this.context = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    // tạo tất cả các object
    this.resource = new resource(this);
    this.bar = new bar(this);
    this.resource.load();
    this.chickens = [
      new chicken(this, 50, window.screen.height - 100),
      new chicken(this, 150, window.screen.height - 100),
      new chicken(this, 250, window.screen.height - 100),
      new chicken(this, 350, window.screen.height - 100),
    ];

    this.bowl = new bowl(this);
    this.bowl.init();

    setInterval(self.createNewEgg, 2000);
  };

  this.start = function () {
    this.loop();
    this.countDown();
  };

  this.loop = function () {

		setTimeout(() => { 
			self.running = false;
		}, 60000);

		if(self.running) {
			self.update();
			self.draw();
			setTimeout(self.loop, 20); //hình trên giây
		} else {
			self.drawEndGame();
		}
  };

	this.countDown = function() {
		setTimeout(self.seconds -= 1, 1000);
		setTimeout(self.countDown, 1000); //hình trên giây
	}

  this.update = function () {
    this.updateAllEggs();
  };

  this.updateAllEggs = function () {
    for (var i = 0; i < this.eggs.length; i++) {
      this.eggs[i].update();
    }
  };

  this.draw = function () {
    // vẽ cái hình nền trời xanh
    // self.context.fillStyle = "#3e738e"; // cái màu lấy từ photoshop đấy
    self.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (self.resourceLoaded == false) {
      self.drawLoading();
    } else {
      self.drawTheWorld(); // vẽ thế giới =))
    }
  };

  // tạo quả trứng mới
  this.createNewEgg = function () {
    if (self.resourceLoaded) {
      var newEgg = new egg(self);
      newEgg.init();
      self.eggs.push(newEgg); // cho vào mảng các quả trứng, đây này
    }
  };

  this.drawTheWorld = function () {
    // self.bar.draw();
    self.drawBtnText();
    self.drawScore();
    self.drawCountDown();
    self.drawText();
    self.bowl.draw();
    self.drawAllEggs();

    // self.drawAllChickens();
  };

  this.drawAllEggs = function () {
    // lặp qua từng quả trứng rồi vẽ nó
    for (var i = 0; i < this.eggs.length; i++) {
      this.eggs[i].draw();
    }
  };

  // vẽ tất cả các con gà lên
  this.drawAllChickens = function () {
    for (var i = 0; i < this.chickens.length; i++) {
      this.chickens[i].draw();
    }
  };

  // vẽ cái chữ loading
  this.drawLoading = function () {
    self.context.fillStyle = "#ffffff";
    self.context.font = "30px Arial";
    self.context.fillText("Loading...", 50, 100);
  };

  // vẽ điểm
  this.drawScore = function () {
    self.context.fillStyle = "#ffffff";
    self.context.font = "30px Arial";
    self.context.fillText("Score: " + this.score, 60, 140);
  };
  // vẽ điểm
  this.drawText = function () {
    self.context.fillStyle = "#ffffff";
    self.context.font = "30px Arial";
    self.context.fillText("Pencil", 80, 50);
  };
  this.drawBtnText = function () {
    self.context.drawImage(self.resource.btn1.img, 20, 0);
    self.context.drawImage(self.resource.btn2.img, 20, 90);
    self.context.drawImage(self.resource.btn3.img, 20, 180);
  };
	this.drawEndGame = function () {
		self.context.drawImage(self.resource.end_game.img, window.screen.width / 2 - 200, window.screen.height / 2 - 200);
	}
  this.drawCountDown = function () {
    self.context.fillStyle = "#ffffff";
    self.context.font = "30px Arial";
    self.context.fillText("Times: " + self.seconds, 55, 230);
  };
};
