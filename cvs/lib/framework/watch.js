define(function(){

	/*
	* 实现方式：
	* 1、对象继承 Watching, 获得其属性和方法
	* 2、对象通过 addWatching, 添加事件监视
	* 3、对象通过 eventFire, 触发事件
	* 
	*/

	/* 事件监视 */
	function Watching(){
		this.eventArray = [];
		this.eventIndex = this.eventArray.length;
		this.addWatching = function(name,callBack,isUpEvent){
			this.eventArray.push({name:name,fn:callBack,isUpEvent:isUpEvent?false:true});
			this.eventIndex++;
		};
		this.removeWatching = function(name){
			var _arr = this.eventArray;
			var _len = this.eventIndex;
			for(var i=0,len = this.eventIndex;i<len;i++){
				if(name === this.eventArray[i].name){
					_arr.splice(i,1);
					this.eventIndex --;
				}
			}
			this.eventArray = _arr;
		};
		this.eventFire = function(e){
			var _this = this;
			for(var i=0,len = this.eventIndex;i<len;i++){
				if(this.eventArray[i].name === e.type){
					(function(ii,e){
						window.setTimeout(function(){
							_this.eventArray[ii].fn(e);
						},0);
					}(i,e));
				}
			}
		};
	}
//	Watching.prototype.addWatching = function(name,callBack,isUpEvent){
//		this.eventArray.push({name:name,fn:callBack,isUpEvent:isUpEvent?false:true});
//		this.eventIndex++;
//	};
//	Watching.prototype.removeWatching = function(name){
//		var _arr = this.eventArray;
//		var _len = this.eventIndex;
//		for(var i=0,len = this.eventIndex;i<len;i++){
//			if(name === this.eventArray[i].name){
//				_arr.splice(i,1);
//				this.eventIndex --;
//			}
//		}
//		this.eventArray = _arr;
//	};
//	Watching.prototype.eventFire = function(name){
//		for(var i=0,len = this.eventIndex;i<len;i++){
//			if(this.eventArray[i].name === name){
//				window.setTimeout(function(){
//					this.eventArray[i].fn();
//				},0);
//			}
//		}
//	};
	
	return Watching;
});