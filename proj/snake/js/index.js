define([
    "../../../cvs/lib/framework/core",
    "../../../cvs/lib/tool/button",
    "../../../cvs/lib/tool/triangle",
    "../../../cvs/lib/tool/roundRect",
    "../../../cvs/outer/gctrl",
    "../../../cvs/outer/grid",
    "./clock"
], function(core, button, triangle, roundedRect, gctrl, grid,clock) {
    core.on("show", "index", function(cvs) {
        new gctrl(core.frame);
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
        var myClock = new clock({
            radius: 60,
            positionX: core.frame.width / 2,
            positionY: core.frame.height / 2,
        });

        var moving = new roundedRect({
        	className:'button move',
            fontColor: '#101010',
            cornerX: 10,
            cornerY: 10,
            width: 70,
            height: 30,
            cornerRadius: 8,
            fillText: "move",
            ontouchmove:function (e) {
            	console.log('moving');
            }
        });

        moving.addWatching('touchmove',function (e) {
        	// console.log(e);
        	console.log('addWatching for moving');
        });

        moving.addWatching('touchend',function (e) {
        	console.log('moved');
        });

        var snakeButton = new roundedRect({
        	className :'button snake',
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
            clearInterval(stopClock);
            core.open({
                href: urlPath + "snake/prosnake.html"
            });
        }, false);

        new roundedRect({
            className : "button snake-auto",
            fontColor: '#101010',
            cornerX: 200,
            cornerY: 10,
            width: 90,
            height: 30,
            cornerRadius: 8,
            fillText: "snake-auto",
            ontouchend: function(e) {
                clearInterval(stopClock);
                core.open({
                    href: urlPath + "snake/classical.html"
                });
            }
        });

        var stopClock = setInterval(function() {
            // myClock.clear();
            // myClock.draw();
            core.frame.reRender();
            // grid(core.frame.cxt,'lightgray',10,10);
        }, 1000);
    });
});