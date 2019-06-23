const express = require('express');
const mongoose = require('mongoose');
const User = require('../db/models/user');
const { validateRequest, errorHandler, dataNotFound } = require('../db/utils');

const app = express();

let cachedDb = null;
async function connect() {
  if (cachedDb) {
    return cachedDb;
  }
  const con = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  });
  cachedDb = con;
  return con;
}

app.post('*', async (req, res) => {
  validateRequest(req, res);
  await connect();

  const model = new User(req.body);

  model
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      errorHandler(err, res);
    });
});

app.get('*', async (req, res) => {
  await connect();

  User.find({})
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      errorHandler(err, res);
    });
});

app.delete('*', async (req, res) => {
  await connect();
  User.findByIdAndRemove(req.params.id)
    .then(data => {
      dataNotFound(data, res);
      res.send({ message: 'Model deleted successfully!' });
    })
    .catch(err => {
      errorHandler(err, res);
    });
});

module.exports = app;
