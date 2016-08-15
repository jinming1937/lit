define(function(){
	/* ajax */
	function server(config){
		var xhr = new XMLHttpRequest(),
		    strParam = config.url.search(/\?/g)>-1?
							parseToParam(config.data) 
							:
							parseToParam(config.data).replace(/^&/,"?");
		config.type = config.type || "POST";
		config.async = config.async || true;
		function parseToParam(data){
			var str = "";
			for(var item in data){
				str += "&"+item+"="+data.item.toString(); 
			}
			return str;
		}
		xhr.onreadystatechange = function(e){
			if(xhr.readyState === 4){
				if(xhr.status === 200){
					var data = JSON.parse(xhr.response);
					console.log(data);
					typeof config.success === "function" ? config.success(data):"";	
				}
			}
		};
		xhr.open(config.type,config.url,config.async);
		xhr.send();
	}
	//window.svs = server;
	return server;
});