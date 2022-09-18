const http = require('http');
const path = require('path');
const {phone} = require('phone');
const url = require('url')

const PORT = 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url);
    const dataPhone = url.parse(req.url,true);
    const path = dataPhone.pathname;
    const query = dataPhone.query;
    console.log("path", path);
    console.log("query", query);

    switch (path) {
        case '/phone':
            res.writeHead(200, {"Content-type": "application/json"})
            console.log("phone(query.value)", query.country, phone(query.value, {country: query.country}));
            try{
                const countryPhone = phone(query.value, {country: query.country});
                res.write(JSON.stringify(countryPhone));
            }catch (e){
                res.writeHead(400, {"Content-type":"text/html"});
                res.write("Peticion incorrecta: ",e.message);
            }
            break;
    
        default:
            break;
    }

    res.end();
});

server.listen(PORT);