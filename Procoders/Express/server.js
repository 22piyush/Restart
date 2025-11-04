import express from 'express';

const app = express();

app.use()

app.get('/',
  (req, res, next) => {
    res.write("Hello World1\n");
    next();
  },
  (req, res, next) => {
    res.write("Hello World2\n");
    res.end();
  }
);

app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
