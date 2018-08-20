var core = require("../../../cvs/lib/framework/core"),
  FpsWordPackage = require("../../../cvs/lib/tool/word"),
  Animation = require("../../../cvs/outer/animation"),
  TrianglePackage = require("../../../cvs/lib/tool/triangle"),
  CirclePackage = require("../../../cvs/lib/tool/circle"),
  ScreenPackage = require("../../../cvs/lib/tool/screen"),
  FourPackage = require("./nineBalls/four"),
  PointPackage = require("./point/point");
var animate = core.animate;
// var urlPath = location.origin + (location.port === '8089' ? '/dist/' : '/mb/');
core.on("show", "nineballs", function (cvs) {
  var width = core.frame.width,
    height = core.frame.height;

  new ScreenPackage.Screen({
    endX: width,
    endY: height,
    fillStyle: "#9bf3ae"
  });

  var maxRaduisForThree = 20;
  var minRadiusForThree = 5;

  var lt = new FourPackage.Four({
    x: width / 4,
    y: height / 4,
    radius: maxRaduisForThree,
    rouNum: 3,
    xRate: 0,
    yRate: 0.3,
    fillStyle: "rgba(6,179,60,0.8)"
  });

  var rt = new FourPackage.Four({
    x: width / 4 * 3,
    y: height / 4,
    radius: maxRaduisForThree,
    rouNum: 3,
    xRate: 0,
    yRate: 0.3,
    fillStyle: "rgba(6,179,60,0.8)"
  });

  var threeArray = [];

  function createThree(num) {
    var cx = width / num;
    for (var i = 0; i < num; i++) {
      threeArray.push({
        three: new FourPackage.Four({
          x: maxRaduisForThree + i * cx,
          y: height / 4 * 3,
          radius: maxRaduisForThree - i * maxRaduisForThree / num + 10,
          rouNum: 3,
          xRate: 0,
          yRate: 0.3,
          fillStyle: "rgba(6,179,60,0.8)"
        }),
        status: false
      });
    }
  }
  createThree(10);

  var fourArray = new FourPackage.Four({
    x: width / 2,
    y: height / 2,
    radius: 40,
    xRate: 0,
    yRate: 0.4,
    fillStyle: "rgba(6,179,60,0.8)"
  });
  // fourArray.addWatching("touchmove", function(e) {
  //     this.x = e.changedTouches[0].clientX; //- moving.width / 2;
  //     this.y = e.changedTouches[0].clientY; //- moving.width / 2;
  // });

  // var goHome = new RoundRectPackage.RoundedRect({
  //     className: "button goHome",
  //     fontColor: '#101010',
  //     cornerX: cvs.canvas.width - 20 - 80,
  //     cornerY: cvs.canvas.height - 20 - 30,
  //     width: 90,
  //     height: 30,
  //     cornerRadius: 8,
  //     fillText: "HomePage"
  // });
  // goHome.ontouchend = function(e) {
  //     stopGame();
  //     isStop = true;
  //     core.open({
  //         href: urlPath + "snake/snindex.html"
  //     });
  // };
  var rotateRate = 0;
  var radius = 0;
  var roundRate = 15,
    cirFlag = false;

  // var triangle = new TrianglePackage.Triangle({
  //     x: 150,
  //     y: 150,
  //     a: 180,
  //     b: 180,
  //     c: 100,
  //     fillStyle: "rgba(100,100,250,0.8)"
  // });
  // triangle.addWatching("touchmove", function(e) {
  //     this.x = e.changedTouches[0].clientX;
  //     this.y = e.changedTouches[0].clientY;
  //     pointForTriangel.x = this.x;
  //     pointForTriangel.y = this.y;
  // });

  // var cir = new CirclePackage.Circle({
  //     x: 300,
  //     y: 30,
  //     radius: 20,
  //     fillStyle: "rgba(100,100,250,0.8)",
  //     strokeStyle: "rgba(100,100,250,0.8)"
  // });

  // var pointForTriangel = new PointPackage.Point({
  //     x: 150,
  //     y: 150
  // });

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

    // fourArray.radius = radius;
    // lt.radius = radius;
    // lb.radius = radius;
    // rt.radius = radius;
    // rb.radius = radius;
    threeArray.forEach(function (item) {
      if (item.three.radius + roundRate * fpx > maxRaduisForThree && item.status) {
        item.status = false;
      } else if (item.three.radius - roundRate * fpx <= minRadiusForThree && !item.status) {
        item.status = true;
      }
      item.three.radius = item.three.radius + (item.status ? 1 : (-1)) * (roundRate * fpx);
    });
  }

  var stopFlag;

  function stopGame() {
    animate.clearAnimation(stopFlag);
  }
  var fpsWord = new FpsWordPackage.DrawWords({
    className: 'fps',
    x: 20,
    y: 20,
    word: 0
  });

  function starGame() {
    stopFlag = animate.setAnimation(function (fps) {
      updateBall(1 / fps);
      core.frame.reRender();
    }, function (fps) {
      fpsWord.word = fps;
    }, 500);
  }
  starGame();
});