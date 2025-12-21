const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
const PORT = 3000;

// Middleware to read JSON
app.use(express.json());
app.use(cookieParser())

// Home route
app.get("/", (req, res) => {
  res.set({
    'Set-Cookie': [
      'name-piyush;httpOnly',
       'name-harshal;httpOnly',
    ]
  });
  res.send("Node.js backend running without database 🚀");
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
