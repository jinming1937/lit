var triangle = require("../../../cvs/lib/tool/extend/triangle"),
    Circle = require("../../../cvs/lib/tool/circle"),
    Gctrl = require("../../../cvs/outer/gctrl"),
    storageCtrl = require("../../../node_modules/storage-ctrl");
var main = window.main,
    $data = window.$data;
main.on("show", "index", function() {
    var frame = main.frame;
    var screenWidth = main.frame.width;
    var screenHeight = main.frame.height;
    var thisUser = storageCtrl.getCookieData("BCookieID");
    var thisStdn = storageCtrl.getCookieData("stdn");
    //后端输出的数据
    var sData = JSON.parse($data);
    new Gctrl(frame);
    var ws = new WebSocket('ws://' + location.host + location.pathname);

    ws.onclose = function(evt) {
        console.log('WebSocketClosed!');
    };

    ws.onerror = function(evt) {
        console.log('WebSocketError!');
    };
    /*
    	todo: 1、 适配机型，不同大小的屏幕如何无缝对战？ 
    		  2、 各自控制各自的按钮，红控红，蓝控蓝
    		  3、 采用创建房间的方式，进行二人对战：可以获取客户端的信息，方便适配屏幕，筛选客户端
    		  4、 撞球 代码编写
    		  5、 设置游戏开始、结束、 同步球 移动信息
    		  6、 每个人都是"蓝队"：接受的数据，是红队
     */

    var data = {};
    data = data || {};
    var canStart;
    ws.onopen = function() {
        var dt = {};
        dt.x = screenWidth / 2;
        dt.userID = thisUser;
        dt.roomNum = 0;
        dt.stdn = thisStdn;
        dt.action = 'show';
        ws.send(JSON.stringify(dt));
    };

    var red = new Circle({
        x: data.x || screenWidth / 2,
        y: screenHeight / 6 - 15,
        radius: 15,
        strong: true,
        backgroundColor: sData.color,
        color: sData.color
    });

    var blue = new Circle({
        x: screenWidth / 2,
        y: screenHeight / 6 * 5 - 15,
        radius: 15,
        strong: true,
        backgroundColor: sData.bcolor,
        color: sData.bcolor,
        ontouchmove: function(e) {
            blue.y = screenHeight / 6 * 5 - 15;
            if (e.changedTouches[0].clientX + this.radius > screenWidth) {
                blue.x = screenWidth - this.radius;
            } else if (e.changedTouches[0].clientX - this.radius < 0) {
                blue.x = this.radius;
            } else {
                if (Math.pow(aimBall.x - blue.x, 2) + Math.pow(aimBall.y - blue.y, 2) - Math.pow(aimBall.radius + blue.radius, 2) <= 0) {
                    hasTouch = true;
                }
                blue.x = hasTouch ? blue.x : parseInt(e.changedTouches[0].clientX);
            }
        }
    });
    var hasTouch = false;
    blue.addWatching("touchmove", function(e) {
        var dt = {};
        dt.x = parseInt(blue.x);
        dt.userID = thisUser;
        dt.roomNum = 0;
        dt.stdn = thisStdn;
        dt.action = "touch";
        ws.send(JSON.stringify(dt));
        console.log("send message:" + dt.x);
        //cancelAnimationFrame(timeTip);
    });

    ws.onmessage = function(evt) {
        data = typeof evt.data === "string" ? JSON.parse(evt.data) : evt.data;
        if (Math.pow(aimBall.x - red.x, 2) + Math.pow(aimBall.y - red.y, 2) - Math.pow(aimBall.radius + red.radius, 2) <= 0) {
            red.x = red.x;
        } else {
            red.x = screenWidth - data.x;
        }

        if (!canStart && data.length === 2) {
            canStart = data.canStart;
            setTimeout(function() {
                start();
            }, 1000);
        }
        //blue.x = data.x || blue.x;
        //blue.y = data.y || blue.y;
        console.log("receive message:" + data.x);
    };


    //球
    var aimBall = new Circle({
        x: screenWidth / 2,
        y: screenHeight / 2,
        radius: 16,
        backgroundColor: "#FF0",
        color: "#FF0"
    });

    var speedX = sData.sd ? 1 : -1;
    var speedY = sData.sd ? 1 : -1;
    var ranSpeed = function() {
        var ran = Math.random();
        return parseInt(ran * 10) + 1;
    };
    //重绘
    function screenDraw() {
        frame.clear();
        red.draw();
        blue.draw();
        aimBall.draw();
    }

    function move() {
        hasTouch = false;
        if (aimBall.x + aimBall.radius >= screenWidth) {
            speedX = -speedX;
            changeColor(aimBall);
        } else if (aimBall.x - aimBall.radius <= 0) {
            speedX = -speedX;
            changeColor(aimBall);
        } else if (aimBall.y + aimBall.radius >= screenHeight) {
            speedY = -speedY;
            changeColor(aimBall);
        } else if (aimBall.y - aimBall.radius <= 0) {
            speedY = -speedY;
            changeColor(aimBall);
        } else if (Math.pow(aimBall.x - blue.x, 2) + Math.pow(aimBall.y - blue.y, 2) - Math.pow(aimBall.radius + blue.radius, 2) <= 0) {
            changeColor(aimBall);
            hasTouch = true;
            //撞到蓝色球 ： 撞到下面的球
            if (aimBall.x > blue.x) {
                speedX = -speedX;
                speedY = -speedY;
            } else {
                speedX = -speedX;
                speedY = -speedY;
            }
        } else if (Math.pow(aimBall.x - red.x, 2) + Math.pow(aimBall.y - red.y, 2) - Math.pow(aimBall.radius + red.radius, 2) <= 0) {
            changeColor(aimBall);
            //撞到红色球 ： 撞到上面的球
            if (aimBall.x > red.x) {
                speedX = -speedX;
                speedY = -speedY;
            } else {
                speedX = -speedX;
                speedY = -speedY;
            }
        }
        //先加和，在判断，会重合， 先判断，后加和，会分离。。。。
        aimBall.x += speedX;
        aimBall.y += speedY;

        screenDraw();
    }

    function bitBall() {
        var bl = false;
        if (Math.pow(aimBall.x - blue.x, 2) + Math.pow(aimBall.y - blue.y, 2) - Math.pow(aimBall.radius + blue.radius, 2) <= 0) {
            //撞到蓝色球 ： 撞到下面的球
            if (aimBall.x > blue.x) {
                "";
            } else {
                "";
            }
        } else if (Math.pow(aimBall.x - red.x, 2) + Math.pow(aimBall.y - red.y, 2) - Math.pow(aimBall.radius + red.radius, 2) <= 0) {
            //撞到红色球 ： 撞到上面的球
            if (aimBall.x > red.x) {
                "";
            }
        }
        return bl;
    }

    function changeColor(obj) {
        var str = "1234567890ABCDEF";
        var rand = parseInt(Math.random() * 16);
        var co = str.charAt(rand);
        co = co.concat(str.charAt(parseInt(Math.random() * 16)), str.charAt(parseInt(Math.random() * 16)));
        obj.backgroundColor = "#" + co;
        obj.color = "#" + co;
    }

    var timeTip;

    function start() {
        timeTip = window.requestAnimationFrame(function() {
            move();
            start();
        });
    }

});