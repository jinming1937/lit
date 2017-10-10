var core = require("../../../cvs/lib/framework/core"),
    RoundRectPackage = require("../../../cvs/lib/tool/roundRect"),
    Gctrl = require("../../../cvs/outer/gctrl"),
    grid = require("../../../cvs/outer/grid"),
    FpsWordPackage = require("../../../cvs/lib/tool/word"),
    Animation = require("../../../cvs/outer/animation");
core.on("show", "block", function (cvs) {
    console.log("lod :" + cvs);
    var animate = new Animation();
    var RoundRect = RoundRectPackage.RoundedRect;
    var FpsWord = FpsWordPackage.DrawWords;
    var urlPath = location.origin + (location.port === '8089' ? '/dist/' : '/mb/');















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
        core.open({
            href: urlPath + "snake/windmill.html"
        });
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
        core.open({
            href: urlPath + "snake/prosnake.html"
        });
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
        core.open({
            href: urlPath + "snake/classical.html"
        });
    };
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