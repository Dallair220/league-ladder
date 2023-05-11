/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInfoBySummonerName": () => (/* binding */ getInfoBySummonerName),
/* harmony export */   "getRankedInfoBySummonerId": () => (/* binding */ getRankedInfoBySummonerId)
/* harmony export */ });
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ "./src/key.js");


// development keys expire within 24 hours.
const DEV_RIOT_KEY = (0,_key__WEBPACK_IMPORTED_MODULE_0__["default"])();

// get general information about the summoner (profileIconId, PUUID, summonerId, level)
// https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName
async function getInfoBySummonerName(summonerName) {
  try {
    const response = await fetch(
      `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${DEV_RIOT_KEY}`
    );
    const generalSummonerData = await response.json();
    return generalSummonerData;
  } catch (error) {
    console.log(`Could not find ${summonerName} by summoner name.`);
    return error;
  }
}

// use summonerId to get ranked data about the given summoner
// https://developer.riotgames.com/apis#league-v4/GET_getLeagueEntriesForSummoner
async function getRankedInfoBySummonerId(summonerId) {
  try {
    const response = await fetch(
      `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${DEV_RIOT_KEY}`
    );
    const summonerRankedData = await response.json();
    return summonerRankedData;
  } catch (error) {
    console.log(
      `Could not find summoner ranked data by summonerId: ${summonerId}`
    );
    return error;
  }
}


/***/ }),

/***/ "./src/key.js":
/*!********************!*\
  !*** ./src/key.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getRiotAPIKey)
/* harmony export */ });
function getRiotAPIKey() {
  return 'RGAPI-1d89ca57-3c1a-4378-bcc4-e573d2d12c52';
}


/***/ }),

/***/ "./src/ladder.js":
/*!***********************!*\
  !*** ./src/ladder.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sortAllRanks)
/* harmony export */ });
/* harmony import */ var _output__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./output */ "./src/output.js");
/* harmony import */ var _rank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rank */ "./src/rank.js");



const TIER_VALUE = {
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
const RANK_VALUE = {
  IV: 1,
  III: 2,
  II: 3,
  I: 4,
};

// sorting the players by soloq rank
function sortRankedPlayers(rankedPlayers) {
  console.log('ranked list: ', rankedPlayers);

  rankedPlayers.sort((playerA, playerB) => {
    // compare tier rank first
    if (TIER_VALUE[playerA.tier] > TIER_VALUE[playerB.tier]) return -1;
    if (TIER_VALUE[playerA.tier] < TIER_VALUE[playerB.tier]) return 1;

    // if tier is the same, check for division
    if (RANK_VALUE[playerA.rank] > RANK_VALUE[playerB.rank]) return -1;
    if (RANK_VALUE[playerA.rank] < RANK_VALUE[playerB.rank]) return 1;

    // if division is the same, check for LP
    if (playerA.lp > playerB.lp) return -1;
    if (playerA.lp < playerB.lp) return 1;

    // if LP is the same as well, don't change sorting order
    return 0;
  });
  (0,_output__WEBPACK_IMPORTED_MODULE_0__["default"])(rankedPlayers);
}

async function sortAllRanks(playerArray) {
  const playerRanks = await (0,_rank__WEBPACK_IMPORTED_MODULE_1__["default"])(playerArray);
  // now we need to sort rankedPlayers
  const rankedPlayers = playerRanks.playersWithSoloqRankedData;
  // const unrankedPlayers = playerRanks.unrankedPlayerData;

  if (rankedPlayers.length > 0) {
    sortRankedPlayers(rankedPlayers);
  } else {
    console.log('No ranked players found.');
  }
}


/***/ }),

/***/ "./src/output.js":
/*!***********************!*\
  !*** ./src/output.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayLadder)
/* harmony export */ });
// just log to console for now. later add in UI
function displayLadder(rankedPlayers) {
  let i = 1;
  rankedPlayers.forEach((player) => {
    console.log(
      `${i}. `,
      `${player.summonerName} |`,
      player.tier,
      player.rank,
      `${player.lp}LP`,
      `- at ${player.winrate}% wr`,
      `(${player.wins + player.losses} games)`
    );
    i += 1;
  });
}


