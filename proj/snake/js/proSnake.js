define([
    "../../../cvs/lib/framework/core",
    "./snake/ScreenBox",
    "./snake/Snake",
    "./snake/Apple",
    "../../../cvs/lib/tool/roundRect"
    // "../../../outer/gctrl"
    // "../../../outer/hand"
], function(core, Screen, Snake, Apple, roundRect) {
    core.on("show", "prosnake", function() {
        // new gctrl(core.frame);
        var frame = core.frame;
        var urlPath = location.origin+(location.port === '8089'?'/dist/':'/mb/');
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
        var btnLeft = new roundRect({
            className : "button handColor",
            fontColor: '#101010',
            cornerX: 20,
            cornerY: 400,
            width: 50,
            height: 50,
            cornerRadius: 8,
            fillText: "left",
            ontouchend: function(e) {
                clearInterval(stopFlag);
                isStop = true;
                snake.canMove(-1, 0, stopGame, screenDraw);
                starGame();
                isStop = false;
            }
        });
        var btnUp = new roundRect({
            className : "button handColor",
            fontColor: '#101010',
            cornerX: 70,
            cornerY: 350,
            width: 50,
            height: 50,
            cornerRadius: 8,
            fillText: "up",
            ontouchend: function(e) {
                clearInterval(stopFlag);
                isStop = true;
                snake.canMove(0, -1, stopGame, screenDraw);
                starGame();
                isStop = false;
            }
        });
        var btnRight = new roundRect({
            className : "button handColor",
            fontColor: '#101010',
            cornerX: 120,
            cornerY: 400,
            width: 50,
            height: 50,
            cornerRadius: 8,
            fillText: "right",
            ontouchend: function(e) {
                clearInterval(stopFlag);
                isStop = true;
                snake.canMove(1, 0, stopGame, screenDraw);
                starGame();
                isStop = false;
            }
        });
        var btnDown = new roundRect({
            className : "button handColor",
            fontColor: '#101010',
            cornerX: 70,
            cornerY: 450,
            width: 50,
            height: 50,
            cornerRadius: 8,
            fillText: "down",
            ontouchend: function(e) {
                clearInterval(stopFlag);
                isStop = true;
                snake.canMove(0, 1, stopGame, screenDraw);
                starGame();
                isStop = false;
            }
        });
        var btnSG = new roundRect({
            className : "button handColor",
            fontColor: '#101010',
            cornerX: frame.width - 50 -20,
            cornerY: 400,
            width: 50,
            height: 50,
            cornerRadius: 8,
            fillText: "s/g",
            ontouchend: function(e) {
                toggleGame();
            }
        });
        var goHome = new roundRect({
            className : "button goHome",
            fontColor: '#101010',
            cornerX: frame.width - 20 - 80,
            cornerY: frame.height - 20 - 30,
            width: 90,
            height: 30,
            cornerRadius: 8,
            fillText: "HomePage",
            ontouchend: function(e) {
                stopGame();
                core.open({
                    href:urlPath+"snake/snindex.html"
                });
            }
        });

        function screenDraw() {
            // frame.reRender();
            // frame.clear();
            _screen.draw();
            snake.draw();
            apple.draw();
            // btnLeft.draw();
            // btnUp.draw();
            // btnRight.draw();
            // btnDown.draw();
            // btnSG.draw();
            // goHome.draw();
        }
        screenDraw();
        var stopFlag, isStop = false;

        function stopGame() {
            clearInterval(stopFlag);
            isStop = true;
        }

        function toggleGame() {
            if(isStop) {
                starGame();
                isStop = false;
            } else {
                clearInterval(stopFlag);
                isStop = true;
            }
        }

        function starGame() {
            stopFlag = setInterval(function() {
                screenDraw();
                snake.canMove(undefined, undefined, stopGame, screenDraw);
            }, 300);
        }
        starGame();
        
        core.on("beforeHide","classical",function(){
            //竟然不好使。。。
            console.log("beforeHide");
            stopGame();
        });
    });
});