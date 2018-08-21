var core = require("../../../cvs/lib/framework/core"),
  FpsWordPackage = require("../../../cvs/lib/tool/word"),
  TrianglePackage = require("../../../cvs/lib/tool/triangle"),
  CirclePackage = require("../../../cvs/lib/tool/circle"),
  ScreenPackage = require("../../../cvs/lib/tool/screen"),
  FourPackage = require("./nineBalls/four"),
  PointPackage = require("./point/point");
var animate = core.animate;
// var urlPath = location.origin + (location.port === '8089' ? '/dist/' : '/mb/');
core.on("show", "five", function (cvs) {
  var width = core.frame.width,
    height = core.frame.height;

  new ScreenPackage.Screen({
    endX: width,
    endY: height,
    fillStyle: "#f0f0f0"
  });

  var maxRaduisForThree = 20;
  var minRadiusForThree = 5;

  var fourArray = new FourPackage.Four({
    x: width / 2,
    y: height / 2,
    radius: 40,
    rouNum: 5,
    xRate: 0.1,
    yRate: 0.5,
    gradientArray: [
      { rate: 0, color: '#8d0bc2' },
      { rate: 0.7, color: '#cd85f1' },
      { rate: 1, color: '#debef3' },
    ]
    // fillStyle: "rgba(201,124,209,0.8)"
  });

  var rotateRate = 0;
  var radius = 0;
  var roundRate = 15,
    cirFlag = false;

  function updateBall(fpx) {
    rotateRate = (rotateRate + 36 * fpx > 360) ? (360 - rotateRate + 36 * fpx) : rotateRate + 36 * fpx;
    fourArray.rotateRate = rotateRate * Math.PI * 2 / 360;
    // triangle.rotateAngle = rotateRate;
    radius = (radius + roundRate * fpx > maxRaduisForThree) ? (maxRaduisForThree - radius + roundRate * fpx) : radius + roundRate * fpx;
    // if (cir.radius + roundRate * fpx > maxRaduisForThree && cirFlag) {
    //     cirFlag = false;
    // } else if (cir.radius - roundRate * fpx <= minRadiusForThree && !cirFlag) {
    //     cirFlag = true;
    // }
    // cir.radius = cir.radius + (cirFlag ? 1 : (-1)) * (roundRate * fpx);
  }

  var stopFlag;

  function stop() {
    animate.clearAnimation(stopFlag);
  }
  var fpsWord = new FpsWordPackage.DrawWords({
    className: 'fps',
    x: 20,
    y: 20,
    word: 0
  });

  function star() {
    stopFlag = animate.setAnimation(function (fps) {
      // updateBall(1 / fps);
      core.frame.reRender();
      stop();
    }, function (fps) {
      fpsWord.word = fps;
    }, 500);
  }
  star();
});