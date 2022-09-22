const express = require('express')

const  PORT = 5000;

const app = express();

app.get("/",(req,res)=>{
    //with express
    res.status(200).send("<html><head><meta charset=\"utf-8\"/></head><body>Servidor express !!!</body></html>")
    /*with out express
    res.writeHead(200,{"Content-Type": "text/html"});
    res.write("<html><head><meta charset=\"utf-8\"/></head><body>Hola</body></html>");
    res.end();*/
});

app.get("/info",(req,res) => {
    res.setHeader("Content-type","application/json")
    res.status(200).send(JSON.stringify({version:"0.0.1",appName:"Express server"}))
})

app.get("/detail",(req,res) => {
    res.setHeader("Content-type","application/json")
    res.status(200).send(JSON.stringify({version:"0.0.1",appName:"Express server"}))
})

app.listen(PORT, ()=>{
    console.log("Ejecutandose en "+PORT);
})