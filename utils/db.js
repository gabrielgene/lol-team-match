const mongoose = require('mongoose');
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

module.exports = connect;
