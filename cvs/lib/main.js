
var frame = require("./framework/frame"),
	router = require("./framework/router"),
	EventPlus = require("./framework/event"),
	section = require("./section");
require("./static/usualValue");
	
/**
 * 全局程序入口
 */
function Main(){
	//
	var _this = this;
	this.router = router;
	EventPlus.call(this);
	this.section = new section();
	this.uniqFrame = -1;
	this.frameArray = [];
	this.currentFrameNumber = "";
	this.currentLayerId = "";
	this.baseFrame = document.getElementsByClassName("box")[0];
	this.frame = new frame({
		canvas:document.getElementsByClassName("cvs")[0],
		width:document.body.clientWidth,
		height:document.body.clientHeight,//width > height ? width:height
		getCurrentRouter: function(){
			return _this.currentRouter;
		}
	});
	this.openUrl = "";
	this.historyArray = [];
}

Main.prototype.init = function(_href){
	var strUrl = _href || location.href;
	var currentPage = this.router.match(strUrl);
	var cvsNum;
	var cvs;
	if(currentPage){
		cvsNum = this.getUniqNumber();
		this.currentFrameNumber = cvsNum;
		this.currentLayerId = currentPage.cvsName;
		document.getElementsByClassName("cvs")[this.uniqFrame].setAttribute("id",cvsNum);
		//document.getElementsByClassName("cvs")[this.uniqFrame].className = "cvs right-base";
		cvs = new frame({
			canvas:document.getElementById(cvsNum),
			width:document.body.clientWidth,
			height:document.body.clientHeight//width > height ? width:height
		});
		this.frameArray.push({
			cvsNum : cvsNum,
			cvs : cvs,
			currentPage : currentPage,
			currentLayerId : currentPage.cvsName
		});
		currentPage.cvs = cvs;
		this.show(currentPage);
		// _this.section.init(,function(){
		// 	_this.init(_href);
		// });
	}else{
		console.log("init error!!!");
	}
};

/**
 * 初始化
 */
Main.prototype._init = function(_href){
	var strUrl = _href || location.href;
	var currentPage = this.router.match(strUrl);
	this.currentRouter = currentPage;
	var cvsNum;
	// var cvs;
	if(currentPage){
		cvsNum = this.getUniqNumber();
		this.currentFrameNumber = cvsNum;
		this.currentLayerId = currentPage.cvsName;
		//document.getElementsByClassName("cvs")[this.uniqFrame].setAttribute("id",cvsNum);
		//document.getElementsByClassName("cvs")[this.uniqFrame].className = "cvs right-base";
		//todo
		var currentFrame = this.frame;
		// new frame({
		// 	canvas:document.getElementsByClassName("cvs")[0],
		// 	width:document.body.clientWidth,
		// 	height:document.body.clientHeight//width > height ? width:height
		// });
		this.frameArray.push({
			cvsNum : cvsNum,
			cvs : currentFrame,
			currentPage : currentPage,
			currentLayerId : currentPage.cvsName
		});
		currentPage.cvs = currentFrame;
		this.frame.clear();
		this.show(currentPage);
		var _this = this;
		this.section.init(currentFrame.cxt,function(){
			_this.frame.destroyByPage(currentPage.cvsName);
			_this._init(_this.openUrl);
		});
	}else{
		console.log("init error!!!");
	}
};

/**
 * 获取当前的frame 对象
 */
Main.prototype.getCurrentFrame = function(currentLayerId){
	currentLayerId = currentLayerId || this.currentLayerId;
	for(var i in this.frameArray){
		if(currentLayerId === this.frameArray[i].currentLayerId){
			return this.frameArray[i];		
		}
	}
}

/**
 * 获取唯一ID，给canvas 的唯一ID
 */
Main.prototype.getUniqNumber = function(){
	this.uniqFrame +=1;
	return "uniq"+(this.uniqFrame);
}

/**
 * 页面展示方法
 * @param {Object} obj
 */
Main.prototype.show = function(obj){
	this.beforeShow(obj);
	this.fire("show",obj);
};

/**
 * 页面转出执行的方法
 * @param {Object} obj
 */
Main.prototype.hide = function(obj){
	this.beforeHide(obj);
	this.fire("hide",obj);
};

/**
 * 页面转入前执行的方法
 * @param {Object} obj
 */
Main.prototype.beforeShow = function(obj){
	this.fire("beforeShow",obj);
};

/**
 * 页面转出前执行的方法
 * @param {Object} obj
 */
