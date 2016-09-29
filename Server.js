//fsモジュールを読みこんでhtmlファイルを読み込む
var html = require('fs').readFileSync('index.html');

//httpモジュールを読みこんでサーバーオブジェクトの作成
var http = require('http').createServer(function(req,res){
	//responseの挙動
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end(html);
});

//サーバーオブジェクトを指定してsocket.ioを使用
var io = require('socket.io')(http);
//3000番で待ちうけ
http.listen(3000);

//接続が確立されたときの通信イベント
io.on('connection',function(socket){
	socket.on('msg',function(data){
		//msgというイベント名を発火
		io.emit('msg',data)
	});
});