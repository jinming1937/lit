define([
    "../../../cvs/lib/tool/button"
], function(Button) {
    var main = window.main;

    function Block() {
        var dom = main.frame.canvas;
        var urlPath = location.origin + (location.port === '8089' ? '/dist/' : '/mb/');
        dom.classList.add("right-base");
        console.log("begin load index");
        var xxxx = new Button({
            x: 10,
            y: 10,
            value: 'move',
            backgroundColor: '#808080',
            ontouchmove: function(e) {
                console.log("this button is moving!!!");
            }
        });

        xxxx.addWatching('touchend', function() {
            console.log("exec touchend");
        }, false);

        new Button({
            x: 100,
            y: 10,
            value: '蛇',
            backgroundColor: '#f00',
            ontouchend: function(e) {
                main.open({
                    href: urlPath + "snake/prosnake.html"
                });
            }
        });
        new Button({
            x: 100,
            y: 50,
            value: '蛇',
            backgroundColor: '#f00',
            ontouchend: function(e) {
                main.open({
                    href: urlPath + "snake/classical.html"
                });
            }
        });
    }

    return new Block();
});