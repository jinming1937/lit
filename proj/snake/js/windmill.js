var core = require("../../../cvs/lib/framework/core"),
  RoundRectPackage = require("../../../cvs/lib/tool/roundRect"),
  Fps = require("../../../cvs/outer/fps"),
  FpsWordPackage = require("../../../cvs/lib/tool/word"),
  Animation = require("../../../cvs/outer/animation"),
  WindmillPackage = require("./nineBalls/wind");
var animate = core.animate;
var urlPath = location.origin + (location.port === '8089' ? '/dist/' : '/mb/');
core.on("show", "windmill", function () {
  var frame = core.frame;
  var ball = new WindmillPackage.Windmill({
    x: 250,
    y: 275,
    radius: 100,
    rouNum: 6,
    xRate: 0.25,
    yRate: 0.5,
    bar: 150
  });

  var balls = new WindmillPackage.Windmill({
    x: 100,
    y: 100,
    radius: 80,
    rouNum: 5,
    xRate: 0.25,
    yRate: 0.5,
    bar: 100,
    fillStyle: "rgba(255,177,216,0.8)"
  });

  ball.addWatching("touchmove", function (e) {
    this.x = e.changedTouches[0].clientX; //- moving.width / 2;
    this.y = e.changedTouches[0].clientY; //- moving.width / 2;
  });

  var ball3 = new WindmillPackage.Windmill({
    x: 100,
    y: 400,
    radius: 80,
    rouNum: 7,
    xRate: 0.75,
    yRate: 0.8,
    bar: 100,
    fillStyle: "rgba(255,239,0,0.8)"
  });

  // var roundRect_ = new RoundRectPackage.RoundedRect();
  // roundRect_.addWatching('touchmove', function(e) {
  //     console.log("roundRect_ addWatching tf:" + new Date().getTime());
  // });
  // roundRect_.ontouchmove = function(e) {
  //     roundRect_.cornerX = e.changedTouches[0].clientX - roundRect_.width / 2;
  //     roundRect_.cornerY = e.changedTouches[0].clientY - roundRect_.height / 2;
  //     console.log("roundRect_ ontouchmove tf:" + new Date().getTime());
  // };
  var goHome = new RoundRectPackage.RoundedRect({
    className: "button goHome",
    fontColor: '#101010',
    cornerX: frame.width - 20 - 80,
    cornerY: frame.height - 20 - 30,
    width: 90,
    height: 30,
    cornerRadius: 8,
    fillText: "HomePage"
  });
  goHome.ontouchend = function (e) {
    stopGame();
    isStop = true;
    core.open({
      href: urlPath + "snake/snindex.html"
    });
  };
  var rotateRate = 0;

  function updateBall(fpx) {
    rotateRate = (rotateRate + 36 * fpx > 360) ? (360 - rotateRate + 36 * fpx) : rotateRate + 36 * fpx;
    ball.rotateRate = rotateRate * Math.PI * 2 / 360;
    balls.rotateRate = -rotateRate * 2 * Math.PI * 2 / 360;
    ball3.rotateRate = rotateRate * Math.PI * 2 / 360 * 3;
    // ball.y = (ball.y + 20 * fpx) > core.frame.height + 100 ? -100 : (ball.y + 20 * fpx);
  }

  var stopFlag,
    isStop = false;

  function stopGame() {
    animate.clearAnimation(stopFlag);
    isStop = true;
  }
  var fps_text = new Fps();
  var fpsWord = new FpsWordPackage.DrawWords({
    className: 'fps',
    x: 20,
    y: 20,
    word: 0
  });
  var lastTime = 0;

  function starGame() {
    var flagNum = true;
    stopFlag = animate.setAnimation(function (fps, startTime) {
      updateBall(1 / fps);
      core.frame.reRender();
    }, function (fps, startTime) {
      fpsWord.word = fps;
    }, 500);
  }
  starGame();

});