const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.listen(5000, () => {
    console.log("Server started at port 5000");
});

app.get('/', (req, res) => {
    res.send("Hello jee, kaise ho saare");
});

app.post('/api/cars', (req, res) => {
    const { name, brand } = req.body;
    console.log(name);
    console.log(brand);
    
    res.send("Car Submitted");
});
