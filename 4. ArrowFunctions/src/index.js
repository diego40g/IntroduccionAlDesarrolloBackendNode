const http = require('http')
const {multiplication} = require('./utils/operations')

//si el valor del dato no va a cambiar
const PORT=3000;
const apiKey="123"

//Para variables que deban cambiar los datos
var promoEnable = false;

const server = http.createServer((req,res) => {
    console.log(req.url);
    switch (req.url) {
        case "/":
            res.writeHead(200,{"Content-type":"text/html"});
            res.write("<html><head><meta charset=\"utf-8\"></head><body>Servidor Javascript HOME</body></html>");
            break;
        case "/info":
            res.writeHead(200,{"Content-type":"application/json"});
            res.write(JSON.stringify({version:"0.0.1",appName:"Curso Node JS"}));
            break;
        case "/detail":
            res.writeHead(200,{"Content-type":"text/html"});
            res.write("<html><head><meta charset=\"utf-8\"></head><body>Servidor Javascript DETAIL</body></html>");
            break;
        default:
            res.writeHead(404,{"Content-type":"text/html"});
            res.write("<html><head><meta charset=\"utf-8\"></head><body>Servidor Javascript NOT FOUND </body></html>");
            break;
    }
    res.end();
});

console.log("multiplicación: ",multiplication(3,5));
server.listen(PORT)