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

define(["../../cvs/lib/main","./js/index","./js/room"],function(main){
	if(location.port === "8089"){
		//开发环境
		main.router.addRouter({
			index:0,
			cvsName : "ball",
			urlReg:/ball/
		});
		main.router.addRouter({
			index:1,
			cvsName : "room",
			urlReg:/ball\/room/
		});
	}else{//正式环境
		main.router.addRouter({
			index:1,
			cvsName : "ball",
			urlReg:/ball\/ball/
		});
		main.router.addRouter({
			index:0,
			cvsName : "room",
			urlReg:/ball\/room/
		});
	}
	
	main.init();
	console.log("ending");
});