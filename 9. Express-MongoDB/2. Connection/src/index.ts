import express, { Application, Request, Response } from "express";
import connectToDB from "./db/connection";

import apiV1 from './routes/v1';
import bodyParser from 'body-parser';

const PORT = 3000;
const app: Application = express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

apiV1(app);

app.use((req: Request, res:Response)=>{
    res.status(404).send("Not Found");
});

connectToDB().then((connected:boolean)=>{
    if(connected){
        app.listen(PORT, () => {
            console.log("Escuchando en el puerto "+PORT);
        });
    }else{
        console.log("Error al conectar a mongo DB");
    }
});