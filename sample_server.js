// HTTPの機能をもったオブジェクトの生成
var http = require('http');
 
// http.Serverオブジェクトの生成
var server = http.createServer();

// クライアントからのリクエストを受け付けたときにdoRequestを実行する
server.on('request', doRequest);

// サーバをlisten状態にする
server.listen(1234);

// コンソールにメッセージを出す
console.log('Server running!');
 
// リクエストの処理
function doRequest(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World\n');
    res.end();
}
