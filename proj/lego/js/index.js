var core = require("../../../cvs/lib/framework/core"),
  FpsWordPackage = require("../../../cvs/lib/tool/word"),
  CirclePackage = require("../../../cvs/lib/tool/circle"),
  LinePackage = require("../../../cvs/lib/tool/line"),
  ScreenPackage = require("./screen");
var animate = core.animate;
core.on("show", "index", function (cvs) {
  // 原点：也是个球体，因为从任何一个角度看球，都是一个圆
  var centerPoint = {
    x: core.frame.width / 2,
    y: core.frame.height / 2,
  }
  var stopFlag;
  var fpsWord = null;
  var screen = null;
  var centerBall = null;
  var x = null;
  var y = null;
  var z = null;

  function stopGame() {
    animate.clearAnimation(stopFlag);
  }

  function starGame() {
    stopFlag = animate.setAnimation(function () {
      core.frame.reRender();
    }, function (fps) {
      fpsWord.word = fps;
    }, 500);
  }

  // screen = new ScreenPackage.Screen({
  //   fillStyle: "#000000"
  // });

  fpsWord = new FpsWordPackage.DrawWords({
    className: 'fps',
    x: 20,
    y: 20,
    word: 0,
    font: "16px Palatino" // 受超级抗锯齿的影响，字体大小缩小了一倍
  });

  centerBall = new CirclePackage.Circle({
    x: centerPoint.x,
    y: centerPoint.y,
    radius: 5,
    fillStyle: '#F00',
    strokeStyle: '#F00'
  });

  x = new LinePackage.Line({
    x: centerPoint.x - 100,
    y: centerPoint.y,
    length: 200,
    lineWidth: 2,
    rotateRate: 0,
    strokeStyle: '#FFFFFF'
  });

  y = new LinePackage.Line({
    x: centerPoint.x,
    y: centerPoint.y - 100,
    length: 200,
    lineWidth: 2,
    rotateRate: Math.PI / 2,
    strokeStyle: '#FFFFFF'
  });

  z = new LinePackage.Line({
    x: centerPoint.x - 50 * Math.sqrt(3),
    y: centerPoint.y + 50,
    length: 200,
    lineWidth: 2,
    rotateRate: -Math.PI / 6,
    strokeStyle: '#FFFFFF'
  });

  // screen.addWatching('touchmove', function (e) {
  //   console.log('addWatching for moving', e);
  // });

  starGame();
});