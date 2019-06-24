const express = require('express');
const getRiotDataByUsername = require('../utils/riot.js');

const app = express();

app.get('*', async (req, res) => {
  const { username } = req.query;
  if (username) {
    try {
      const user = await getRiotDataByUsername(username);
      res.send({ user });
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.send('invalid username');
  }
});

module.exports = app;
