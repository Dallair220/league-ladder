import getRiotAPIKey from './key';

// development keys expire within 24 hours.
const DEV_RIOT_KEY = getRiotAPIKey();

// get general information about the summoner (profileIconId, PUUID, summonerId, level)
// https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName
async function summonerInformation(summonerName) {
  try {
    const response = await fetch(
      `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${DEV_RIOT_KEY}`
    );
    const generalSummonerData = await response.json();
    return generalSummonerData;
  } catch (error) {
    console.log('Could not find summoner by summoner name.');
    return error;
  }
}

// use summonerId to get ranked data about the given summoner
// https://developer.riotgames.com/apis#league-v4/GET_getLeagueEntriesForSummoner
async function summonerRanked(summonerId) {
  try {
    const response = await fetch(
      `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${DEV_RIOT_KEY}`
    );
    const summonerRankedData = await response.json();
    return summonerRankedData;
  } catch (error) {
    console.log('Could not find summoner ranked data by summonerId.');
    return error;
  }
}

// logging the summoner rank
async function getSoloqRank(summonerName) {
  try {
    const summoner = await summonerInformation(summonerName);
    const response = await summonerRanked(summoner.id);
    // console.log(response);

    const soloqRankData = response.filter(
      (rankType) => rankType.queueType === 'RANKED_SOLO_5x5'
    );
    const sRD = soloqRankData[0];

    if (sRD !== undefined) {
      const winrateUnrounded = (sRD.wins / (sRD.wins + sRD.losses)) * 100;
      const winrate = winrateUnrounded.toFixed(1);

      return {
        summonerName: sRD.summonerName,
        tier: sRD.tier,
        rank: sRD.rank,
        lp: sRD.leaguePoints,
        wins: sRD.wins,
        losses: sRD.losses,
        winrate,
      };
    }
    console.log(`${summoner.name} is unranked.`);
    return { summonerName: sRD.summonerName };
  } catch (error) {
    console.error(error);
    return error;
  }
}

// takes in an array of summoner names and displays their ranks
function outputAllRanks(summonerArray) {
  summonerArray.forEach(async (summoner) => {
    try {
      const player = await getSoloqRank(summoner);
      // console.log(sRD);
      console.log(
        `${player.summonerName}: ${player.tier} ${player.rank} (${player.lp} LP) | ${player.wins}W, ${player.losses}L = ${player.winrate}% WR `
      );
    } catch (error) {
      console.error(`Summoner: ${summoner} |`, error);
    }
  });
}

const rankValues = {
  IRON: 1,
  BRONZE: 2,
  SILVER: 3,
  GOLD: 4,
  PLATINUM: 5,
  DIAMOND: 6,
  MASTER: 7,
  GRANDMASTER: 8,
  CHALLENGER: 9,
};

outputAllRanks([
  'Lvance',
  'Scintmar',
  'Dimantus',
  'Schmongo',
  'Agurin',
  'Rychly',
  'Rxle',
]);
