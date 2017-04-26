var core = require("../../../cvs/lib/framework/core"),
    Screen = require("./snake/ScreenBox"),
    Snake = require("./snake/Snake"),
    Apple = require("./snake/Apple"),
    RoundRect = require("../../../cvs/lib/tool/roundRect"),
    Fps = require("../../../cvs/outer/fps"),
    FpsWord = require("../../../cvs/lib/tool/word"),
    Animation = require("../../../cvs/outer/animation");
// "../../../outer/gctrl"
// "../../../outer/hand"

core.on("show", "prosnake", function() {
    // new gctrl(core.frame);
    var animate = new Animation();
    var frame = core.frame;
    var urlPath = location.origin + (location.port === '8089' ? '/dist/' : '/mb/');
    console.log("begin load classical");
    /* ------------------[start]------------------- */
    var _screen = new Screen({
        size: 20,
        screenHeight: 155 //document.clientWidth 
    });
    var snake = new Snake({
        size: 20,
        maxPixelX: _screen.pixelX,
        maxPixelY: _screen.pixelY,
        borderX: _screen.borderX,
        borderY: _screen.borderY,
        //isEat:false,
        randomApplePixel: function() {
            return apple.randomPixel();
        },
        getApplePixel: function() {
            return apple.getPixel();
        }
    });
    var apple = new Apple({
        size: 20,
        maxPixelX: _screen.pixelX,
        maxPixelY: _screen.pixelY,
        borderX: _screen.borderX,
        borderY: _screen.borderY,
        pixelArray: _screen.pixelArray,
        getBodyArray: function() {
            return snake.bodyArray;
        }
    });
    var btnLeft = new RoundRect({
        className: "button handColor",
        fontColor: '#101010',
        cornerX: 20,
        cornerY: 400,
        width: 50,
        height: 50,
        cornerRadius: 8,
        fillText: "left",
        ontouchend: function(e) {
            snake.canMove(-1, 0, stopGame);
            timefor = +new Date();
            if (isStop) {
                starGame();
                isStop = false;
            }
        }
    });
    var btnUp = new RoundRect({
        className: "button handColor",
        fontColor: '#101010',
        cornerX: 70,
        cornerY: 350,
        width: 50,
        height: 50,
        cornerRadius: 8,
        fillText: "up",
        ontouchend: function(e) {
            snake.canMove(0, -1, stopGame);
            timefor = +new Date();
            if (isStop) {
                starGame();
                isStop = false;
            }
        }
    });
    var btnRight = new RoundRect({
        className: "button handColor",
        fontColor: '#101010',
        cornerX: 120,
        cornerY: 400,
        width: 50,
        height: 50,
        cornerRadius: 8,
        fillText: "right",
        ontouchend: function(e) {
            snake.canMove(1, 0, stopGame);
            timefor = +new Date();
            if (isStop) {
                starGame();
                isStop = false;
            }
        }
    });
    var btnDown = new RoundRect({
        className: "button handColor",
        fontColor: '#101010',
        cornerX: 70,
        cornerY: 450,
        width: 50,
        height: 50,
        cornerRadius: 8,
        fillText: "down",
        ontouchend: function(e) {
            snake.canMove(0, 1, stopGame);
            timefor = +new Date();
            if (isStop) {
                starGame();
                isStop = false;
            }
        }
    });
    var btnSG = new RoundRect({
        className: "button handColor",
        fontColor: '#101010',
        cornerX: frame.width - 50 - 20,
        cornerY: 400,
        width: 50,
        height: 50,
        cornerRadius: 8,
        fillText: "s/g",
        ontouchend: function(e) {
            toggleGame();
        }
    });
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

    function toggleGame() {
        if (isStop) {
            starGame();
            isStop = false;
        } else {
            animate.clearAnimation(stopFlag);
            isStop = true;
        }
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
                snake.canMove(undefined, undefined, stopGame);
            }
        }, function() {
            // snake.canMove(undefined, undefined, stopGame);
            flagNum = true;
        }, 500);
    }
    starGame();

    core.on("beforeHide", "classical", function() {
        //竟然不好使。。。
        console.log("beforeHide");
        stopGame();
        isStop = true;
    });
});