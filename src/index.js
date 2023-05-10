import getRiotAPIKey from './key';

// development keys expire within 24 hours.
const DEV_RIOT_KEY = getRiotAPIKey();

// get general information about the summoner (profileIconId, puuid, summonerid, level)
async function summonerInformation(summonerName) {
  try {
    const response = await fetch(
      `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${DEV_RIOT_KEY}`
    );
    const summonerData = await response.json();
    return summonerData;
  } catch (error) {
    console.log('Could not find summoner.');
    return error;
  }
}

// use summonerid to get ranked data about the given summoner
async function summonerRanked(summonerName) {
  try {
    const summonerID = await summonerInformation(summonerName);
    const response = await fetch(
      `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerID.id}?api_key=${DEV_RIOT_KEY}`
    );
    const summonerData = await response.json();
    return summonerData;
  } catch (error) {
    console.log('Could not find summoner data.');
    return error;
  }
}

// logging the summoner rank
async function outputSoloqRank(summonerName) {
  try {
    const response = await summonerRanked(summonerName);
    console.log(response);
    const res = response[1]; // soloq is [1] - flex is [0]
    // console.log(`${res.summonerName}: ${res.tier} ${res.rank}`);
  } catch (error) {
    console.error(error);
  }
}

// takes in an array of summoner names and displays their ranks
function outputAllRanks(summonerArray) {
  summonerArray.forEach((summoner) => {
    outputSoloqRank(summoner);
  });
}

// outputSoloqRank('Dimantus');
outputAllRanks(['LVance', 'Scintmar', 'Dimantus']);
