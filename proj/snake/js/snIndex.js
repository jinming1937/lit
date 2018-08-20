var core = require("../../../cvs/lib/framework/core"),
  // Button = require("../../../cvs/lib/tool/button"),
  RoundRectPackage = require("../../../cvs/lib/tool/roundRect"),
  // Gctrl = require("../../../cvs/outer/gctrl"),
  // grid = require("../../../cvs/outer/grid"),
  Clock = require("./clock"),
  FpsWordPackage = require("../../../cvs/lib/tool/word"),
  // Fps = require("../../../cvs/outer/fps"),
  Animation = require("../../../cvs/outer/animation");
core.on("show", "index", function (cvs) {
  // new Gctrl(core.frame);
  var animate = core.animate;
  var RoundRect = RoundRectPackage.RoundedRect;
  var FpsWord = FpsWordPackage.DrawWords;
  var urlPath = location.origin + (location.port === '8089' ? '/dist/' : '/mb/');
  // console.log("begin load index" + core.frame.width / 2 + "-" + core.frame.height / 2);
  // 
  var myClock = new Clock({
    radius: 60,
    positionX: core.frame.width / 2,
    positionY: core.frame.width / 2,
  });

  var windmill = new RoundRect({
    className: 'button move',
    fontColor: '#101010',
    cornerX: core.frame.width / 2 - 55,
    cornerY: core.frame.height - 60,
    width: 110,
    height: 30,
    cornerRadius: 8,
    fillText: "windmill"
  });
  windmill.ontouchend = function (e) {
    console.log("go windmill");
    animate.clearAnimation(flagAnimate);
    require.ensure('./windmill', function () {
      require('./windmill');
      core.open({
        href: urlPath + "snake/windmill.html"
      });
    }, 'preWindmill');
  };

  var moving = new RoundRect({
    className: 'button move',
    fontColor: '#101010',
    cornerX: 300,
    cornerY: 10,
    width: 70,
    height: 30,
    cornerRadius: 8,
    fillText: "move"
  });
  moving.ontouchmove = function (e) {
    console.log('moving');
  };

  moving.addWatching('touchmove', function (e) {
    // console.log(e);
    console.log('addWatching for moving');
    moving.cornerX = e.changedTouches[0].clientX - moving.width / 2;
    moving.cornerY = e.changedTouches[0].clientY - moving.height / 2;
  });

  moving.addWatching('touchend', function (e) {
    console.log('moved');
  });

  var snakeButton = new RoundRect({
    className: 'button snake',
    fontColor: '#101010',
    cornerX: core.frame.width / 2 - 45,
    cornerY: core.frame.height - 120,
    width: 90,
    height: 30,
    cornerRadius: 8,
    fillText: "snake"
  });
  snakeButton.addWatching('touchend', function () {
    console.log("hahaha");
    animate.clearAnimation(flagAnimate);
    require.ensure(['./proSnake'], function () {
      require('./proSnake');
      core.open({
        href: urlPath + "snake/prosnake.html"
      });
    }, 'preProsnake');
  }, false);

  var snakeAuto = new RoundRect({
    className: "button snake-auto",
    fontColor: '#101010',
    cornerX: core.frame.width / 2 - 45,
    cornerY: core.frame.height - 180,
    width: 90,
    height: 30,
    cornerRadius: 8,
    fillText: "snake-auto"
  });
  snakeAuto.ontouchend = function (e) {
    animate.clearAnimation(flagAnimate);
    require.ensure(['./proStart'], function () {
      require('./proStart');// 如果不在此require一下， 加载的代码不会执行
      core.open({
        href: urlPath + "snake/classical.html"
      });
    }, 'preClassical');
  };
  var fpsWord = new FpsWord({
    className: 'fps',
    x: 30,
    y: 15,
    word: 'fps:60'
  });
  //core.frame.reRender();
  var flagAnimate = animate.setAnimation(function () {
    core.frame.reRender();
  }, function (fps) {
    fpsWord.word = 'fps:' + fps;
  }, 1000);
});