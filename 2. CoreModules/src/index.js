var http = require('http')

var server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"});
    res.write("<html><body>Javascript Server Running</body></html>");
    res.end();
});

server.listen(3000)