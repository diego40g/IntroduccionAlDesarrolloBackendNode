import express, { Application, Request, Response } from "express";

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

app.listen(PORT, () => {
    console.log("Escuchando en el puerto "+PORT);
})