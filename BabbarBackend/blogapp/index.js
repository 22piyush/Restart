const express = require("express");
const app = express();

app.listen(3000, ()=>{
    console.log("App Running Succesfully");
});


app.get('/' , (req,res) => {
    res.send(`<h1>This is Home Page</h1>`)
})


