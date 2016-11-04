define(function(){

	/**
	 * 触点提示，提示触点的坐标
	 * @param  {Object} cvs cvs对象
	 */
	function gctrl(cvs){
		var node = document.createElement("div");
		node.className = "position-tips";
		node.style = {
			display:'none'
		};
		var fn = cvs.canvas.onclick; 
		cvs.canvas.onclick = function(e){
			fn && fn(e);
			var x = e.clientX,
				y = e.clientY;
			if(document.getElementsByClassName("position-tips").length === 0){
				document.body.appendChild(node);
			}
			node.style.display = "block";
			node.style.left = (x+5)+"px";
			node.style.top = (y+5)+'px'
			node.innerHTML = "x:"+x+",y:"+y;
			window.setTimeout(function(){
				node.style.display = "none";
			},1000);
		};
	}
	return gctrl;
});