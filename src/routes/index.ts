import * as express from 'express';

export const register = (app: express.Application)=>{
    app.get("/todaysActivity",(req:express.Request,res:express.Response)=>{
        res.status(200).send({"totalActivity":"fuckall"});
    });
    app.get("/weeksActivity",(req:express.Request,res:express.Response)=>{
        res.status(200).send({"totalActivity":"fuckall"});
    });
}