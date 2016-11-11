/**
 * 作者：jinming1937@163.com
 * 
 */
console.log("start");
require.config({
	//baseUrl:"./js",// 
	paths:{
	}
});

define(["../../lib/main","./js/index"],function(main){
	if(location.port === "8089"){
		//开发环境
		main.router.addRouter({
			index:0,
			cvsName : "index",
			urlReg:/index/
		});
	}else{//正式环境
		main.router.addRouter({
			index:0,
			cvsName : "index",
			urlReg:/ball\/ball/
		});
	}
	
	main.init();
	console.log("ending");
});