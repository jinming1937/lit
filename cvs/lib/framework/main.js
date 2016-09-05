define(["./cvs"],function(CVS){
	
	/**
	 * 全局程序入口
	 */
	function Main(){
		this.routerArray = [];
		this.eventArray = [];
		this.uniqFrame = -1;
		this.frameArray = []; 
		this.currentFrameNumber = "";
	}
	
	Main.prototype.addRouter = function(routerObj){
		this.routerArray.push(routerObj);
	}
	
	Main.prototype.getCurrentFrame = function(){
		var index = this.currentFrameNumber.replace(/uniq/,"");
		return this.frameArray[Number(index)];
	}
	
	Main.prototype.init = function(){
		var strUrl = location.href;
		var currentPage = this.match(strUrl);
		if(currentPage){
			currentPage.cvsNum = this.getUniqNumber();
			this.currentFrameNumber = currentPage.cvsNum;
			document.getElementsByClassName("cvs")[0].setAttribute("id",currentPage.cvsNum);
			currentPage.cvs = new CVS({
				canvas:document.getElementById(currentPage.cvsNum),
				width:document.body.clientWidth,
				height:document.body.clientHeight//width > height ? width:height
			});
			this.frameArray.push({
				cvsNum : currentPage.cvsNum,
				cvs : currentPage.cvs
			})
			this.show(currentPage);
		}else{
			console.log("init error!!!");
		}
	};
	Main.prototype.getUniqNumber = function(){
		return "uniq"+(this.uniqFrame+1);
	}
	
	Main.prototype.fire = function(fnName,context){
		for(var i in this.eventArray){
			if(fnName === this.eventArray[i].fnName && context.cvsName === this.eventArray[i].cvsName){
				(function(eventObj,context){
					window.setTimeout(function(){
						eventObj.fn(context);
					},0);	
				}(this.eventArray[i],context));
			}
		}
	};
	
	Main.prototype.on = function(fnName,cvsName,fnObj){
		this.eventArray.push({
			fnName:fnName,
			cvsName : cvsName,
			fn:fnObj
		});
	};
	
	Main.prototype.off = function(fnName){
		/* 数组是引用类型，删除元素要注意 */
		var _arr = [].concat(this.eventArray);
		for(var i in _arr){
			if(_arr[i].fnName === fnName){
				this.eventArray.splice(i,1);
			}
		}
	};
	
	Main.prototype.match = function(strUrl){
		var obj = null;
		var _pathName = location.pathname;
		for(var i in this.routerArray){
			if(_pathName.search(this.routerArray[i].urlReg) > -1){
				obj = this.routerArray[i];
				break;
			}
		}
		return obj;
	};
	
	Main.prototype.show = function(obj){
		this.beforeShow(obj);
		this.fire("show",obj);
	};
	
	Main.prototype.hide = function(){
		this.beforeHide();
	};
	
	Main.prototype.beforeShow = function(){
		
	}
	
	Main.prototype.beforeHide = function(){
		
	};
	
	Main.prototype.visit = function(){
		
	};
	
	//Main.prototype.router = new router();
	
	var main = new Main();
	window.main = main;
	return main;
});
