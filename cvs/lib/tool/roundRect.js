var CanvasElement = require("../base/canvasElement");

function RoundedRect(config) {
    config = config || {};
    CanvasElement.call(this, config);
    this.cornerX = config.cornerX || 20;
    this.cornerY = config.cornerY || 20;
    this.width = config.width || 70;
    this.height = config.height || 30;
    this.cornerRadius = config.cornerRadius || 8;
    this.fontColor = config.fontColor || "#101010";
    this.fillText = config.fillText || "";
    this.isUpEvent = config.isUpEvent || false;
    this.className = config.className || "";
    // this.ontouchmove = function(e) {
    //     if (typeof config.ontouchmove === "function") {
    //         config.ontouchmove(e);
    //         this.fireEvent(e);
    //         this.cornerX = e.changedTouches[0].clientX - this.width / 2;
    //         this.cornerY = e.changedTouches[0].clientY - this.height / 2;
    //         this.draw();
    //     }
    // };
    this.createPath = function() {
        var context = this.frame.cxt;
        var cornerX = this.cornerX,
            cornerY = this.cornerY,
            width = this.width,
            height = this.height,
            cornerRadius = this.cornerRadius;
        context.beginPath();
        if (width > 0) {
            context.moveTo(cornerX + cornerRadius, cornerY);
        } else {
            context.moveTo(cornerX - cornerRadius, cornerY);
        }

        context.arcTo(cornerX + width, cornerY, cornerX + width, cornerY + height, cornerRadius);
        context.arcTo(cornerX + width, cornerY + height, cornerX, cornerY + height, cornerRadius);
        context.arcTo(cornerX, cornerY + height, cornerX, cornerY, cornerRadius);
        if (width > 0) {
            context.arcTo(cornerX, cornerY, cornerX + cornerRadius, cornerY, cornerRadius);
        } else {
            context.arcTo(cornerX, cornerY, cornerX - cornerRadius, cornerY, cornerRadius);
        }
    };
    this.draw = function() {
        var context = this.frame.cxt;
        this.createPath();
        context.closePath();
        context.save();
        this.style.setStyle(context);
        context.stroke();
        context.fill();
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillStyle = this.fontColor;
        context.font = "15px Microsoft YaHei";
        context.fillText(this.fillText, this.width / 2 + this.cornerX, this.height / 2 + this.cornerY);
        context.restore();
    };
    this.draw();
}

RoundedRect.prototype = CanvasElement.prototype; /* 测试 */
RoundedRect.prototype.coustructor = RoundedRect;

module.exports = RoundedRect;