/***/ }),

/***/ "./src/rank.js":
/*!*********************!*\
  !*** ./src/rank.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPlayerRanks)
/* harmony export */ });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "./src/fetch.js");
/* harmony import */ var _summonerId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summonerId */ "./src/summonerId.js");



// logging the summoner rank
async function filterSoloqRankBySummonerName(summonerName) {
  try {
    // const summoner = await getInfoBySummonerName(summonerName);  // summoner.id needs to be used as a parameter in response
    const summonerId = (0,_summonerId__WEBPACK_IMPORTED_MODULE_1__["default"])(summonerName);
    const response = await (0,_fetch__WEBPACK_IMPORTED_MODULE_0__.getRankedInfoBySummonerId)(summonerId);

    // only get soloq, remove flex
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
    return { summonerName };
  } catch (error) {
    console.error(error);
    return error;
  }
}

// takes in an array of summoner names and displays their ranks
async function getPlayerRanks(summonerArray) {
  const playersWithSoloqRankedData = [];
  const unrankedPlayerData = [];

  await Promise.all(
    summonerArray.map(async (summoner) => {
      try {
        const player = await filterSoloqRankBySummonerName(summoner);

        // check if summoner is unranked
        if (player.tier !== undefined) {
          // console.log(`${player.summonerName}: ${player.tier} ${player.rank} (${player.lp} LP) | ${player.wins}W, ${player.losses}L = ${player.winrate}% WR `);
          playersWithSoloqRankedData.push(player);
        } else {
          console.log(`${player.summonerName} is currently Unranked.`);
          unrankedPlayerData.push(player);
        }
      } catch (error) {
        console.error(`Summoner: ${summoner} |`, error);
      }
    })
  );

  return { playersWithSoloqRankedData, unrankedPlayerData };
}


/***/ }),

/***/ "./src/summonerId.js":
/*!***************************!*\
  !*** ./src/summonerId.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSummonerIdBySummonerName)
/* harmony export */ });
// this file is only there to limit the number of api calls needed to get around some rate limits.
// "storing" summonerIds

const db = {
  silhim: '2xp2EBviq7UbXSr9FhIEYmm3M4Nl0imIsQq1jlOF7Pk-E58',
  lvance: 'D2-hxWfZoC4lguMEh2ZmaBRU5aW60zKyPpAtGMrVSm2paL4',
  scintmar: '-bq6ZUkGp3IkdMj0LI7-RACAFKwJG4CPwTmKyJEZFz3U5OI',
  schmongo: 'XoO2ZawN7d5EGDRnoCt4m7Iqk2EslJPVMPW4PRysDqf3MOk',
  dimantus: 'XB7b9lE1QlGmFSCfmxayGvYW3GaPRhxV6TbxEnuKkfViNgA',
  fertig11: '91PTpG9JaFF79gjNdmlp-v8tTRCMV5MaZhjKO1fNUAtmx5I',
  hornycopter: 'JzGUkSnV7tPQZHj4STtYDUFZRTFyqWcf12drdFOEbh5u4jw',
  generalmuh: 'zcu8VdRwffVmxitE46cyZqME-yomSvunHZBeZOKFw5-Kb9Q',
  m4pl3g0d: 'CJQ7j9W_tdMYVjKT3f4vODxTu4BmN6z0VA1VYMTkBolgdwvswSP7mTRSJA',
  gucciscripter: 'I2kfQSOeHp0kxPyy4V4Vph6QQtXeTI_pK3Tw3Hf8VGKQGl4',
  keep0ut: '0JyMtxQEp3Od7d4ww6TvKINoFMGZGjaTOIdu0noLiBRfrE8',
  admiralalpaka: 'TlBRlxG3tx5ny_pxrHsRK6TjGolAOBMKTAIQiFRU55vHFFY',
  krokoefendi: 'QVvz_tWf0arJk-sif-rLHzcza-7ou9TE4tcZEZcqfyURKP8',
  escapes: '8WSdwy-ZkgStrhuOVB-goFkMRQgIRgHJKgUWx9PacEPI1ZA',
  lumpidumpidu: 'QDv134EFUf7JW6ZftFmBHn0fMp8XW6acO4aMr3Y3j2FEJYU',
  carthour: 'G3K0j0kAAgedp692MMBjm_0C4jjTrZeNP5v4OtT7I20wKDs',
};

