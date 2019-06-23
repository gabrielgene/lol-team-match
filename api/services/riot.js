import { calculateWinRate } from '../utils';

const API_URL_SUMMONER =
  'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/';
const API_URL_RANKED =
  'https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/';
const API_URL_PROFILE_IMG =
  'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/';
const API_KEY = 'RGAPI-c46c231d-cbe2-45c4-bcd6-370c67eac898';

const getSummonerDataByUsername = async username => {
  const result = await fetch(`${API_URL_SUMMONER}${encodeURI(username)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Riot-Token': API_KEY
    }
  });

  return result;
};

const getSummonerRankedData = async id => {
  const result = await fetch(`${API_URL_RANKED}${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Riot-Token': API_KEY
    }
  });

  const [rankedFlex, rankedSolo] = result;

  return rankedSolo;
};

const getSummonerWinRate = async rankedSolo => {
  return calculateWinRate(rankedSolo.wins, rankedSolo.losses);
};

export const getUserDataByUsername = async username => {
  const { id, profileIconId } = await getSummonerDataByUsername(username);

  const rankedSoloInfo = getSummonerRankedData(id);

  const winRate = await getSummonerWinRate(rankedSoloInfo);

  const { tier, rank } = rankedSoloInfo;

  const profilePicture = `${API_URL_PROFILE_IMG}${profileIconId}.png`;

  return { username, winRate, profilePicture, tier, rank };
};
