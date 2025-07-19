const express = require('express');

const PORT = 3007

const app = express();

app.get('/home', (req,res)=>{
    res.json({
        message:"Hello"
    })
})

app.listen(PORT,() => {
    console.log(PORT);
    
})