const express = require('express');

const app = express();

app.get('*', (req, res) => {
  res.send({ date: new Date().toString() });
});

module.exports = app;
