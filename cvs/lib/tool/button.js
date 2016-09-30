define([
    "./element"
], function(Element) {
    console.log("load button");
    /**
     * [Button button]
     * @param {[type]} config [config]
     */
    function Button(config) {
        Element.call(this, config);
        /**
         * [elementType 多边形的静态属性，这里应该再抽象一层,而且这个应该定义成枚举，这是个问题：多边形，todo：shape class]
         * @type {Number}
         */
        this.elementType = 2;
        

        this.value = config.value || "button";
        //this.frame = (main.getCurrentFrame()).cvs; /* 抽到element */
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.width = config.width || 80;
        this.height = config.height || 30;
        this.color = config.color || "#000";
        this.backgroundColor = config.backgroundColor || "#F00";
        this.isUpEvent = config.isUpEvent || false;

        this.positionXYArray = [];
        this.initPositionXYArray();
        /**
         * [ontouchmove ontouchmove]
         * @param  {[type]} e [event]
         * @return {[type]}   [description]
         */
        this.ontouchmove = function(e) {
            config.ontouchmove && config.ontouchmove(e);
            this.eventFire(e);

            this.x = e.changedTouches[0].clientX - this.width/2;
            this.y = e.changedTouches[0].clientY - this.height/2;
            this.positionXYArray = [];
            this.initPositionXYArray();

            this.draw();
        };
        /* element 继承的draw 必须重写 */
        this.draw = function() {
            var element = this;
            var _frame = this.frame;
            var fontSize = 20;
            //if (_frame.width > _frame.height) {
            //    return; 
            //}
            _frame.cxt.fillStyle = element.backgroundColor || "#FFF";
            _frame.cxt.fillRect(element.x, element.y, element.width, element.height);
            _frame.cxt.font = fontSize.toString() + "px" + " Georgia";
            _frame.cxt.fillStyle = element.color; //_this.cxt.font;
            _frame.cxt.fillText(
                element.value,
                element.x + element.width / 2 - element.width / 4, //(element.value.length*fontSize > element.width?element.width:element.value.length*fontSize)/2,
                element.y + element.height / 2 + fontSize / 2, //难道字自动适应从中间渲染，而不是从左上角（20 X 20 正方形的左上角）？
                element.width);
        }
        this.draw();
    }

    Button.prototype.initPositionXYArray = function() {
        var _this = this;
        _this.positionXYArray.push({
            x: _this.x,
            y: _this.y
        });
        _this.positionXYArray.push({
            x: _this.x + _this.width,
            y: _this.y
        });
        _this.positionXYArray.push({
            x: _this.x + _this.width,
            y: _this.y + _this.height
        });
        _this.positionXYArray.push({
            x: _this.x,
            y: _this.y + _this.height
        });
    }

    return Button;
});