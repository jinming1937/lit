var core = require("../../../cvs/lib/framework/core"),
    FpsWordPackage = require("../../../cvs/lib/tool/word"),
    Fps = require("../../../cvs/outer/fps"),
    Animation = require("../../../cvs/outer/animation"),
    TrianglePackage = require("../../../cvs/lib/tool/triangle"),
    FourPackage = require("./nineBalls/four"),
    WallPackage = require("./nineBalls/wall"),
    PointPackage = require("./point/point");
var animate = new Animation();
var urlPath = location.origin + (location.port === '8089' ? '/dist/' : '/mb/');
core.on("show", "nineballs", function(cvs) {
    new WallPackage.Wall({
        endX: cvs.canvas.width,
        endY: cvs.canvas.height,
        fillStyle: "#9bf3ae"
    });

    var maxRaduisForThree = 20;
    var minRadiusForThree = 5;

    var lt = new FourPackage.Four({
        x: cvs.canvas.width / 4,
        y: cvs.canvas.height / 4,
        radius: maxRaduisForThree,
        rouNum: 3,
        xRate: 0,
        yRate: 0.3,
        fillStyle: "rgba(6,179,60,0.8)"
    });

    var rt = new FourPackage.Four({
        x: cvs.canvas.width / 4 * 3,
        y: cvs.canvas.height / 4,
        radius: maxRaduisForThree,
        rouNum: 3,
        xRate: 0,
        yRate: 0.3,
        fillStyle: "rgba(6,179,60,0.8)"
    });

    // var lb = new FourPackage.Four({
    //     x: cvs.canvas.width / 4,
    //     y: cvs.canvas.height / 4 * 3,
    //     radius: maxRaduisForThree,
    //     rouNum: 3,
    //     xRate: 0,
    //     yRate: 0.3,
    //     fillStyle: "rgba(6,179,60,0.8)"
    // });

    // var rb = new FourPackage.Four({
    //     x: cvs.canvas.width / 4 * 3,
    //     y: cvs.canvas.height / 4 * 3,
    //     radius: maxRaduisForThree,
    //     rouNum: 3,
    //     xRate: 0,
    //     yRate: 0.3,
    //     fillStyle: "rgba(6,179,60,0.8)"
    // });

    var threeArray = [];

    function createThree(num) {
        var cx = cvs.canvas.width / num;
        for (var i = 0; i < num; i++) {
            threeArray.push({
                three: new FourPackage.Four({
                    x: maxRaduisForThree + i * cx,
                    y: cvs.canvas.height / 4 * 3,
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
        x: cvs.canvas.width / 2,
        y: cvs.canvas.height / 2,
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
    var roundRate = 15;

    var trigngle = new TrianglePackage.Triangle({
        x: 150,
        y: 150,
        a: 180,
        b: 180,
        c: 100,
        fillStyle: "rgba(100,100,250,0.8)"
    });
    trigngle.addWatching("touchmove", function(e) {
        this.x = e.changedTouches[0].clientX;
        this.y = e.changedTouches[0].clientY;
    });

    new PointPackage.Point({
        x: 150,
        y: 150
    });

    function updateBall(fpx) {
        rotateRate = (rotateRate + 36 * fpx > 360) ? (360 - rotateRate + 36 * fpx) : rotateRate + 36 * fpx;
        fourArray.rotateRate = rotateRate * Math.PI * 2 / 360;
        trigngle.rotateAngle = rotateRate;
        radius = (radius + roundRate * fpx > maxRaduisForThree) ? (maxRaduisForThree - radius + roundRate * fpx) : radius + roundRate * fpx;
        // fourArray.radius = radius;
        // lt.radius = radius;
        // lb.radius = radius;
        // rt.radius = radius;
        // rb.radius = radius;
        threeArray.forEach(function(item) {
            if (item.three.radius + roundRate * fpx > maxRaduisForThree && item.status) {
                item.status = false;
            } else if (item.three.radius - roundRate * fpx <= minRadiusForThree && !item.status) {
                item.status = true;
            }
            item.three.radius = item.three.radius + (item.status ? 1 : (-1)) * (roundRate * fpx);
        });
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