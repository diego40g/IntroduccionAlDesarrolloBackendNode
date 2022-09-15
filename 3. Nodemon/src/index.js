var http = require('http')
//importar un modulo local
var operaciones = require('./operations')

var server=http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200,{"Content-type":"text/html"});
    res.write("<html><head><meta charset='utf-8'/></head><body>Hello World!!! 😉</body></html>");
    res.end();
})


console.log("Suma ", operaciones.addition(3,5));
console.log("Multiplicación ", operaciones.multiplication(3,5));
server.listen(3000);