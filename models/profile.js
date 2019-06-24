const mongoose = require('mongoose');

const CHAMPION_LIMIT = 5;

const ProfileSchema = mongoose.Schema({
  name: String,
  email: String,
  googleId: String,
  password: String,
  state: String,
  leagueInfo: LeagueInfoSchema,
});

const ChampionsSchema = mongoose.Schema({
  name: String,
  avatarUrl: String,
});

const LeagueInfoSchema = mongoose.Schema({
  profileImage: String,
  username: String,
  mainChampions: {
    type: [ChampionsSchema],
    validate: [CHAMPION_LIMIT, '{PATH} exceeds the limit of 5'],
  },
  winRate: Number,
  mainRole: { type: String, enum: ['MID', 'ADC', 'SUP', 'JG', 'TOP'] },
  subRole: { type: String, enum: ['MID', 'ADC', 'SUP', 'JG', 'TOP'] },
  tier: String,
  rank: String,
});

module.exports = mongoose.model('Profile', ProfileSchema);
