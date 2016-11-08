define(function(){
	var ws = new WebSocket('ws://192.168.30.108:8088');
	
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