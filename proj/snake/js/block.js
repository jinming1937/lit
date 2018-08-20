var core = require("../../../cvs/lib/framework/core"),
  Gctrl = require("../../../cvs/outer/gctrl"),
  BoxPackage = require("./block/box"),
  BlockPackage = require("./block/block"),
  grid = require("../../../cvs/outer/grid"),
  FpsWordPackage = require("../../../cvs/lib/tool/word"),
  Animation = require("../../../cvs/outer/animation");
core.on("show", "block", function (cvs) {
  console.log(cvs);
  var animate = core.animate;
  var FpsWord = FpsWordPackage.DrawWords;
  var urlPath = location.origin + (location.port === '8089' ? '/dist/' : '/mb/');

  var doublePadding = 30;//15px
  var borderLine = 2;
  var baseScreen = new BoxPackage.Box({
    x: doublePadding,
    y: doublePadding,
    border: borderLine,
    width: cvs.width - doublePadding * 2,
    height: cvs.width - doublePadding * 2,
    pixelx: 10,
    pixely: 10,
    isStroke: true
  });

  /**
   * 
   */
  var baseBlock = new BlockPackage.Block({
    box: baseScreen,
    blockIndex: 0,
    fillStyle: "rgba(212,87,236,0.5)"//'rgba(192,192,192,1)'
  });

  var leftBox = new BoxPackage.Box({
    x: doublePadding,
    y: cvs.width,//doublePadding,
    border: borderLine,
    width: (cvs.width - doublePadding * 2) / 1.5,
    height: (cvs.width - doublePadding * 2) / 1.5,
    pixelx: 10,
    pixely: 10,
    strokeStyle: "rgba(192,192,192,1)",
    isStroke: false
  });


  /// 不能用享元模式

  var leftBlock = new BlockPackage.Block({
    box: leftBox,
    blockIndex: 4,
    isBase: false
  });

  leftBlock.addWatching('touchstart', function (e) {
    //alert("ddddd");
    console.log("resize lit screen");
    leftBlock.firstTouchPosition = {
      xLength: e.changedTouches[0].clientX - this.box.x,
      yLength: e.changedTouches[0].clientY - this.box.y
    };
    this.box.resetSize({
      width: cvs.width - doublePadding * 2,
      height: cvs.width - doublePadding * 2
    });
  });

  leftBlock.addWatching('touchmove', function (e) {
    console.log('addWatching for moving');

    this.box.x = e.changedTouches[0].clientX - leftBlock.firstTouchPosition.xLength;
    this.box.y = e.changedTouches[0].clientY - leftBlock.firstTouchPosition.yLength;
  });

  leftBlock.addWatching("touchend", function (e) {
    console.log("courage lit screen");
    var x = e.changedTouches[0].clientX - leftBlock.firstTouchPosition.xLength,
      y = e.changedTouches[0].clientY - leftBlock.firstTouchPosition.yLength;
    var arr = baseBlock.matchPosition({
      block: this,
      poi: {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    });
    if (arr && arr.length > 0) {
      baseBlock.putBlock(arr);
      return;
    }
    this.box.x = doublePadding;
    this.box.y = cvs.width;
    this.box.resetSize({
      width: (cvs.width - doublePadding * 2) / 1.5,
      height: (cvs.width - doublePadding * 2) / 1.5
    });
  });
  var fpsWord = new FpsWord({
    className: 'fps',
    x: 30,
    y: 15,
    word: 'fps:60'
  });
  var flagAnimate = animate.setAnimation(function () {
    core.frame.reRender();
  }, function (fps) {
    fpsWord.word = 'fps:' + fps;
  }, 1000);
});