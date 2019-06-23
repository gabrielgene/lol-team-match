const express = require('express');
import { getUserDataByUsername } from './services/riot.js';

const app = express();

app.get('*', (req, res) => {
  res.send({ user: getUserDataByUsername('Elton Jhin') });
});

module.exports = app;