Main.prototype.beforeHide = function(obj){
	this.fire("beforeHide",obj);
};

/**
 * 
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
Main.prototype.open = function(obj){
	var _href = obj.href;
	this.openUrl = _href;
	var visitCvsName = this.router.match(_href).cvsName;
	// history.pushState({
	// 	'cvs': visitCvsName,
	// 	'type': '0'	,
	// 	'router' : this.router.match(_href),
	// 	'visitObj' : obj
	// },"",_href);
	this.section.fullWin();
}

/**
 * 无刷新访问新页面
 * @param {Object} obj
 */
Main.prototype.visit = function(obj){
	var _href = obj.href;
	var _this = this;
	var locationHref = location.href;
	var str = location.search;
	var visitCvsName = _this.router.match(_href).cvsName;
	var num = str.search(/vis\=\d+/)>-1?
				parseInt(str.match(/(\?vis|\&vis)\=\d+/)[0].replace(/(\?vis|\&vis)\=/,""))+1
				:
				0
	str.search(/\?/) >-1?
		str.search(/vis\=\d+/)>-1? 
			locationHref = locationHref.replace(/vis\=\d+/,"vis="+num)
			:
			locationHref += "&vis="+num
		:
		locationHref +="?vis="+num;
	var historyObj = null;
	for(var i = 0,len = _this.historyArray.length;i<len;i++){
		if(_this.historyArray[i].nextUrl === locationHref){
			historyObj = _this.historyArray[i];
		}
	}
	history.pushState({
		'cvs': visitCvsName,
		'type': '0'	,
		'router' : _this.router.match(_href),
		'visitObj' : obj
		},"",locationHref);
	if(!historyObj){
		_this.historyArray.push({
			currentUrl :location.href,
			nextUrl :locationHref,
			perfectNumber :this.currentFrameNumber.replace(/uniq/,""),
			perfectLayerId : _this.currentLayerId,
			currentLayerId : visitCvsName
		});
		_this.getCvs(_this.currentFrameNumber).className = "cvs right-base center-to-left";
		setTimeout(function(){
			var _node = _this.createCanvas();
			_this.init(_href);
		},300);
	}else{
		_this.getCvs(_this.getCurrentFrame().cvsNum).className = "cvs right-base center-to-left";
		_this.getCvs(_this.getCurrentFrame(historyObj.currentLayerId).cvsNum).className = "cvs right-base";
		_this.currentFrameNumber = _this.getCurrentFrame(historyObj.currentLayerId).cvsNum;
		_this.currentLayerId = historyObj.currentLayerId;
		//historyObj
	}
};

Main.prototype.getCvs = function(strName){
	return document.getElementById(strName);
}

/**
 * 创建canvas
 */
Main.prototype.createCanvas = function(){
	var _node = document.createElement("canvas");
	_node.className = "cvs right-base";
	_node.width = document.body.clientWidth;
	_node.height= document.body.clientHeight;
	document.getElementsByClassName("box")[0].appendChild(_node);
	return _node;
}

/**
 * 后退
 */
Main.prototype.back = function(){
	var _this = this;
	var currentObj = null;
	var perfectObj = null;
	for(var i in this.historyArray){
		if(this.historyArray[i].currentLayerId === _this.currentLayerId)
			currentObj = this.historyArray[i];
	}
	for(var j in this.frameArray){
		if(this.frameArray[i].currentLayerId=== currentObj.perfectLayerId){
			perfectObj = this.frameArray[i];
		}
	}
	_this.hide(_this.getCurrentFrame().currentPage);
	_this.getCvs(_this.currentFrameNumber).className = "cvs right-base center-to-right";
	_this.getCvs(perfectObj.cvsNum).className = "cvs right-base";
	setTimeout(function(){
		_this.currentFrameNumber = perfectObj.cvsNum;
		_this.currentLayerId = perfectObj.currentLayerId;
		//_this.init(_href);
	},300);
};

/**
 * 前进
 */
Main.prototype.forward = function(obj){
	var _this = this;
	_this.visit(obj);
};

window.addEventListener("popstate",function(e){
	console.log("back!");
	console.log(e);
	if(e.state  === null){
		console.log("go back!");
		main.back();
	}else{
		//console.log("go ahead!");
		if(e.state["vititObj"] && e.state["visitObj"].href){
			//main.visit(e.state['visitObj']);
			//console.log(e);
		}
		//main.beforeShow(e.state['router']);
		//main.forward(e.state['visitObj']);
	}
},false);

var main = new Main();
window.main = main;
module.exports = main;


