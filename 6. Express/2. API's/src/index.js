const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;

const app = express();

//uso middleware body-parse
//usar x-www-form-urlencode
app.use(bodyParser.urlencoded({extended: false}));
//para reconocer Json en raw
app.use(bodyParser.json());


app.post('/login', (req,res)=>{
    //saber que tipo de datos estamos enviado en el request
    //console.log(req.headers);
    console.log(req.body);
    const { username, password } =req.body;
    if(username === 'dpaz' && password==='1234'){
        res.send({status: "OK"});
    }else{
        res.status(401).send("Denied user")
    }
})


app.use((req,res)=>{
    res.status(404).send("Not Found");
});

app.listen(PORT, () => {
    console.log("Escuchando en el puerto "+PORT);
})