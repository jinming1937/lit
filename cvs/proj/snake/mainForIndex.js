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

define(["../../lib/main","./js/index","./js/projStart","./js/block"],function(main){
	if(location.port === "8089"){
		main.router.addRouter({
			index:0,
			cvsName : "snake",
			urlReg:/snake/
		});
		main.router.addRouter({
			index:1,
			cvsName : "classical",
			urlReg:/classical/
		});
		main.router.addRouter({
			index:2,
			cvsName : "block",
			urlReg:/block/
		});
	}else{
		main.router.addRouter({
			index:0,
			cvsName : "snake",
			urlReg:/snake/
		});
		main.router.addRouter({
			index:1,
			cvsName : "classical",
			urlReg:/classical/
		});
		main.router.addRouter({
			index:2,
			cvsName : "block",
			urlReg:/block/
		});
	}
	
	main.init();
	console.log("ending");
});