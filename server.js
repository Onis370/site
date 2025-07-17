const express = require('express');
const path = require('path');
const open = require('open').default;

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Stark’s Burger läuft auf http://localhost:${PORT}`);
  open(`http://localhost:${PORT}`);
}); 