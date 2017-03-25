define([
    "../../../cvs/lib/tool/element"
],function(element){
    /* 时钟 */
    function Clock(config){
        element.call(this,config);
        /** @type {number} 半径 */
        this.radius = config.radius;
        /**/
        this.positionX = config.positionX || 0;
        this.positionY = config.positionX || 0;
        this.numerals = ['Ⅳ','Ⅴ','Ⅵ','Ⅶ','Ⅷ','Ⅸ','Ⅹ','Ⅺ','Ⅻ','Ⅰ','Ⅱ','Ⅲ']; 
        // this.frame.manage(this);
        this.createPath = function (argument) {
            this.frame.cxt.beginPath();
            this.frame.cxt.arc(this.positionX,this.positionY,3,0,Math.PI*2);
        }
        /* 渲染 */
        this.draw = function(){
            var _this = this;
            var date = new Date();
            var cxt = this.frame.cxt;
            cxt.lineWidth = 0.5;
            cxt.font = '8px Microsoft YaHei';
            this.createPath();
            cxt.fillStyle = "#000000";
            cxt.fill();
            cxt.beginPath();
            cxt.arc(this.positionX,this.positionY,this.radius,0,Math.PI*2);
            cxt.save();
            cxt.translate(this.positionX,this.positionY);
            for (var i=0; i <= 11; i++) {
                cxt.rotate( Math.PI / 6 );
                cxt.moveTo(_this.radius-8,0);
                cxt.lineTo(_this.radius,0);
            };
            cxt.restore();
            cxt.stroke();
            
            cxt.beginPath();
            
            cxt.save();
            cxt.translate(this.positionX,this.positionY);
            
            cxt.save();
            cxt.strokeStyle = "#FF0000";
            cxt.rotate( Math.PI * 2 * 3 / 4);
            cxt.rotate( Math.PI * 2 * date.getSeconds() / 60  );
            cxt.moveTo(0,0);
            cxt.lineTo(_this.radius-8,0);
            cxt.restore();
            
            cxt.save()
            cxt.strokeStyle = "#550";
            cxt.rotate( Math.PI * 2 * 3 / 4);
            cxt.rotate( Math.PI * 2 * date.getMinutes() / 60 );
            // cxt.beginPath();
            cxt.moveTo(0,0);
            cxt.lineTo(_this.radius-10,0);
            cxt.restore();

            cxt.save();
            cxt.strokeStyle = "#000";
            cxt.rotate( Math.PI * 2 * 3 / 4);
            cxt.rotate( Math.PI * 2 * (date.getHours>12?date.getHours - 12:date.getHours())/ 12 );
            // cxt.beginPath();
            cxt.moveTo(0,0);
            cxt.lineTo(_this.radius-12,0);
            
            cxt.restore();
            
            cxt.restore();
            cxt.stroke();
        };
        this.clear = function(){
            this.frame.cxt.clearRect(this.positionX-this.radius-5,this.positionY-this.radius-5,this.radius*2+10,this.radius*2+10);
        };
        this.draw();
    }
    return Clock;
});