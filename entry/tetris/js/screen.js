define(["../js/static.js"],function  (StaticFn) {
	console.log("screen is loaded");
    /*===============================[屏幕start]========================*/
    //创建屏幕类
    function TetrisScreen(tetris) {
        this.tetris = tetris;
        this.Width_T = Math.ceil((this.tetris.offsetWidth - 25) / 25);
        this.Heigth_T = Math.ceil((this.tetris.offsetHeight - 25) / 25);
        this.createPixel();
    }
    TetrisScreen.prototype = {
        constructor: TetrisScreen,/*修正构造函数指向*/
        arrScreen: new Array(),/*像素存储器*/
        /*创建像素点*/
        createPixel: function () {
            var PixelModel = '<div class="blocks fl borW" index="{0}" coordinate="{1}"></div>',
                strHTML = '';
            for (var i = 0; i < this.Heigth_T; i++) {
                this.arrScreen[i] = new Array();
                for (var j = 0; j < this.Width_T; j++) {
                    strHTML += this.formatString(PixelModel, (this.Width_T * i + j).toString(), j.toString() + "," + i.toString());
                    this.arrScreen[i][j] = {
                        Width_T: j,
                        Height_T: i
                    };
                }
            }
            this.tetris.innerHTML = strHTML;
        },
        //返回当前屏幕的像素
        getPrePixel: function () {
            return {
                Width_T: this.Width_T,
                Height_T: this.Heigth_T
            }
        },
        //格式化字符串
        formatString: function (value, param) {
            var flag = true;
            for (var i = 0, count = arguments.length; i < count; i++) {
                if (typeof (arguments[i]) !== 'string') {
                    flag = false;
                    break;
                }
            }
            if (!flag) return 'Args list error!';
            var reg;
            for (var j = 0, len = arguments.length - 1; j < len; j++) {
                reg = new RegExp("\{[" + j.toString() + "]\}", "g");
                value = value.replace(reg, arguments[j + 1]);
            }
            return value;
        }
    }
    /*===============================[屏幕end]==========================*/
	return TetrisScreen;
})