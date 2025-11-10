const express = require("express");
const app = express();

require("dotenv").config({ silent: true });
const PORT = process.env.PORT || 5000;

app.use(express.json());

const blog = require("./routes/blog");

app.use("/api/v1", blog);


app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
})

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req,res) => {
    res.send(`<h1>This is Home Page</h1>`)
});