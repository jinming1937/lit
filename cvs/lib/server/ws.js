define(function(){
	var ws = new WebSocket('ws://192.168.1.108:8888');
	
	ws.onclose = function(evt)
	{
	  console.log('WebSocketClosed!');
	};
	ws.onerror = function(evt)
	{
	  console.log('WebSocketError!');
	};

	return ws;
});