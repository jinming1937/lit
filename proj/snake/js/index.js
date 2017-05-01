var core = require("../../../cvs/lib/framework/core"),
    // Button = require("../../../cvs/lib/tool/button"),
    RoundRectPackage = require("../../../cvs/lib/tool/roundRect"),
    Gctrl = require("../../../cvs/outer/gctrl"),
    grid = require("../../../cvs/outer/grid"),
    Clock = require("./clock"),
    FpsWordPackage = require("../../../cvs/lib/tool/word"),
    Fps = require("../../../cvs/outer/fps"),
    Animation = require("../../../cvs/outer/animation");
core.on("show", "index", function(cvs) {
    // new Gctrl(core.frame);
    var animate = new Animation();
    var RoundRect = RoundRectPackage.RoundedRect;
    var FpsWord = FpsWordPackage.DrawWords;
    var urlPath = location.origin + (location.port === '8089' ? '/dist/' : '/mb/');
    console.log("begin load index");
    // 
    var myClock = new Clock({
        radius: 60,
        positionX: core.frame.width / 2,
        positionY: core.frame.height / 2,
    });

    var eatPoint = new RoundRect({
        className: 'button move',
        fontColor: '#101010',
        cornerX: 80,
        cornerY: 100,
        width: 110,
        height: 30,
        cornerRadius: 8,
        fillText: "eat point"
    });
    eatPoint.ontouchend = function(e) {
        console.log("go eat point");
        core.open({
            href: urlPath + "snake/eatpoint.html"
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
    moving.ontouchmove = function(e) {
        console.log('moving');
    };

    moving.addWatching('touchmove', function(e) {
        // console.log(e);
        console.log('addWatching for moving');
        moving.cornerX = e.changedTouches[0].clientX - moving.width / 2;
        moving.cornerY = e.changedTouches[0].clientY - moving.height / 2;
    });

    moving.addWatching('touchend', function(e) {
        console.log('moved');
    });

    var snakeButton = new RoundRect({
        className: 'button snake',
        fontColor: '#101010',
        cornerX: 100,
        cornerY: 10,
        width: 90,
        height: 30,
        cornerRadius: 8,
        fillText: "snake"
    });
    snakeButton.addWatching('touchend', function() {
        console.log("hahaha");
        animate.clearAnimation(flagAnimate);
        core.open({
            href: urlPath + "snake/prosnake.html"
        });
    }, false);

    var snakeAuto = new RoundRect({
        className: "button snake-auto",
        fontColor: '#101010',
        cornerX: 200,
        cornerY: 10,
        width: 90,
        height: 30,
        cornerRadius: 8,
        fillText: "snake-auto"
    });
    snakeAuto.ontouchend = function(e) {
        animate.clearAnimation(flagAnimate);
        core.open({
            href: urlPath + "snake/classical.html"
        });
    };
    var fps_text = new Fps();
    var fpsWord = new FpsWord({
        className: 'fps',
        x: 20,
        y: 20,
        word: 0
    });
    var flagNum = false;
    var flagAnimate = animate.setAnimation(function() {
        core.frame.reRender();
        var xfps = fps_text.getFps(+new Date()).toFixed();
        fpsWord.word = flagNum ? xfps : fpsWord.word;
        flagNum = false;
    }, function() {
        console.log(fpsWord.word);
        flagNum = true;
    }, 1000);
});