const express = require('express');
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Start the server
app.listen(5000, () => {
  console.log("Server started at port 5000");
});

// GET route
app.get('/', (req, res) => {
  res.send("Hello jee, kaise ho saare");
});

// POST route
app.post('/api/cars', (req, res) => {
  const { name, brand } = req.body;
  console.log("Car Name:", name);
  console.log("Car Brand:", brand);

  res.send("Car Submitted");
});



