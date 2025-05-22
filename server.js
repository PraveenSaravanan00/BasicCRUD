console.log("hello world")

import express from "express";
import basicRouter from "./routes/basicroute.js"

const app=express();

app.use(express.json())


app.use("/api/v1",basicRouter)

app.listen(8000,()=>{
console.log("server is listening 8000")
});