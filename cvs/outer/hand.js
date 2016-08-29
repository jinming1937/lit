define(function(){
	var hand = {
		eventArray:[],
		fire:function(e){
			var _this = this;
			for(var i= this.eventArray.length-1;i>=0;i--){
				(function(ii,ee){
					setTimeout(function(){
						_this.eventArray[ii].fn && _this.eventArray[ii].fn(ee);	
					},0);
				}(i,e));
			}
		},
		off:function(name){
			var i = this.eventArray.length-1;
			for(;i>=0;i--){
				if(name === this.eventArray[i].name){
					this.eventArray.splice(i,1);
				}
			}
		},
		on:function(name,fn){
			this.eventArray.push({name:name,fn:fn});
		}
	};
	window.onkeydown = function(e){
		hand.fire(e);
//		var key = e.keyCode;
//		switch(key){
//			case 37://left
//			console.log("left");
//			break;
//			case 38://up
//			console.log("up");
//			break;
//			case 39://right
//			console.log("right");
//			break;
//			case 40://down
//			console.log("down");
//			break;
//			case 82://r
//			console.log("r");
//			break;
//			case 83://s
//			console.log("s");
//			break;
//		}
	};
	
	window.onkeypress = function(e){
		
	};
	
	window.onkeyup = function(e){
		
	};
	
	var leftctrl = document.getElementsByClassName("leftctrl")[0],
		upctrl = document.getElementsByClassName("upctrl")[0],
		rightctrl = document.getElementsByClassName("rightctrl")[0],
		downctrl = document.getElementsByClassName("downctrl")[0],
		stop = document.getElementsByClassName("stop")[0],
		reset = document.getElementsByClassName("reset")[0];
	leftctrl.onclick = function(){
		hand.fire({
			keyCode:37
		});
	};
	upctrl.onclick = function(){
		hand.fire({
			keyCode:38
		});
	};
	rightctrl.onclick = function(){
		hand.fire({
			keyCode:39
		});
	};
	downctrl.onclick = function(){
		hand.fire({
			keyCode:40
		});
	};
	reset.onclick = function(){
		hand.fire({
			keyCode:82
		});
	};
	stop.onclick = function(){
		hand.fire({
			keyCode:83
		});
	};
	
	window.hand = hand;
});