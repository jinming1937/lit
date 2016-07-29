/* --------------------------[start defined]------------------------------- */
console.log("loading test,begin defined");
console.log("end defined");
/* --------------------------[end defined]------------------------------- */
/* --------------------------[start main]------------------------------- */
;(function(){
	console.log("main star");
//	curtain.test({
//		x:0,
//		y:0,
//		width:150,
//		height:75,
//		color:"#cfcfcf"
//	});
//	curtain.test({
//		x:50,
//		y:50,
//		width:150,
//		height:75,
//		color:"#ccffcc"
//	});
//	curtain.test({
//		x:10,
//		y:10,
//		width:curtain.width*0.9,
//		height:10,
//		color:"#800"
//	});
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(e){
		//console.log(xhr.readyState)
		if(xhr.readyState === 4 && xhr.status === 200){
			var data = JSON.parse(xhr.response);
			console.log(data);
			console.log(xhr.readyState);//4
			curtain.table(data.data);
		}
	};
	console.log(xhr.readyState);//0
	xhr.open("GET","../../../../service/cvs/getClassInfo.json",true);
	console.log(xhr.readyState);//1
	xhr.send();
	console.log(xhr.readyState);//2
	
	//curtain.table();
	console.log("main end");
}());
/* --------------------------[end main]------------------------------- */