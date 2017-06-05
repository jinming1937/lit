/**
 * 重复方式
 * 
 * @param {String} type 类型名
 */
function Repeat(type) {
    if (typeof type === "string") {
        switch (type) {
            case "repeat-x":
                this.repeatX();
                break;
            case "repeat-y":
                this.repeatY()
                break;
            case "no-repeat":
                this.noRepeat();
                break;
            case "repeat":
                this.repeat();
                break;
            case "space":
                this.space();
                break;
            default:
                this.noRepeat();
                break;
        }
    } else {
        throw ("param data type error!!!");
    }
}
Repeat.prototype.repeatX = function() {

};
Repeat.prototype.repeatY = function() {

};
Repeat.prototype.noRepeat = function() {

};
Repeat.prototype.repeat = function() {

};
Repeat.prototype.space = function() {

};

module.exports = Repeat;