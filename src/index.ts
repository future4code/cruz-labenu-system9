import { Request, Response } from "express";
import app from "./app";
import { connection } from './connection'


app.put("/turma",(req:Request,res:Response)=>{
    try {
        const{nome,data_inicio,data_final,modulo} = req.body;

        

    } catch (error) {
     res.status(400).send({message:error.message})   
    }
})