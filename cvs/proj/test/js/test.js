define(["../../../lib/cvs","../../../lib/server/server"],function(cvs,server){
	/* --------------------------[start defined]------------------------------- */
	console.log("loading test,begin defined");
	/* --------------------------[end defined]------------------------------- */
	/* --------------------------[start main]------------------------------- */
	;(function(){
		console.log("main star");
		server({
			//url:"../../../../service/cvs/getClassInfo.json",
			url:"http://m.xiaozhiga.com:8088/service/cvs/getClassInfo.json",/* 跨域测试 ok*/
			type:"GET",
			withCredentials:true,
			success:function(data){
				if(data && data.data && data.total > 0){
					cvs.table(data.data);
				}
			}
		});
		server({
			//url:"../../../../service/cvs/getClassInfo.json",
			url:"http://m.xiaozhiga.com:8088/dist/city.json",/* 跨域测试 faile*/
			type:"GET",
			withCredentials:true,
			success:function(data){
				if(data && data.data && data.total > 0){
					cvs.table(data.data);
				}
			}
		});
		console.log("main end");
	}());
	/* --------------------------[end main]------------------------------- */
});