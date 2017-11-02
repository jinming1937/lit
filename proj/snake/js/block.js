var core = require("../../../cvs/lib/framework/core"),
    Gctrl = require("../../../cvs/outer/gctrl"),
    BoxPackage = require("./block/box"),
    BlockPackage = require("./block/block"),
    grid = require("../../../cvs/outer/grid"),
    FpsWordPackage = require("../../../cvs/lib/tool/word"),
    Animation = require("../../../cvs/outer/animation");
core.on("show", "block", function (cvs) {
    console.log(cvs);
    var animate = new Animation();
    var FpsWord = FpsWordPackage.DrawWords;
    var urlPath = location.origin + (location.port === '8089' ? '/dist/' : '/mb/');

    var doublePadding = 30;//15px
    var borderLine = 2;
    var baseScreen = new BoxPackage.Box({
        x:doublePadding,
        y:doublePadding,
        border:borderLine,
        width:cvs.width-doublePadding*2,
        height:cvs.width-doublePadding*2,
        pixelx:10,
        pixely:10,
        isStroke:true
    });

    /**
     * 
     */
    var baseBlock = new BlockPackage.Block({
        box:baseScreen,
        blockIndex:0,
        fillStyle:"rgba(212,87,236,0.5)"//'rgba(192,192,192,1)'
    });

    var leftBox = new BoxPackage.Box({
        x:doublePadding,
        y:cvs.width,//doublePadding,
        border:borderLine,
        width:(cvs.width-doublePadding*2)/1.5,
        height:(cvs.width-doublePadding*2)/1.5,
        pixelx:10,
        pixely:10,
        strokeStyle:"rgba(192,192,192,1)",
        isStroke:false
    });


    /// 不能用享元模式

    var leftBlock = new BlockPackage.Block({
        box:leftBox,
        blockIndex:1,
        isBase :false
    });

    leftBlock.addWatching('touchstart', function(e){
        //alert("ddddd");
        console.log("resize lit screen");
        leftBlock.firstTouchPosition = {
            xLength : e.changedTouches[0].clientX - this.box.x,
            yLength : e.changedTouches[0].clientY - this.box.y
        };
        this.box.resetSize({
            width:cvs.width-doublePadding*2,
            height:cvs.width-doublePadding*2
        });
    });

    leftBlock.addWatching('touchmove', function (e) {
        console.log('addWatching for moving');

        this.box.x = e.changedTouches[0].clientX - leftBlock.firstTouchPosition.xLength;
        this.box.y = e.changedTouches[0].clientY - leftBlock.firstTouchPosition.yLength;
    });

    leftBlock.addWatching("touchend", function(e){
        console.log("courage lit screen");
        var x = e.changedTouches[0].clientX - leftBlock.firstTouchPosition.xLength,
            y = e.changedTouches[0].clientY - leftBlock.firstTouchPosition.yLength;
        var arr = baseBlock.matchPosition({
            block:this,
            poi:{
                x: e.changedTouches[0].clientX,
                y: e.changedTouches[0].clientY
            }});
        if(arr && arr.length > 0){
            baseBlock.putBlock(arr);
            return;
        }
        this.box.x = doublePadding;
        this.box.y = cvs.width;
        this.box.resetSize({
            width:(cvs.width-doublePadding*2)/1.5,
            height:(cvs.width-doublePadding*2)/1.5
        });
    });

    // var leftBlock = new BlockPackage.Block({
        
    // });

    // var leftBlock = new BlockPackage.Block({
        
    // });

    // var windmill = new RoundRect({
    //     className: 'button move',
    //     fontColor: '#101010',
    //     cornerX: core.frame.width / 2 - 55,
    //     cornerY: core.frame.height - 60,
    //     width: 110,
    //     height: 30,
    //     cornerRadius: 8,
    //     fillText: "windmill"
    // });
    // windmill.ontouchend = function (e) {
    //     console.log("go windmill");
    //     animate.clearAnimation(flagAnimate);
    //     core.open({
    //         href: urlPath + "snake/windmill.html"
    //     });
    // };
    // var moving = new RoundRect({
    //     className: 'button move',
    //     fontColor: '#101010',
    //     cornerX: 300,
    //     cornerY: 10,
    //     width: 70,
    //     height: 30,
    //     cornerRadius: 8,
    //     fillText: "move"
    // });
    // moving.ontouchmove = function (e) {
    //     console.log('moving');
    // };
    // moving.addWatching('touchmove', function (e) {
    //     console.log('addWatching for moving');
    //     moving.cornerX = e.changedTouches[0].clientX - moving.width / 2;
    //     moving.cornerY = e.changedTouches[0].clientY - moving.height / 2;
    // });
    // moving.addWatching('touchend', function (e) {
    //     console.log('moved');
    // });
    // var snakeButton = new RoundRect({
    //     className: 'button snake',
    //     fontColor: '#101010',
    //     cornerX: core.frame.width / 2 - 45,
    //     cornerY: core.frame.height - 120,
    //     width: 90,
    //     height: 30,
    //     cornerRadius: 8,
    //     fillText: "snake"
    // });
    // snakeButton.addWatching('touchend', function () {
    //     console.log("hahaha");
    //     animate.clearAnimation(flagAnimate);
    //     core.open({
    //         href: urlPath + "snake/prosnake.html"
    //     });
    // }, false);
    // var snakeAuto = new RoundRect({
    //     className: "button snake-auto",
    //     fontColor: '#101010',
    //     cornerX: core.frame.width / 2 - 45,
    //     cornerY: core.frame.height - 180,
    //     width: 90,
    //     height: 30,
    //     cornerRadius: 8,
    //     fillText: "snake-auto"
    // });
    // snakeAuto.ontouchend = function (e) {
    //     animate.clearAnimation(flagAnimate);
    //     core.open({
    //         href: urlPath + "snake/classical.html"
    //     });
    // };
    var fpsWord = new FpsWord({
        className: 'fps',
        x: 30,
        y: 15,
        word: 'fps:60'
    });
    var flagAnimate = animate.setAnimation(function () {
        core.frame.reRender();
    }, function (fps) {
        fpsWord.word = 'fps:'+fps;
    }, 1000);
});