const express = require("express");
const app = express();

require("dotenv").config({ silent: true });
const PORT = process.env.PORT || 4000

app.use(express.json());

// const blog = require();

// app.use("/api/v1", blog);

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});




app.get("/", (req,res) => {
    res.send(`<h1>This is Home Page</h1>`)
})