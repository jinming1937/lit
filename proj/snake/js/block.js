var core = require("../../../cvs/lib/framework/core"),
    RoundRectPackage = require("../../../cvs/lib/tool/roundRect"),
    Gctrl = require("../../../cvs/outer/gctrl"),
    BoxPackage = require("./block/box"),
    BlockPackage = require("./block/block"),
    grid = require("../../../cvs/outer/grid"),
    FpsWordPackage = require("../../../cvs/lib/tool/word"),
    Animation = require("../../../cvs/outer/animation");
core.on("show", "block", function (cvs) {
    console.log(cvs);
    var animate = new Animation();
    var RoundRect = RoundRectPackage.RoundedRect;
    var FpsWord = FpsWordPackage.DrawWords;
    var urlPath = location.origin + (location.port === '8089' ? '/dist/' : '/mb/');

    var doublePadding = 30;//15px
    var borderLine = 2;
    var boxEx = new BoxPackage.Box({
        x:doublePadding,
        y:doublePadding,
        border:borderLine,
        width:cvs.width-doublePadding*2,
        height:cvs.width-doublePadding*2,
        pixelx:10,
        pixely:10
    });

    var boxLeft = new BoxPackage.Box({
        x:doublePadding,
        y:cvs.width,//doublePadding,
        border:borderLine,
        width:(cvs.width-doublePadding*2)/3,
        height:(cvs.width-doublePadding*2)/3,
        pixelx:5,
        pixely:5,
        strokeStyle:"rgba(192,192,192,1)"
    });

    var blockLeft = new BlockPackage.Block({
        screenObj:boxLeft
    });

    blockLeft.addWatching('touchstart', function(e){
        console.log("resize lit screen");
        blockLeft.firstTouchPosition = {
            xLength : e.changedTouches[0].clientX - this.screenObj.x,
            yLength : e.changedTouches[0].clientY - this.screenObj.y
        };
        // this.screenObj.resetSize((cvs.width-doublePadding*2),(cvs.width-doublePadding*2));
    });

    blockLeft.addWatching('touchmove', function (e) {
        console.log('addWatching for moving');
        // this.screenObj.width = (cvs.width-doublePadding*2);
        // this.screenObj.height = (cvs.width-doublePadding*2);

        this.screenObj.x = e.changedTouches[0].clientX - blockLeft.firstTouchPosition.xLength;//blockLeft.screenObj.width / 2;
        this.screenObj.y = e.changedTouches[0].clientY - blockLeft.firstTouchPosition.yLength;//blockLeft.screenObj.height / 2;
        // blockLeft.cornerX = e.changedTouches[0].clientX - blockLeft.width / 2;
        // blockLeft.cornerY = e.changedTouches[0].clientY - blockLeft.height / 2;
    });

    blockLeft.addWatching("touchend", function(e){
        console.log("courage lit screen");
        this.screenObj.x = doublePadding;
        this.screenObj.y = cvs.width;
        this.screenObj.width = (cvs.width-doublePadding*2)/3;
        this.screenObj.height = (cvs.width-doublePadding*2)/3;
    });

    // var blockLeft = new BlockPackage.Block({
        
    // });

    // var blockLeft = new BlockPackage.Block({
        
    // });

    // var windmill = new RoundRect({
    //     className: 'button move',
    //     fontColor: '#101010',
    //     cornerX: core.frame.width / 2 - 55,
    //     cornerY: core.frame.height - 60,
    //     width: 110,
    //     height: 30,
    //     cornerRadius: 8,
    //     fillText: "windmill"
    // });
    // windmill.ontouchend = function (e) {
    //     console.log("go windmill");
    //     animate.clearAnimation(flagAnimate);
    //     core.open({
    //         href: urlPath + "snake/windmill.html"
    //     });
    // };
    // var moving = new RoundRect({
    //     className: 'button move',
    //     fontColor: '#101010',
    //     cornerX: 300,
    //     cornerY: 10,
    //     width: 70,
    //     height: 30,
    //     cornerRadius: 8,
    //     fillText: "move"
    // });
    // moving.ontouchmove = function (e) {
    //     console.log('moving');
    // };
    // moving.addWatching('touchmove', function (e) {
    //     console.log('addWatching for moving');
    //     moving.cornerX = e.changedTouches[0].clientX - moving.width / 2;
    //     moving.cornerY = e.changedTouches[0].clientY - moving.height / 2;
    // });
    // moving.addWatching('touchend', function (e) {
    //     console.log('moved');
    // });
    // var snakeButton = new RoundRect({
    //     className: 'button snake',
    //     fontColor: '#101010',
    //     cornerX: core.frame.width / 2 - 45,
    //     cornerY: core.frame.height - 120,
    //     width: 90,
    //     height: 30,
    //     cornerRadius: 8,
    //     fillText: "snake"
    // });
    // snakeButton.addWatching('touchend', function () {
    //     console.log("hahaha");
    //     animate.clearAnimation(flagAnimate);
    //     core.open({
    //         href: urlPath + "snake/prosnake.html"
    //     });
    // }, false);
    // var snakeAuto = new RoundRect({
    //     className: "button snake-auto",
    //     fontColor: '#101010',
    //     cornerX: core.frame.width / 2 - 45,
    //     cornerY: core.frame.height - 180,
    //     width: 90,
    //     height: 30,
    //     cornerRadius: 8,
    //     fillText: "snake-auto"
    // });
    // snakeAuto.ontouchend = function (e) {
    //     animate.clearAnimation(flagAnimate);
    //     core.open({
    //         href: urlPath + "snake/classical.html"
    //     });
    // };
    var fpsWord = new FpsWord({
        className: 'fps',
        x: 30,
        y: 15,
        word: 'fps:60'
    });
    var flagAnimate = animate.setAnimation(function () {
        core.frame.reRender();
    }, function (fps) {
        fpsWord.word = 'fps:'+fps;
    }, 1000);
});