define(function(){
	function gctrl(cvs){
		var node = document.createElement("div");
		node.className = "wind";
		node.style = {
			display:'none'
		};
		var fn = cvs.canvas.onclick; 
		cvs.canvas.onclick = function(e){
			fn && fn(e);
			var x = e.clientX,
				y = e.clientY;
			if(document.getElementsByClassName("wind").length === 0){
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