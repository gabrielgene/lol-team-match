const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
  name: String,
  logoUrl: String,
  adminId: String,
  joinRequests: [PlayerSchema],
  members: [PlayerSchema]
});

const PlayerSchema = mongoose.Schema({
  username: String,
  id: String
});

module.exports = mongoose.model('Team', TeamSchema);
