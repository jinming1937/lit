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
		this.baseFrame = document.getElementsByClassName("box")[0];
	}
	
	Main.prototype.addRouter = function(routerObj){
		this.routerArray.push(routerObj);
	}
	
	Main.prototype.getCurrentFrame = function(){
		var index = this.currentFrameNumber.replace(/uniq/,"");
		return this.frameArray[Number(index)];
	}
	
	Main.prototype.init = function(_href){
		var strUrl = _href || location.href;
		var currentPage = this.match(strUrl);
		if(currentPage){
			currentPage.cvsNum = this.getUniqNumber();
			this.currentFrameNumber = currentPage.cvsNum;
			document.getElementsByClassName("cvs")[this.uniqFrame].setAttribute("id",currentPage.cvsNum);
			document.getElementsByClassName("cvs")[this.uniqFrame].className = "cvs right-base";
			currentPage.cvs = new CVS({
				canvas:document.getElementById(currentPage.cvsNum),
				width:document.body.clientWidth,
				height:document.body.clientHeight//width > height ? width:height
			});
			this.frameArray.push({
				cvsNum : currentPage.cvsNum,
				cvs : currentPage.cvs,
				cvsName : currentPage
			});
			this.show(currentPage);
		}else{
			console.log("init error!!!");
		}
	};
	
	Main.prototype.getUniqNumber = function(){
		this.uniqFrame = this.uniqFrame +1;
		return "uniq"+(this.uniqFrame);
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
		var _pathName = strUrl;
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
	
	Main.prototype.visit = function(obj){
		var _href = obj.href;
		var _this = this;
		history.pushState(location.href,"?_=1");
		var _node = _this.createCanvas();
		_this.getCvs(_this.currentFrameNumber).className = "cvs right-base center-to-left";
		_node.className = "cvs left-base right-to-center";
		setTimeout(function(){
			//_this.getCvs(_this.currentFrameNumber).setAttribute("style","display: none;");
			_this.init(_href);
		},500);		
	};
	
	Main.prototype.getCvs = function(strName){
		return document.getElementById(strName);
	}
	
	Main.prototype.createCanvas = function(){
		var _node = document.createElement("canvas");
		_node.className = "cvs left-base";
		_node.width = document.body.clientWidth;
		_node.height= document.body.clientHeight;
		document.getElementsByClassName("box")[0].appendChild(_node);
		return _node;
	}
	
	//Main.prototype.router = new router();
	
	var main = new Main();
	window.main = main;
	return main;
});
