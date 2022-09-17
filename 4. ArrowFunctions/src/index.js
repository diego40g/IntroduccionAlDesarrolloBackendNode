const http = require('http')
const {multiplication} = require('./utils/operations')

//si el valor del dato no va a cambiar
const PORT=3000;
const apiKey="123"

//Para variables que deban cambiar los datos
var promoEnable = false;

const server = http.createServer((req,res) => {
    res.writeHead(200,{"Content-type":"text/html"});
    res.write("<html><head><meta charset=\"utf-8\"></head><body>Servidor Javascript </body></html>");
    res.end();
});

console.log("multiplicación: ",multiplication(3,5));
server.listen(PORT)