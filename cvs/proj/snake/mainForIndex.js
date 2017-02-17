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

define(["../../lib/main","./js/index","./js/projStart","./js/block","./js/eatPoint"],function(main){
	if(location.port === "8089"){
		main.router.addRouter({
			index:0,
			cvsName : "index",
			urlReg:/\/snake\/snindex/
		});
		main.router.addRouter({
			index:1,
			cvsName : "classical",
			urlReg:/\/snake\/classical/
		});
		main.router.addRouter({
			index:2,
			cvsName : "block",
			urlReg:/\/snake\/block/
		});
		main.router.addRouter({
			index:2,
			cvsName : "eatPoint",
			urlReg:/\/snake\/eatpoint/
		});
	}else{
		main.router.addRouter({
			index:0,
			cvsName : "index",
			urlReg:/snake\/snindex/
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
	
	// main.init();
	main._init();
	console.log("ending");
});