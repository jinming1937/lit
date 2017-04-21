var core = require("../../../cvs/lib/framework/core"),
    Triangle = require("../../../cvs/lib/tool/extend/triangle"),
    Bar = require("../../../cvs/lib/tool/bar"),
    Button = require("../../../cvs/lib/tool/button"),
    RoundRect = require("../../../cvs/lib/tool/roundRect"),
    Gctrl = require("../../../cvs/outer/gctrl"),
    grid = require("../../../cvs/outer/grid"),
    Clock = require("./clock");
core.on("show", "index", function(cvs) {
    new Gctrl(core.frame);
    var urlPath = location.origin + (location.port === '8089' ? '/dist/' : '/mb/');
    console.log("begin load index");
    // var xxxx = new button({
    //     x: 10,
    //     y: 10,
    //     value: 'move',
    //     backgroundColor: '#808080',
    //     ontouchmove: function(e) {
    //         console.log("this button is moving!!!");
    //     }
    // });

    // xxxx.addWatching('touchend', function() {
    //     console.log("exec touchend");
    // }, false)

    // new button({
    // 	x:100,
    // 	y:10,
    // 	value:'蛇-',
    // 	backgroundColor:'#f00',
    // 	ontouchend:function(e){
    // 		clearInterval(stopClock);
    // 		core.open({
    // 			href:urlPath+"snake/prosnake.html"
    // 		});
    // 	}
    // });

    // new button({
    //     x: 100,
    //     y: 50,
    //     value: '蛇',
    //     backgroundColor: '#f00',
    //     ontouchend: function(e) {
    //         clearInterval(stopClock);
    //         core.open({
    //             href: urlPath + "snake/classical.html"
    //         });
    //     }
    // });

    // new button({
    // 	x:10,
    // 	y:50,
    // 	value:"-",
    // 	ontouchend:function(){
    // 		console.log('-');
    // 		core.open({
    // 			href:"http://www.xiaozhiga.com:8089/cvs/proj/snake/block.html"
    // 		});
    // 		// ang.rotateAngle -= 5;
    // 		// ang.rotate();
    // 	}
    // });

    // new button({
    // 	x:100,
    // 	y:50,
    // 	value:"+",
    // 	ontouchend:function(){
    // 		console.log('+');
    // 		// ang.rotateAngle += 5;
    // 		// ang.rotate();
    // 	}
    // });

    // var tri = new triangle({
    // 	a:30,
    // 	b:40,
    // 	c:50,
    // 	x:100,
    // 	y:310,
    // 	color: "#F00",
    // 	ontouchmove:function(e){
    // 		console.log("this tri is moving");
    // 	}
    // });
    // tri.addWatching("touchend",function(){
    // 	console.log("addWatching touchend");
    // });

    // var ang = new triangle({
    // 	a:60,
    // 	b:60,
    // 	angle:60,
    // 	x:150,
    // 	y:360,
    // 	color:"#F00"
    // });
    // 
    var myClock = new Clock({
        radius: 60,
        positionX: core.frame.width / 2,
        positionY: core.frame.height / 2,
    });

    var moving = new RoundRect({
        className: 'button move',
        fontColor: '#101010',
        cornerX: 300,
        cornerY: 10,
        width: 70,
        height: 30,
        cornerRadius: 8,
        fillText: "move",
        ontouchmove: function(e) {
            console.log('moving');
        }
    });

    moving.addWatching('touchmove', function(e) {
        // console.log(e);
        console.log('addWatching for moving');
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
        stopFlag = true;
        core.open({
            href: urlPath + "snake/prosnake.html"
        });
    }, false);

    new RoundRect({
        className: "button snake-auto",
        fontColor: '#101010',
        cornerX: 200,
        cornerY: 10,
        width: 90,
        height: 30,
        cornerRadius: 8,
        fillText: "snake-auto",
        ontouchend: function(e) {
            stopFlag = true;
            core.open({
                href: urlPath + "snake/classical.html"
            });
        }
    });
    var lastTime = 0;

    function getFps() {
        var now = +new Date(),
            fps = 1000 / (now - lastTime);
        lastTime = now;
        return fps;
    }
    var lastFpsUpdateTime = 0,
        lastFpsUpdate = 0,
        stopFlag = false;

    function animationForIndex() {
        var fps = 0,
            time = +new Date();
        fps = getFps().toFixed();
        if (time - lastFpsUpdateTime > 1000) {
            lastFpsUpdateTime = time;
            lastFpsUpdate = fps;
            console.log('update fps:' + fps);
        }
        core.frame.reRender();
        // core.frame.cxt.save();
        // core.frame.cxt.font = '15px Microsoft YaHei';
        // core.frame.cxt.fillStyle = 'rgba(233,233,248,0.3)';
        // core.frame.cxt.fillText(lastFpsUpdate+'fps',20,20);
        // core.frame.cxt.restore();
        // grid(core.frame.cxt,'gray',10,10);
        if (!stopFlag) {
            window.requestAnimationFrame(animationForIndex);
        }
    }
    animationForIndex();
});