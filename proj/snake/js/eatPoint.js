var core = require("../../../cvs/lib/framework/core"),
    RoundRect = require("../../../cvs/lib/tool/roundRect"),
    Fps = require("../../../cvs/outer/fps"),
    FpsWord = require("../../../cvs/lib/tool/word"),
    Animation = require("../../../cvs/outer/animation"),
    canvasElemnet = require("../../../cvs/lib/base/canvasElement");

var animate = new Animation();

function Point(config) {
    canvasElemnet.call(this, config);

    this.draw = function() {
        var ctx = core.frame.cxt;

        roundedRect(ctx, 12, 12, 150, 150, 15);
        roundedRect(ctx, 19, 19, 150, 150, 9);
        roundedRect(ctx, 53, 53, 49, 33, 10);
        roundedRect(ctx, 53, 119, 49, 16, 6);
        roundedRect(ctx, 135, 53, 49, 33, 10);
        roundedRect(ctx, 135, 119, 25, 49, 10);

        ctx.beginPath();
        ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
        ctx.lineTo(31, 37);
        ctx.fill();

        for (var i = 0; i < 8; i++) {
            ctx.fillRect(51 + i * 16, 35, 4, 4);
        }

        for (i = 0; i < 6; i++) {
            ctx.fillRect(115, 51 + i * 16, 4, 4);
        }

        for (i = 0; i < 8; i++) {
            ctx.fillRect(51 + i * 16, 99, 4, 4);
        }

        ctx.beginPath();
        ctx.moveTo(83, 116);
        ctx.lineTo(83, 102);
        ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
        ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
        ctx.lineTo(111, 116);
        ctx.lineTo(106.333, 111.333);
        ctx.lineTo(101.666, 116);
        ctx.lineTo(97, 111.333);
        ctx.lineTo(92.333, 116);
        ctx.lineTo(87.666, 111.333);
        ctx.lineTo(83, 116);
        ctx.fill();

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.moveTo(91, 96);
        ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
        ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
        ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
        ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
        ctx.moveTo(103, 96);
        ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
        ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
        ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
        ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
        ctx.fill();

    };
}
Point.prototype = canvasElemnet.prototype;
Point.prototype.constructor = Point;

// 封装的一个用于绘制圆角矩形的函数.

function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
    ctx.lineTo(x + width - radius, y + height);
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    ctx.lineTo(x + width, y + radius);
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.quadraticCurveTo(x, y, x, y + radius);
    ctx.stroke();
}

var urlPath = location.origin + (location.port === '8089' ? '/dist/' : '/mb/');
core.on("show", "eatPoint", function() {
    var frame = core.frame;
    console.log("eat point");
    var pp = new Point();
    var roundRect = new RoundRect({
        className: 'button move',
        fontColor: '#101010',
        cornerX: 300,
        cornerY: 10,
        width: 70,
        height: 30
    });
    roundRect.addWatching('touchmove', function(e) {
        // console.log(e);
        // roundRect. fireEvent(e);
        roundRect.cornerX = e.changedTouches[0].clientX - roundRect.width / 2;
        roundRect.cornerY = e.changedTouches[0].clientY - roundRect.height / 2;
        console.log("hahahaha");
        // roundRect.draw();
    });
    roundRect.ontouchmove = function(e) {
        console.log("hahahaha2121212");
    };
    roundRect.ontouchmove = function(e) {
        console.log("hahahaha2121212_______");
    };
    var roundRect_ = new RoundRect();
    roundRect_.addWatching('touchmove', function(e) {
        // console.log(e);
        // roundRect. fireEvent(e);
        roundRect_.cornerX = e.changedTouches[0].clientX - roundRect_.width / 2;
        roundRect_.cornerY = e.changedTouches[0].clientY - roundRect_.height / 2;
        console.log("hahahaha___");
        // roundRect.draw();
    });
    roundRect_.addWatching('touchend', function(e) {
        // console.log(e);
        // roundRect. fireEvent(e);
        roundRect_.cornerX = e.changedTouches[0].clientX - roundRect_.width / 2;
        roundRect_.cornerY = e.changedTouches[0].clientY - roundRect_.height / 2;
        console.log("end");
        // roundRect.draw();
    });
    // roundRect_.ontouchmove = function(e) {
    //     console.log("hahahaha___");
    // };
    var goHome = new RoundRect({
        className: "button goHome",
        fontColor: '#101010',
        cornerX: frame.width - 20 - 80,
        cornerY: frame.height - 20 - 30,
        width: 90,
        height: 30,
        cornerRadius: 8,
        fillText: "HomePage",
        ontouchend: function(e) {
            stopGame();
            isStop = true;
            core.open({
                href: urlPath + "snake/snindex.html"
            });
        }
    });

    var stopFlag,
        isStop = false;

    function stopGame() {
        animate.clearAnimation(stopFlag);
        isStop = true;
    }

    var timefor = new Date().getTime();
    var fps_text = new Fps();
    var fpsWord = new FpsWord({
        className: 'fps',
        x: 20,
        y: 20,
        word: 0
    });

    function starGame() {
        var flagNum = true;
        stopFlag = animate.setAnimation(function() {
            core.frame.reRender();
            var xfps = fps_text.getFps(+new Date()).toFixed();
            fpsWord.word = flagNum ? xfps : fpsWord.word;
            flagNum = false;
            if (new Date().getTime() - timefor > 500) {
                timefor = new Date().getTime();
                // snake.canMove(undefined, undefined, stopGame);
            }
        }, function() {
            // snake.canMove(undefined, undefined, stopGame);
            flagNum = true;
        }, 500);
    }
    starGame();

});