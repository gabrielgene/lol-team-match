const express = require('express');
const cookieParser = require('cookie-parser');
const { validateRequest, errorHandler } = require('../utils/request');
const User = require('../models/user');
const connect = require('../utils/db');

const app = express();
app.use(cookieParser());

app.post('*', async (req, res) => {
  console.log(req.body);
  validateRequest(req, res);
  await connect();

  const model = new User(req.body);

  model
    .save()
    .then(data => {
      res.cookie('googleId', req.body.googleId, { maxAge: 9000000000 });
      res.send(data);
    })
    .catch(err => {
      errorHandler(err, res);
    });
});

app.get('*', async (req, res) => {
  await connect();
  const { googleId } = req.cookies;
  console.log(googleId);

  User.findOne({})
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      errorHandler(err, res);
    });
});

module.exports = app;
