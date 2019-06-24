const mongoose = require('mongoose');

const CHAMPION_LIMIT = 5;

const ChampionsSchema = mongoose.Schema({
  name: String,
  avatarUrl: String,
});

const LeagueInfoSchema = mongoose.Schema({
  profileImage: String,
  username: String,
  champ: String,
  winRate: Number,
  mainRole: { type: String, enum: ['MID', 'ADC', 'SUP', 'JG', 'TOP'] },
  subRole: { type: String, enum: ['MID', 'ADC', 'SUP', 'JG', 'TOP'] },
  tier: String,
  rank: String,
});

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  googleId: String,
  state: String,
  leagueInfo: LeagueInfoSchema,
  password: String,
});

module.exports = mongoose.model('User', UserSchema);
