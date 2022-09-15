var http = require('http')
//importar un modulo local de forma total
var operaciones = require('../utils/operations')
//importacion parcial de un modulo
var { letterA } = require('../utils/letters')

var server=http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200,{"Content-type":"text/html"});
    res.write("<html><head><meta charset='utf-8'/></head><body>Hello World!!! 😉</body></html>");
    res.end();
})


console.log("Suma ", operaciones.addition(3,5));
console.log("Multiplicación ", operaciones.multiplication(3,5));

console.log("Imprimir A ", letterA());
/*
no existe la importacion
console.log("Imprimir B ", letterB());
*/
server.listen(3000);