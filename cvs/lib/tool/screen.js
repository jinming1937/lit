define([
    "../framework/frame",
    "../framework/action"
], function(frame, action) {
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

    return Screen;
});