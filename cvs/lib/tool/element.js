define(function(){
	/**
	 * 元素基类：提供公共方法、规范方法接口
	 */
	function Element(){
		//
		this.frame = (main.getCurrentFrame()).cvs;
		/* 自定义元素由 frame 管理 */
		this.frame.manage(this);
		/* 元素必须有draw方法，来渲染自己 */
		this.draw = function(){
			throw("this function need replan");
		}
	}
	
	return Element;
});