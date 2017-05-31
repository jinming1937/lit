var core = require("../../../cvs/lib/framework/core"),
    FpsWordPackage = require("../../../cvs/lib/tool/word"),
    Fps = require("../../../cvs/outer/fps"),
    Animation = require("../../../cvs/outer/animation"),
    RoundRectPackage = require("../../../cvs/lib/tool/roundRect"),
    FourPackage = require("./nineBalls/four"),
    WallPackage = require("./nineBalls/wall"),
    PointPackage = require("./point/point");
var animate = new Animation();
var urlPath = location.origin + (location.port === '8089' ? '/dist/' : '/mb/');
core.on("show", "nineballs", function(cvs) {
    new WallPackage.Wall({
        endX: cvs.canvas.width,
        endY: cvs.canvas.height
    });

    new FourPackage.Four({
        x: 150,
        y: 150,
        radius: 30,
        rouNum: 3,
        xRate: 0,
        yRate: 0.3,
        fillStyle: "rgba(6,179,60,0.8)"
    });

    new FourPackage.Four({
        x: 160,
        y: 160,
        radius: 15,
        rouNum: 3,
        xRate: 0,
        yRate: 0.3,
        fillStyle: "rgba(6,179,60,0.8)"
    });

    var fourArray = new FourPackage.Four({
        x: 150,
        y: 150,
        radius: 80,
        xRate: 0,
        yRate: 0.4,
        fillStyle: "rgba(6,179,60,0.8)"
    });
    fourArray.addWatching("touchmove", function(e) {
        this.x = e.changedTouches[0].clientX; //- moving.width / 2;
        this.y = e.changedTouches[0].clientY; //- moving.width / 2;
    });

    var goHome = new RoundRectPackage.RoundedRect({
        className: "button goHome",
        fontColor: '#101010',
        cornerX: cvs.canvas.width - 20 - 80,
        cornerY: cvs.canvas.height - 20 - 30,
        width: 90,
        height: 30,
        cornerRadius: 8,
        fillText: "HomePage"
    });
    goHome.ontouchend = function(e) {
        stopGame();
        isStop = true;
        core.open({
            href: urlPath + "snake/snindex.html"
        });
    };
    var rotateRate = 0;

    function updateBall(fpx) {
        rotateRate = (rotateRate + 36 * fpx > 360) ? (360 - rotateRate + 36 * fpx) : rotateRate + 36 * fpx;
        fourArray.rotateRate = rotateRate * Math.PI * 2 / 360;
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
        stopFlag = animate.setAnimation(function(startTime) {
            startTime = typeof startTime === "undefined" ? 16 : startTime;
            var fpx = (startTime - lastTime) / 1000;
            if (fpx >= 1) {
                lastTime = startTime;
                return;
            }
            updateBall(fpx);
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