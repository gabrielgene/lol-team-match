const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('*', (req, res) => {
  res.cookie('auth', '123uh123u12uh31hu2', { maxAge: 9000000000 });
  res.status(200).send({ msg: 'Cookie!!' });
});

module.exports = app;
