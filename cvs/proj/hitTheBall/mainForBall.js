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
		main.router.addRouter({
			index:0,
			cvsName : "index",
			urlReg:/index/
		});
	}else{
		main.router.addRouter({
			index:0,
			cvsName : "index",
			urlReg:/ball\/ball/
		});
	}
	
	main.init();
	console.log("ending");
});