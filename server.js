const express = require('express');
const app = express();
const port = 5000;

app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello from the terminal!',
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});