function getSummonerIdBySummonerName(summonerName) {
  return db[summonerName.toLowerCase()];
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ladder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ladder */ "./src/ladder.js");


(0,_ladder__WEBPACK_IMPORTED_MODULE_0__["default"])([
  'Silhim',
  'LVance',
  'Scintmar',
  'Schmongo',
  'Dimantus',
  'Fertig11',
  'Hornycopter',
  'GeneralMuh',
  'M4pl3g0d',
  'GUCCISCRIPTER',
  'Keep0ut',
  'AdmiralAlpaka',
  'KrokoEfendi',
  'Escapes',
  'LumpiDumpiDu',
  'Carthour',
]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2xlYWd1ZS1sYWRkZXIvLi9zcmMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9rZXkuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9sYWRkZXIuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9vdXRwdXQuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9yYW5rLmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9zcmMvc3VtbW9uZXJJZC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0UmlvdEFQSUtleSBmcm9tICcuL2tleSc7XG5cbi8vIGRldmVsb3BtZW50IGtleXMgZXhwaXJlIHdpdGhpbiAyNCBob3Vycy5cbmNvbnN0IERFVl9SSU9UX0tFWSA9IGdldFJpb3RBUElLZXkoKTtcblxuLy8gZ2V0IGdlbmVyYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHN1bW1vbmVyIChwcm9maWxlSWNvbklkLCBQVVVJRCwgc3VtbW9uZXJJZCwgbGV2ZWwpXG4vLyBodHRwczovL2RldmVsb3Blci5yaW90Z2FtZXMuY29tL2FwaXMjc3VtbW9uZXItdjQvR0VUX2dldEJ5U3VtbW9uZXJOYW1lXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW5mb0J5U3VtbW9uZXJOYW1lKHN1bW1vbmVyTmFtZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9ldXcxLmFwaS5yaW90Z2FtZXMuY29tL2xvbC9zdW1tb25lci92NC9zdW1tb25lcnMvYnktbmFtZS8ke3N1bW1vbmVyTmFtZX0/YXBpX2tleT0ke0RFVl9SSU9UX0tFWX1gXG4gICAgKTtcbiAgICBjb25zdCBnZW5lcmFsU3VtbW9uZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBnZW5lcmFsU3VtbW9uZXJEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGBDb3VsZCBub3QgZmluZCAke3N1bW1vbmVyTmFtZX0gYnkgc3VtbW9uZXIgbmFtZS5gKTtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cblxuLy8gdXNlIHN1bW1vbmVySWQgdG8gZ2V0IHJhbmtlZCBkYXRhIGFib3V0IHRoZSBnaXZlbiBzdW1tb25lclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIucmlvdGdhbWVzLmNvbS9hcGlzI2xlYWd1ZS12NC9HRVRfZ2V0TGVhZ3VlRW50cmllc0ZvclN1bW1vbmVyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmFua2VkSW5mb0J5U3VtbW9uZXJJZChzdW1tb25lcklkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2V1dzEuYXBpLnJpb3RnYW1lcy5jb20vbG9sL2xlYWd1ZS92NC9lbnRyaWVzL2J5LXN1bW1vbmVyLyR7c3VtbW9uZXJJZH0/YXBpX2tleT0ke0RFVl9SSU9UX0tFWX1gXG4gICAgKTtcbiAgICBjb25zdCBzdW1tb25lclJhbmtlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHN1bW1vbmVyUmFua2VkRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBDb3VsZCBub3QgZmluZCBzdW1tb25lciByYW5rZWQgZGF0YSBieSBzdW1tb25lcklkOiAke3N1bW1vbmVySWR9YFxuICAgICk7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSaW90QVBJS2V5KCkge1xuICByZXR1cm4gJ1JHQVBJLTFkODljYTU3LTNjMWEtNDM3OC1iY2M0LWU1NzNkMmQxMmM1Mic7XG59XG4iLCJpbXBvcnQgZGlzcGxheUxhZGRlciBmcm9tICcuL291dHB1dCc7XG5pbXBvcnQgZ2V0UGxheWVyUmFua3MgZnJvbSAnLi9yYW5rJztcblxuY29uc3QgVElFUl9WQUxVRSA9IHtcbiAgSVJPTjogMSxcbiAgQlJPTlpFOiAyLFxuICBTSUxWRVI6IDMsXG4gIEdPTEQ6IDQsXG4gIFBMQVRJTlVNOiA1LFxuICBESUFNT05EOiA2LFxuICBNQVNURVI6IDcsXG4gIEdSQU5ETUFTVEVSOiA4LFxuICBDSEFMTEVOR0VSOiA5LFxufTtcbmNvbnN0IFJBTktfVkFMVUUgPSB7XG4gIElWOiAxLFxuICBJSUk6IDIsXG4gIElJOiAzLFxuICBJOiA0LFxufTtcblxuLy8gc29ydGluZyB0aGUgcGxheWVycyBieSBzb2xvcSByYW5rXG5mdW5jdGlvbiBzb3J0UmFua2VkUGxheWVycyhyYW5rZWRQbGF5ZXJzKSB7XG4gIGNvbnNvbGUubG9nKCdyYW5rZWQgbGlzdDogJywgcmFua2VkUGxheWVycyk7XG5cbiAgcmFua2VkUGxheWVycy5zb3J0KChwbGF5ZXJBLCBwbGF5ZXJCKSA9PiB7XG4gICAgLy8gY29tcGFyZSB0aWVyIHJhbmsgZmlyc3RcbiAgICBpZiAoVElFUl9WQUxVRVtwbGF5ZXJBLnRpZXJdID4gVElFUl9WQUxVRVtwbGF5ZXJCLnRpZXJdKSByZXR1cm4gLTE7XG4gICAgaWYgKFRJRVJfVkFMVUVbcGxheWVyQS50aWVyXSA8IFRJRVJfVkFMVUVbcGxheWVyQi50aWVyXSkgcmV0dXJuIDE7XG5cbiAgICAvLyBpZiB0aWVyIGlzIHRoZSBzYW1lLCBjaGVjayBmb3IgZGl2aXNpb25cbiAgICBpZiAoUkFOS19WQUxVRVtwbGF5ZXJBLnJhbmtdID4gUkFOS19WQUxVRVtwbGF5ZXJCLnJhbmtdKSByZXR1cm4gLTE7XG4gICAgaWYgKFJBTktfVkFMVUVbcGxheWVyQS5yYW5rXSA8IFJBTktfVkFMVUVbcGxheWVyQi5yYW5rXSkgcmV0dXJuIDE7XG5cbiAgICAvLyBpZiBkaXZpc2lvbiBpcyB0aGUgc2FtZSwgY2hlY2sgZm9yIExQXG4gICAgaWYgKHBsYXllckEubHAgPiBwbGF5ZXJCLmxwKSByZXR1cm4gLTE7XG4gICAgaWYgKHBsYXllckEubHAgPCBwbGF5ZXJCLmxwKSByZXR1cm4gMTtcblxuICAgIC8vIGlmIExQIGlzIHRoZSBzYW1lIGFzIHdlbGwsIGRvbid0IGNoYW5nZSBzb3J0aW5nIG9yZGVyXG4gICAgcmV0dXJuIDA7XG4gIH0pO1xuICBkaXNwbGF5TGFkZGVyKHJhbmtlZFBsYXllcnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzb3J0QWxsUmFua3MocGxheWVyQXJyYXkpIHtcbiAgY29uc3QgcGxheWVyUmFua3MgPSBhd2FpdCBnZXRQbGF5ZXJSYW5rcyhwbGF5ZXJBcnJheSk7XG4gIC8vIG5vdyB3ZSBuZWVkIHRvIHNvcnQgcmFua2VkUGxheWVyc1xuICBjb25zdCByYW5rZWRQbGF5ZXJzID0gcGxheWVyUmFua3MucGxheWVyc1dpdGhTb2xvcVJhbmtlZERhdGE7XG4gIC8vIGNvbnN0IHVucmFua2VkUGxheWVycyA9IHBsYXllclJhbmtzLnVucmFua2VkUGxheWVyRGF0YTtcblxuICBpZiAocmFua2VkUGxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgc29ydFJhbmtlZFBsYXllcnMocmFua2VkUGxheWVycyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ05vIHJhbmtlZCBwbGF5ZXJzIGZvdW5kLicpO1xuICB9XG59XG4iLCIvLyBqdXN0IGxvZyB0byBjb25zb2xlIGZvciBub3cuIGxhdGVyIGFkZCBpbiBVSVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUxhZGRlcihyYW5rZWRQbGF5ZXJzKSB7XG4gIGxldCBpID0gMTtcbiAgcmFua2VkUGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGAke2l9LiBgLFxuICAgICAgYCR7cGxheWVyLnN1bW1vbmVyTmFtZX0gfGAsXG4gICAgICBwbGF5ZXIudGllcixcbiAgICAgIHBsYXllci5yYW5rLFxuICAgICAgYCR7cGxheWVyLmxwfUxQYCxcbiAgICAgIGAtIGF0ICR7cGxheWVyLndpbnJhdGV9JSB3cmAsXG4gICAgICBgKCR7cGxheWVyLndpbnMgKyBwbGF5ZXIubG9zc2VzfSBnYW1lcylgXG4gICAgKTtcbiAgICBpICs9IDE7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgZ2V0UmFua2VkSW5mb0J5U3VtbW9uZXJJZCB9IGZyb20gJy4vZmV0Y2gnO1xuaW1wb3J0IGdldFN1bW1vbmVySWRCeVN1bW1vbmVyTmFtZSBmcm9tICcuL3N1bW1vbmVySWQnO1xuXG4vLyBsb2dnaW5nIHRoZSBzdW1tb25lciByYW5rXG5hc3luYyBmdW5jdGlvbiBmaWx0ZXJTb2xvcVJhbmtCeVN1bW1vbmVyTmFtZShzdW1tb25lck5hbWUpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb25zdCBzdW1tb25lciA9IGF3YWl0IGdldEluZm9CeVN1bW1vbmVyTmFtZShzdW1tb25lck5hbWUpOyAgLy8gc3VtbW9uZXIuaWQgbmVlZHMgdG8gYmUgdXNlZCBhcyBhIHBhcmFtZXRlciBpbiByZXNwb25zZVxuICAgIGNvbnN0IHN1bW1vbmVySWQgPSBnZXRTdW1tb25lcklkQnlTdW1tb25lck5hbWUoc3VtbW9uZXJOYW1lKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFJhbmtlZEluZm9CeVN1bW1vbmVySWQoc3VtbW9uZXJJZCk7XG5cbiAgICAvLyBvbmx5IGdldCBzb2xvcSwgcmVtb3ZlIGZsZXhcbiAgICBjb25zdCBzb2xvcVJhbmtEYXRhID0gcmVzcG9uc2UuZmlsdGVyKFxuICAgICAgKHJhbmtUeXBlKSA9PiByYW5rVHlwZS5xdWV1ZVR5cGUgPT09ICdSQU5LRURfU09MT181eDUnXG4gICAgKTtcbiAgICBjb25zdCBzUkQgPSBzb2xvcVJhbmtEYXRhWzBdO1xuXG4gICAgaWYgKHNSRCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCB3aW5yYXRlVW5yb3VuZGVkID0gKHNSRC53aW5zIC8gKHNSRC53aW5zICsgc1JELmxvc3NlcykpICogMTAwO1xuICAgICAgY29uc3Qgd2lucmF0ZSA9IHdpbnJhdGVVbnJvdW5kZWQudG9GaXhlZCgxKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VtbW9uZXJOYW1lOiBzUkQuc3VtbW9uZXJOYW1lLFxuICAgICAgICB0aWVyOiBzUkQudGllcixcbiAgICAgICAgcmFuazogc1JELnJhbmssXG4gICAgICAgIGxwOiBzUkQubGVhZ3VlUG9pbnRzLFxuICAgICAgICB3aW5zOiBzUkQud2lucyxcbiAgICAgICAgbG9zc2VzOiBzUkQubG9zc2VzLFxuICAgICAgICB3aW5yYXRlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc3VtbW9uZXJOYW1lIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59XG5cbi8vIHRha2VzIGluIGFuIGFycmF5IG9mIHN1bW1vbmVyIG5hbWVzIGFuZCBkaXNwbGF5cyB0aGVpciByYW5rc1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheWVyUmFua3Moc3VtbW9uZXJBcnJheSkge1xuICBjb25zdCBwbGF5ZXJzV2l0aFNvbG9xUmFua2VkRGF0YSA9IFtdO1xuICBjb25zdCB1bnJhbmtlZFBsYXllckRhdGEgPSBbXTtcblxuICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBzdW1tb25lckFycmF5Lm1hcChhc3luYyAoc3VtbW9uZXIpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IGF3YWl0IGZpbHRlclNvbG9xUmFua0J5U3VtbW9uZXJOYW1lKHN1bW1vbmVyKTtcblxuICAgICAgICAvLyBjaGVjayBpZiBzdW1tb25lciBpcyB1bnJhbmtlZFxuICAgICAgICBpZiAocGxheWVyLnRpZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3BsYXllci5zdW1tb25lck5hbWV9OiAke3BsYXllci50aWVyfSAke3BsYXllci5yYW5rfSAoJHtwbGF5ZXIubHB9IExQKSB8ICR7cGxheWVyLndpbnN9VywgJHtwbGF5ZXIubG9zc2VzfUwgPSAke3BsYXllci53aW5yYXRlfSUgV1IgYCk7XG4gICAgICAgICAgcGxheWVyc1dpdGhTb2xvcVJhbmtlZERhdGEucHVzaChwbGF5ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGAke3BsYXllci5zdW1tb25lck5hbWV9IGlzIGN1cnJlbnRseSBVbnJhbmtlZC5gKTtcbiAgICAgICAgICB1bnJhbmtlZFBsYXllckRhdGEucHVzaChwbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBTdW1tb25lcjogJHtzdW1tb25lcn0gfGAsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xuXG4gIHJldHVybiB7IHBsYXllcnNXaXRoU29sb3FSYW5rZWREYXRhLCB1bnJhbmtlZFBsYXllckRhdGEgfTtcbn1cbiIsIi8vIHRoaXMgZmlsZSBpcyBvbmx5IHRoZXJlIHRvIGxpbWl0IHRoZSBudW1iZXIgb2YgYXBpIGNhbGxzIG5lZWRlZCB0byBnZXQgYXJvdW5kIHNvbWUgcmF0ZSBsaW1pdHMuXG4vLyBcInN0b3JpbmdcIiBzdW1tb25lcklkc1xuXG5jb25zdCBkYiA9IHtcbiAgc2lsaGltOiAnMnhwMkVCdmlxN1ViWFNyOUZoSUVZbW0zTTRObDBpbUlzUXExamxPRjdQay1FNTgnLFxuICBsdmFuY2U6ICdEMi1oeFdmWm9DNGxndU1FaDJabWFCUlU1YVc2MHpLeVBwQXRHTXJWU20ycGFMNCcsXG4gIHNjaW50bWFyOiAnLWJxNlpVa0dwM0lrZE1qMExJNy1SQUNBRkt3Skc0Q1B3VG1LeUpFWkZ6M1U1T0knLFxuICBzY2htb25nbzogJ1hvTzJaYXdON2Q1RUdEUm5vQ3Q0bTdJcWsyRXNsSlBWTVBXNFBSeXNEcWYzTU9rJyxcbiAgZGltYW50dXM6ICdYQjdiOWxFMVFsR21GU0NmbXhheUd2WVczR2FQUmh4VjZUYnhFbnVLa2ZWaU5nQScsXG4gIGZlcnRpZzExOiAnOTFQVHBHOUphRkY3OWdqTmRtbHAtdjh0VFJDTVY1TWFaaGpLTzFmTlVBdG14NUknLFxuICBob3JueWNvcHRlcjogJ0p6R1VrU25WN3RQUVpIajRTVHRZRFVGWlJURnlxV2NmMTJkcmRGT0ViaDV1NGp3JyxcbiAgZ2VuZXJhbG11aDogJ3pjdThWZFJ3ZmZWbXhpdEU0NmN5WnFNRS15b21TdnVuSFpCZVpPS0Z3NS1LYjlRJyxcbiAgbTRwbDNnMGQ6ICdDSlE3ajlXX3RkTVlWaktUM2Y0dk9EeFR1NEJtTjZ6MFZBMVZZTVRrQm9sZ2R3dnN3U1A3bVRSU0pBJyxcbiAgZ3VjY2lzY3JpcHRlcjogJ0kya2ZRU09lSHAwa3hQeXk0VjRWcGg2UVF0WGVUSV9wSzNUdzNIZjhWR0tRR2w0JyxcbiAga2VlcDB1dDogJzBKeU10eFFFcDNPZDdkNHd3NlR2S0lOb0ZNR1pHamFUT0lkdTBub0xpQlJmckU4JyxcbiAgYWRtaXJhbGFscGFrYTogJ1RsQlJseEczdHg1bnlfcHhySHNSSzZUakdvbEFPQk1LVEFJUWlGUlU1NXZIRkZZJyxcbiAga3Jva29lZmVuZGk6ICdRVnZ6X3RXZjBhckprLXNpZi1yTEh6Y3phLTdvdTlURTR0Y1pFWmNxZnlVUktQOCcsXG4gIGVzY2FwZXM6ICc4V1Nkd3ktWmtnU3RyaHVPVkItZ29Ga01SUWdJUmdISktnVVd4OVBhY0VQSTFaQScsXG4gIGx1bXBpZHVtcGlkdTogJ1FEdjEzNEVGVWY3Slc2WmZ0Rm1CSG4wZk1wOFhXNmFjTzRhTXIzWTNqMkZFSllVJyxcbiAgY2FydGhvdXI6ICdHM0swajBrQUFnZWRwNjkyTU1Cam1fMEM0ampUclplTlA1djRPdFQ3STIwd0tEcycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTdW1tb25lcklkQnlTdW1tb25lck5hbWUoc3VtbW9uZXJOYW1lKSB7XG4gIHJldHVybiBkYltzdW1tb25lck5hbWUudG9Mb3dlckNhc2UoKV07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzb3J0QWxsUmFua3MgZnJvbSAnLi9sYWRkZXInO1xuXG5zb3J0QWxsUmFua3MoW1xuICAnU2lsaGltJyxcbiAgJ0xWYW5jZScsXG4gICdTY2ludG1hcicsXG4gICdTY2htb25nbycsXG4gICdEaW1hbnR1cycsXG4gICdGZXJ0aWcxMScsXG4gICdIb3JueWNvcHRlcicsXG4gICdHZW5lcmFsTXVoJyxcbiAgJ000cGwzZzBkJyxcbiAgJ0dVQ0NJU0NSSVBURVInLFxuICAnS2VlcDB1dCcsXG4gICdBZG1pcmFsQWxwYWthJyxcbiAgJ0tyb2tvRWZlbmRpJyxcbiAgJ0VzY2FwZXMnLFxuICAnTHVtcGlEdW1waUR1JyxcbiAgJ0NhcnRob3VyJyxcbl0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9