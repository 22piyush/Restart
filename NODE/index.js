const express = require('express');

const PORT = 3007

const app = express();


const mylogger = (req,res,next) =>{
    console.log("Logging from middleware 1");
    next()
    
}

const extlogger = (req,res,next) =>{
    console.log("Logging from middleware 2");
    next()
    
}

const myMiddleware = [mylogger,extlogger]

app.get('/home',myMiddleware,(req,res)=>{

    console.log("Last middleware");
    res.json({
        message:"Hello"
    })
})

app.listen(PORT,() => {
    console.log(PORT); 
})