define(["../js/static.js"],function  (StaticFn) {
	console.log("block.js is loaded");
    //================================[方块start]================================//
    //创建块类 块数组，window
    function Block(screenArea, daPrePixel) {
        this.ScreenArea = screenArea;
        this.DataPixel = daPrePixel;
        this.shape;
    };
    //设置 块类原型
    Block.prototype = {
        constructor: Block,
        //创建块
        createBlock: function (defShape) {
            var randomNum = defShape == undefined ? ~~(Math.random() * 7) : defShape;
            var arrblock = this.getShape(randomNum),
                arrblock_X,
                arrblock_Y,
                prePixel;
            this.shape = randomNum;
            for (var i = 0, len = arrblock.length; i < len; i++) {
                arrblock_X = arrblock[i][0];
                arrblock_Y = arrblock[i][1];
                prePixel = this.ScreenArea.children[this.formatAddress(arrblock_X, arrblock_Y)];
                StaticFn.replaceClass(prePixel,'borW','borB');
            }
        },
        //获取形状
        getShape: function (index) {//1、写死  2、数组相乘--未采用
            var move_X = this.DataPixel.Width_T / 2 > 2 ? this.DataPixel.Width_T / 2 - 1 : 0,
                move_Y = this.DataPixel.Width_T / 2 > 2 ? 0 : 1;
            switch (index) {
                case 0:/*左拐*/
                    return [[move_X + 0, move_Y + 0], [move_X + 0, move_Y + 1], [move_X + 1, move_Y + 1], [move_X + 2, move_Y + 1]];
                    break;
                case 1:/*右拐*/
                    return [[move_X + 2, move_Y + 0], [move_X + 0, move_Y + 1], [move_X + 1, move_Y + 1], [move_X + 2, move_Y + 1]];
                    break;
                case 2:/*尖*/
                    return [[move_X + 1, move_Y + 0], [move_X + 0, move_Y + 1], [move_X + 1, move_Y + 1], [move_X + 2, move_Y + 1]];
                    break;
                case 3:/*四方*/
                    return [[move_X + 1, move_Y + 0], [move_X + 2, move_Y + 0], [move_X + 1, move_Y + 1], [move_X + 2, move_Y + 1]];
                    break;
                case 4:/*长条*/
                    return [[move_X + 0, move_Y + 0], [move_X + 1, move_Y + 0], [move_X + 2, move_Y + 0], [move_X + 3, move_Y + 0]];
                    break;
                case 5:/*逆Z*/
                    return [[move_X + 1, move_Y + 0], [move_X + 2, move_Y + 0], [move_X + 0, move_Y + 1], [move_X + 1, move_Y + 1]];
                    break;
                case 6:/*正Z*/
                    return [[move_X + 0, move_Y + 0], [move_X + 1, move_Y + 0], [move_X + 1, move_Y + 1], [move_X + 2, move_Y + 1]];
                    break;
            }
        },
        //转换函数：将二维坐标转换为显示器的地址
        formatAddress: function (x, y) {
            return this.DataPixel.Width_T * y + x;
        },
        //获取当前形状
        getPreShape: function () {
            return this.shape;
        },
        //改变自身块
        changeBlock: function () {
            var arrBlock_S = this.ScreenArea.getElementsByClassName("borB"), 
            	indexBlock = new Array(),
            	screenChildren = {};
            indexBlock = [arrBlock_S[0].getAttribute("index"),
                arrBlock_S[1].getAttribute("index"),
                arrBlock_S[2].getAttribute("index"),
                arrBlock_S[3].getAttribute("index")];
            for (var i = 0, len = indexBlock.length; i < len; i++) {
                screenChildren = this.ScreenArea.children[parseInt(indexBlock[i])]
                StaticFn.replaceClass(screenChildren,'borB','borW');
            }
            this.createBlock();
        }
    };
    //================================[方块end]================================//
    return Block;
});