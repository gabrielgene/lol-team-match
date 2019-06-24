const axios = require('axios');
const API_URL_SUMMONER =
  'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/';
const API_URL_RANKED =
  'https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/';
const API_URL_PROFILE_IMG =
  'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/';
const API_KEY = 'RGAPI-fb7da8ae-3657-443e-a6ba-ddd59830aca9';

const calculateWinRate = (wins, losses) => {
  const matches = wins + losses;

  return (wins / matches) * 100;
};

const getSummonerDataByUsername = async username => {
  const result = await axios.get(`${API_URL_SUMMONER}${encodeURI(username)}`, {
    headers: {
      'Content-Type': 'application/json',
      'X-Riot-Token': API_KEY,
    },
  });
  return result.data;
};

const getSummonerRankedData = async id => {
  const result = await axios.get(`${API_URL_RANKED}${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'X-Riot-Token': API_KEY,
    },
  });
  const [rankedFlex, rankedSolo] = result.data;

  return rankedSolo;
};

const getSummonerWinRate = rankedSolo => {
  return calculateWinRate(rankedSolo.wins, rankedSolo.losses);
};

const getRiotDataByUsername = async username => {
  const { id, profileIconId } = await getSummonerDataByUsername(username);
  const rankedSoloInfo = await getSummonerRankedData(id);
  const winRate = getSummonerWinRate(rankedSoloInfo);

  const { tier, rank } = rankedSoloInfo;

  const profilePicture = `${API_URL_PROFILE_IMG}${profileIconId}.png`;

  return { username, winRate, profilePicture, tier, rank };
};

module.exports = getRiotDataByUsername;
