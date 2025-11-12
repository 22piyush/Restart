const express = require("express");
const app = express();

require("dotenv").config({ silent: true });
const PORT = process.env.PORT || 4000;

app.use(express.json());


const user = require("./routes/user");
app.use("/api/v1", user);


app.listen(PORT, () => {
    console.log(`Server started successfully ${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req,res) => {
    res.send("<h1>This is Home Page</h1>")
})
