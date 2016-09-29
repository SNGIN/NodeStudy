//httpモジュールを読み込み、インスタンスを生成
var http = require('http');

//HTTPサーバーのイベントハンドラを定義
http.createServer(function(req,res){

	//HTTPヘッダの出力
	res.writeHead(200,{'Content-Type':'text/plain'});

	//データを受信したらそのままメッセージとして送信
	socket.on('data',function(data){
		socket.write(data);
	});

	//レスポンスの中身を出力
	res.end('Hello World\n');
}).listen(1337,'127.0.0.1');//127.0.0.1の1337番ポートで待機
