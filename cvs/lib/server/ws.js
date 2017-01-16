define(function(){
	var ws;
	//ws = new WebSocket('ws://192.168.1.108:8088');
	ws = new WebSocket('ws://127.0.0.1:8080');
	
	ws.onclose = function(evt){
	  console.log('WebSocketClosed!');
	};

	ws.onerror = function(evt){
	  console.log('WebSocketError!');
	};

	return ws;
});