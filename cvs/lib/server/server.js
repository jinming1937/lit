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
		/* 是否是跨域请求 */
		xhr.withCredentials = config.withCredentials || false;
		xhr.onreadystatechange = function(e){
			if(xhr.readyState === 4){
				if(xhr.status === 200){
					var contentType;
					try{
						/* error: server.js:25 Refused to get unsafe header "Set-Cookie" */
						//contentType = xhr.getResponseHeader('Set-Cookie');
						contentType = "";
					}
					catch(e){
						contentType = "";
					}
					//console.log(contentType);
					var data = JSON.parse(xhr.response);
					typeof config.success === "function" ? config.success(data):"";	
				}else if(xhr.status === 0){
					//console.log(e);	
				}
			}
		};
		xhr.open(config.type,config.url,config.async);
		xhr.send();
	}
	//window.svs = server;
	return server;
});