/* --------------------------[start defined]------------------------------- */
console.log("loading test,begin defined");
console.log("end defined");
/* --------------------------[end defined]------------------------------- */
/* --------------------------[start main]------------------------------- */
;(function(){
	
	console.log("main star");
	curtain.test({
		x:0,
		y:0,
		width:150,
		height:75,
		color:"#cfcfcf"
	});
	curtain.test({
		x:50,
		y:50,
		width:150,
		height:75,
		color:"#ccffcc"
	});
	console.log("main end");
}());
/* --------------------------[end main]------------------------------- */