define([
    "../../../cvs/lib/framework/core",
    "./snake/ScreenBox",
    "./snake/Snake",
    "./snake/Apple",
    "../../../cvs/lib/tool/button"
    // "../../../outer/gctrl"
    // "../../../outer/hand"
], function(core,Screen, Snake, Apple,Button) {
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
        var btnLeft = new Button({
            x:20,
            y:400,
            value:'左',
            width:50,
            height:50,
            backgroundColor:'#f55',
            ontouchend:function(e){
                clearInterval(stopFlag);
                isStop = true;
                snake.canMove(-1, 0, stopGame, screenDraw);
                starGame();
                isStop = false;
            }
        });
        var btnUp = new Button({
            x:70,
            y:350,
            value:'上',
            width:50,
            height:50,
            backgroundColor:'#f55',
            ontouchend:function(e){
                clearInterval(stopFlag);
                isStop = true;
                snake.canMove(0, -1, stopGame, screenDraw);
                starGame();
                isStop = false;
            }
        });
        var btnRight = new Button({
            x:120,
            y:400,
            value:'右',
            width:50,
            height:50,
            backgroundColor:'#f55',
            ontouchend:function(e){
                clearInterval(stopFlag);
                isStop = true;
                snake.canMove(1, 0, stopGame, screenDraw);
                starGame();
                isStop = false;
            }
        });
        var btnDown = new Button({
            x:70,
            y:450,
            value:'下',
            width:50,
            height:50,
            backgroundColor:'#f55',
            ontouchend:function(e){
                clearInterval(stopFlag);
                isStop = true;
                snake.canMove(0, 1, stopGame, screenDraw);
                starGame();
                isStop = false;
            }
        });
        var btnSG = new Button({
            x:frame.width - 50 -20,
            y:400,
            value:'s/g',
            width:50,
            height:50,
            backgroundColor:'#f55',
            ontouchend:function(e){
                toggleGame();
            }
        });

        function screenDraw() {
            //frame.reRender();
            frame.clear();
            _screen.draw();
            snake.draw();
            apple.draw();
            btnLeft.draw();
            btnUp.draw();
            btnRight.draw();
            btnDown.draw();
            btnSG.draw();
            new Button({
                x:frame.width - 20 - 80,
                y:frame.height - 20 - 30,
                value:'首页',
                backgroundColor:'#f00',
                ontouchend:function(e){
                    stopGame();
                    core.open({
                        href:urlPath+"snake/snindex.html"
                    });
                }
            });
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