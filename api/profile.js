const express = require('express');
import { getRiotDataByUsername } from './utils/riot.js';

const app = express();

app.get('*', (req, res) => {
  const { username } = req.params;
  res.send({ user: getRiotDataByUsername(username) });
});

module.exports = app;
