var frame = require("../framework/frame"),
    action = require("../framework/action");

function Screen() {
    action.call(this);
}
Screen.prototype.handler = function() {

};

Screen.prototype.manage = function(elementName, element) {

};
Screen.prototype.draw = function() {

};
Screen.prototype.destroy = function() {

};

module.exports = Screen;