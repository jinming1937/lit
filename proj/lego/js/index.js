var core = require("../../../cvs/lib/framework/core"),
    Fps = require("../../../cvs/outer/fps"),
    FpsWordPackage = require("../../../cvs/lib/tool/word"),
    Animation = require("../../../cvs/outer/animation"),
    ScreenPackage = require("./screen");
var animate = new Animation();
var urlPath = location.origin + (location.port === '8089' ? '/dist/' : '/mb/');
core.on("show", "index", function(cvs) {
    new ScreenPackage.Screen({
        fillStyle: "rgba(255,255,255,1)"
    });
    console.log("index");



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

    new FpsWordPackage.DrawWords({
        // className: 'fps',
        x: core.frame.width/2,
        y: core.frame.height/2,
        word: 'Refuse Ctrl+C',
        fillStyle:"rgba(9,175,239,1)",
        font:"16px Palatino"
    });

    function starGame() {
        var flagNum = true;
        stopFlag = animate.setAnimation(function(startTime) {
            startTime = typeof startTime === "undefined" ? 16 : startTime;
            var fpx = (startTime - lastTime) / 1000;
            if (fpx >= 1) {
                lastTime = startTime;
                return;
            }
            core.frame.reRender();
            var xfps = fps_text.getFps(+new Date()).toFixed();
            fpsWord.word = flagNum ? xfps : fpsWord.word;
            flagNum = false;
            lastTime = startTime;
        }, function(startTime) {
            flagNum = true;
        }, 500);
    }
    starGame();
});