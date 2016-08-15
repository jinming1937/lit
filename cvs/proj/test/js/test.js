define(["../../../lib/cvs","../../../lib/server/server"],function(cvs,server){
	/* --------------------------[start defined]------------------------------- */
	console.log("loading test,begin defined");
	/* --------------------------[end defined]------------------------------- */
	/* --------------------------[start main]------------------------------- */
	;(function(){
		console.log("main star");
		server({
			url:"../../../../service/cvs/getClassInfo.json",
			type:"GET",
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