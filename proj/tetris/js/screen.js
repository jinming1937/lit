var Button = require("../../../cvs/lib/tool/button"),
    server = require("../../../cvs/lib/server/server");
require("../../../cvs/outer/gctrl");

/* --------------------------[start defined]------------------------------- */
console.log("loading test");
var btn = new Button({
    x: 150,
    y: 60,
    name: "alert",
    width: 80,
    value: 'alert',
    ontouchstart: function(e) {
        //alert("type:"+e.type);
        console.log('button touchstart');
    }
});

btn.addWatching("touchend", function(e) {
    console.log("button touchend");
}, false);

btn.addWatching("touchend", function(e) {
    console.log("button touchend2");
}, false);

var bbstn = new Button({
    x: 150,
    y: 150,
    name: "alert",
    width: 80,
    value: 'alert',
});

bbstn.addWatching("touchstart", function(e) {
    console.log(e.type);
}, false);

var moveBtn = new Button({
    x: 10,
    y: 10,
    value: 'move',
    backgroundColor: '#808080',
    ontouchmove: function(e) {
        //console.log(e.changedTouches[0].clientX +"-"+e.changedTouches[0].clientY);
        moveBtn.x = e.changedTouches[0].clientX - moveBtn.width / 2;
        moveBtn.y = e.changedTouches[0].clientY - moveBtn.height / 2;
        moveBtn.draw();
    }
});

/* --------------------------[end defined]------------------------------- */
/* --------------------------[start main]------------------------------- */
//	;(function(){
//		console.log("main star");
//		server({
//			url:"../../../../service/cvs/getClassInfo.json",
//			type:"GET",
//			success:function(data){
//				if(data && data.data && data.total > 0){
//					//cvs.table(data.data);
//				}
//			}
//		});
//		console.log("main end");
//	}());
/* --------------------------[end main]------------------------------- */