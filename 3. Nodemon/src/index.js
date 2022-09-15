var http = require('http')

var server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"});
    res.write("<html><head><meta charset='utf-8'/></head><body>Hello World!!! 😉</body></html>")
    res.end();
})

server.listen(3000);