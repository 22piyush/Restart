const express = require('express');
const app = express();

app.listen(5000, () => {
    console.log("Server Started At 4000");
    
})

app.get('/',(req,res) => {
    res.send("Hello jee, kaise ho saare")
})