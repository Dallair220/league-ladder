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
  return 'RGAPI-2f7d9a60-152e-4400-a174-8fa5141cf320';
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
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading */ "./src/loading.js");
/* harmony import */ var _output__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./output */ "./src/output.js");
/* harmony import */ var _rank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rank */ "./src/rank.js");




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
  (0,_output__WEBPACK_IMPORTED_MODULE_1__["default"])(rankedPlayers);

  (0,_loading__WEBPACK_IMPORTED_MODULE_0__["default"])(false);
}

async function sortAllRanks(playerArray) {
  (0,_loading__WEBPACK_IMPORTED_MODULE_0__["default"])(true);

  const playerRanks = await (0,_rank__WEBPACK_IMPORTED_MODULE_2__["default"])(playerArray);
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

/***/ "./src/loading.js":
/*!************************!*\
  !*** ./src/loading.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayLoadingAnimation)
/* harmony export */ });
function displayLoadingAnimation(state) {
  const loader = document.querySelector('.loading');

  if (state) {
    loader.classList.add('loader');
  } else {
    loader.classList.remove('loader');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDOztBQUVsQztBQUNBLHFCQUFxQixnREFBYTs7QUFFbEM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLDBFQUEwRSxhQUFhLFdBQVcsYUFBYTtBQUMvRztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osa0NBQWtDLGNBQWM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSwwRUFBMEUsV0FBVyxXQUFXLGFBQWE7QUFDN0c7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsNERBQTRELFdBQVc7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25DZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZnRDtBQUNYO0FBQ0Q7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLG1EQUFhOztBQUVmLEVBQUUsb0RBQXVCO0FBQ3pCOztBQUVlO0FBQ2YsRUFBRSxvREFBdUI7O0FBRXpCLDRCQUE0QixpREFBYztBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVEZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFQUFFO0FBQ1gsU0FBUyxxQkFBcUI7QUFDOUI7QUFDQTtBQUNBLFNBQVMsVUFBVTtBQUNuQixjQUFjLGVBQWU7QUFDN0IsVUFBVSw2QkFBNkI7QUFDdkM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmb0Q7QUFDRzs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFLHVCQUF1Qix1REFBMkI7QUFDbEQsMkJBQTJCLGlFQUF5Qjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ2U7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CLElBQUksYUFBYSxFQUFFLGFBQWEsR0FBRyxXQUFXLFFBQVEsWUFBWSxLQUFLLGNBQWMsTUFBTSxlQUFlO0FBQzFKO0FBQ0EsVUFBVTtBQUNWLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBLFFBQVE7QUFDUixtQ0FBbUMsVUFBVTtBQUM3QztBQUNBLEtBQUs7QUFDTDs7QUFFQSxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7OztBQzlEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7Ozs7Ozs7VUN4QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQzs7QUFFcEMsbURBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9mZXRjaC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vc3JjL2tleS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vc3JjL2xhZGRlci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vc3JjL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9vdXRwdXQuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9yYW5rLmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9zcmMvc3VtbW9uZXJJZC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0UmlvdEFQSUtleSBmcm9tICcuL2tleSc7XG5cbi8vIGRldmVsb3BtZW50IGtleXMgZXhwaXJlIHdpdGhpbiAyNCBob3Vycy5cbmNvbnN0IERFVl9SSU9UX0tFWSA9IGdldFJpb3RBUElLZXkoKTtcblxuLy8gZ2V0IGdlbmVyYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHN1bW1vbmVyIChwcm9maWxlSWNvbklkLCBQVVVJRCwgc3VtbW9uZXJJZCwgbGV2ZWwpXG4vLyBodHRwczovL2RldmVsb3Blci5yaW90Z2FtZXMuY29tL2FwaXMjc3VtbW9uZXItdjQvR0VUX2dldEJ5U3VtbW9uZXJOYW1lXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW5mb0J5U3VtbW9uZXJOYW1lKHN1bW1vbmVyTmFtZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9ldXcxLmFwaS5yaW90Z2FtZXMuY29tL2xvbC9zdW1tb25lci92NC9zdW1tb25lcnMvYnktbmFtZS8ke3N1bW1vbmVyTmFtZX0/YXBpX2tleT0ke0RFVl9SSU9UX0tFWX1gXG4gICAgKTtcbiAgICBjb25zdCBnZW5lcmFsU3VtbW9uZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBnZW5lcmFsU3VtbW9uZXJEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGBDb3VsZCBub3QgZmluZCAke3N1bW1vbmVyTmFtZX0gYnkgc3VtbW9uZXIgbmFtZS5gKTtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cblxuLy8gdXNlIHN1bW1vbmVySWQgdG8gZ2V0IHJhbmtlZCBkYXRhIGFib3V0IHRoZSBnaXZlbiBzdW1tb25lclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIucmlvdGdhbWVzLmNvbS9hcGlzI2xlYWd1ZS12NC9HRVRfZ2V0TGVhZ3VlRW50cmllc0ZvclN1bW1vbmVyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmFua2VkSW5mb0J5U3VtbW9uZXJJZChzdW1tb25lcklkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2V1dzEuYXBpLnJpb3RnYW1lcy5jb20vbG9sL2xlYWd1ZS92NC9lbnRyaWVzL2J5LXN1bW1vbmVyLyR7c3VtbW9uZXJJZH0/YXBpX2tleT0ke0RFVl9SSU9UX0tFWX1gXG4gICAgKTtcbiAgICBjb25zdCBzdW1tb25lclJhbmtlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHN1bW1vbmVyUmFua2VkRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBDb3VsZCBub3QgZmluZCBzdW1tb25lciByYW5rZWQgZGF0YSBieSBzdW1tb25lcklkOiAke3N1bW1vbmVySWR9YFxuICAgICk7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSaW90QVBJS2V5KCkge1xuICByZXR1cm4gJ1JHQVBJLTJmN2Q5YTYwLTE1MmUtNDQwMC1hMTc0LThmYTUxNDFjZjMyMCc7XG59XG4iLCJpbXBvcnQgZGlzcGxheUxvYWRpbmdBbmltYXRpb24gZnJvbSAnLi9sb2FkaW5nJztcbmltcG9ydCBkaXNwbGF5TGFkZGVyIGZyb20gJy4vb3V0cHV0JztcbmltcG9ydCBnZXRQbGF5ZXJSYW5rcyBmcm9tICcuL3JhbmsnO1xuXG5jb25zdCBUSUVSX1ZBTFVFID0ge1xuICBJUk9OOiAxLFxuICBCUk9OWkU6IDIsXG4gIFNJTFZFUjogMyxcbiAgR09MRDogNCxcbiAgUExBVElOVU06IDUsXG4gIERJQU1PTkQ6IDYsXG4gIE1BU1RFUjogNyxcbiAgR1JBTkRNQVNURVI6IDgsXG4gIENIQUxMRU5HRVI6IDksXG59O1xuY29uc3QgUkFOS19WQUxVRSA9IHtcbiAgSVY6IDEsXG4gIElJSTogMixcbiAgSUk6IDMsXG4gIEk6IDQsXG59O1xuXG4vLyBzb3J0aW5nIHRoZSBwbGF5ZXJzIGJ5IHNvbG9xIHJhbmtcbmZ1bmN0aW9uIHNvcnRSYW5rZWRQbGF5ZXJzKHJhbmtlZFBsYXllcnMpIHtcbiAgY29uc29sZS5sb2coJ3JhbmtlZCBsaXN0OiAnLCByYW5rZWRQbGF5ZXJzKTtcblxuICByYW5rZWRQbGF5ZXJzLnNvcnQoKHBsYXllckEsIHBsYXllckIpID0+IHtcbiAgICAvLyBjb21wYXJlIHRpZXIgcmFuayBmaXJzdFxuICAgIGlmIChUSUVSX1ZBTFVFW3BsYXllckEudGllcl0gPiBUSUVSX1ZBTFVFW3BsYXllckIudGllcl0pIHJldHVybiAtMTtcbiAgICBpZiAoVElFUl9WQUxVRVtwbGF5ZXJBLnRpZXJdIDwgVElFUl9WQUxVRVtwbGF5ZXJCLnRpZXJdKSByZXR1cm4gMTtcblxuICAgIC8vIGlmIHRpZXIgaXMgdGhlIHNhbWUsIGNoZWNrIGZvciBkaXZpc2lvblxuICAgIGlmIChSQU5LX1ZBTFVFW3BsYXllckEucmFua10gPiBSQU5LX1ZBTFVFW3BsYXllckIucmFua10pIHJldHVybiAtMTtcbiAgICBpZiAoUkFOS19WQUxVRVtwbGF5ZXJBLnJhbmtdIDwgUkFOS19WQUxVRVtwbGF5ZXJCLnJhbmtdKSByZXR1cm4gMTtcblxuICAgIC8vIGlmIGRpdmlzaW9uIGlzIHRoZSBzYW1lLCBjaGVjayBmb3IgTFBcbiAgICBpZiAocGxheWVyQS5scCA+IHBsYXllckIubHApIHJldHVybiAtMTtcbiAgICBpZiAocGxheWVyQS5scCA8IHBsYXllckIubHApIHJldHVybiAxO1xuXG4gICAgLy8gaWYgTFAgaXMgdGhlIHNhbWUgYXMgd2VsbCwgZG9uJ3QgY2hhbmdlIHNvcnRpbmcgb3JkZXJcbiAgICByZXR1cm4gMDtcbiAgfSk7XG4gIGRpc3BsYXlMYWRkZXIocmFua2VkUGxheWVycyk7XG5cbiAgZGlzcGxheUxvYWRpbmdBbmltYXRpb24oZmFsc2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzb3J0QWxsUmFua3MocGxheWVyQXJyYXkpIHtcbiAgZGlzcGxheUxvYWRpbmdBbmltYXRpb24odHJ1ZSk7XG5cbiAgY29uc3QgcGxheWVyUmFua3MgPSBhd2FpdCBnZXRQbGF5ZXJSYW5rcyhwbGF5ZXJBcnJheSk7XG4gIC8vIG5vdyB3ZSBuZWVkIHRvIHNvcnQgcmFua2VkUGxheWVyc1xuICBjb25zdCByYW5rZWRQbGF5ZXJzID0gcGxheWVyUmFua3MucGxheWVyc1dpdGhTb2xvcVJhbmtlZERhdGE7XG4gIC8vIGNvbnN0IHVucmFua2VkUGxheWVycyA9IHBsYXllclJhbmtzLnVucmFua2VkUGxheWVyRGF0YTtcblxuICBpZiAocmFua2VkUGxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgc29ydFJhbmtlZFBsYXllcnMocmFua2VkUGxheWVycyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ05vIHJhbmtlZCBwbGF5ZXJzIGZvdW5kLicpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TG9hZGluZ0FuaW1hdGlvbihzdGF0ZSkge1xuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpO1xuXG4gIGlmIChzdGF0ZSkge1xuICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKCdsb2FkZXInKTtcbiAgfSBlbHNlIHtcbiAgICBsb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVyJyk7XG4gIH1cbn1cbiIsIi8vIGp1c3QgbG9nIHRvIGNvbnNvbGUgZm9yIG5vdy4gbGF0ZXIgYWRkIGluIFVJXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TGFkZGVyKHJhbmtlZFBsYXllcnMpIHtcbiAgbGV0IGkgPSAxO1xuICByYW5rZWRQbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYCR7aX0uIGAsXG4gICAgICBgJHtwbGF5ZXIuc3VtbW9uZXJOYW1lfSB8YCxcbiAgICAgIHBsYXllci50aWVyLFxuICAgICAgcGxheWVyLnJhbmssXG4gICAgICBgJHtwbGF5ZXIubHB9TFBgLFxuICAgICAgYC0gYXQgJHtwbGF5ZXIud2lucmF0ZX0lIHdyYCxcbiAgICAgIGAoJHtwbGF5ZXIud2lucyArIHBsYXllci5sb3NzZXN9IGdhbWVzKWBcbiAgICApO1xuICAgIGkgKz0gMTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBnZXRSYW5rZWRJbmZvQnlTdW1tb25lcklkIH0gZnJvbSAnLi9mZXRjaCc7XG5pbXBvcnQgZ2V0U3VtbW9uZXJJZEJ5U3VtbW9uZXJOYW1lIGZyb20gJy4vc3VtbW9uZXJJZCc7XG5cbi8vIGxvZ2dpbmcgdGhlIHN1bW1vbmVyIHJhbmtcbmFzeW5jIGZ1bmN0aW9uIGZpbHRlclNvbG9xUmFua0J5U3VtbW9uZXJOYW1lKHN1bW1vbmVyTmFtZSkge1xuICB0cnkge1xuICAgIC8vIGNvbnN0IHN1bW1vbmVyID0gYXdhaXQgZ2V0SW5mb0J5U3VtbW9uZXJOYW1lKHN1bW1vbmVyTmFtZSk7ICAvLyBzdW1tb25lci5pZCBuZWVkcyB0byBiZSB1c2VkIGFzIGEgcGFyYW1ldGVyIGluIHJlc3BvbnNlXG4gICAgY29uc3Qgc3VtbW9uZXJJZCA9IGdldFN1bW1vbmVySWRCeVN1bW1vbmVyTmFtZShzdW1tb25lck5hbWUpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmFua2VkSW5mb0J5U3VtbW9uZXJJZChzdW1tb25lcklkKTtcblxuICAgIC8vIG9ubHkgZ2V0IHNvbG9xLCByZW1vdmUgZmxleFxuICAgIGNvbnN0IHNvbG9xUmFua0RhdGEgPSByZXNwb25zZS5maWx0ZXIoXG4gICAgICAocmFua1R5cGUpID0+IHJhbmtUeXBlLnF1ZXVlVHlwZSA9PT0gJ1JBTktFRF9TT0xPXzV4NSdcbiAgICApO1xuICAgIGNvbnN0IHNSRCA9IHNvbG9xUmFua0RhdGFbMF07XG5cbiAgICBpZiAoc1JEICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHdpbnJhdGVVbnJvdW5kZWQgPSAoc1JELndpbnMgLyAoc1JELndpbnMgKyBzUkQubG9zc2VzKSkgKiAxMDA7XG4gICAgICBjb25zdCB3aW5yYXRlID0gd2lucmF0ZVVucm91bmRlZC50b0ZpeGVkKDEpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdW1tb25lck5hbWU6IHNSRC5zdW1tb25lck5hbWUsXG4gICAgICAgIHRpZXI6IHNSRC50aWVyLFxuICAgICAgICByYW5rOiBzUkQucmFuayxcbiAgICAgICAgbHA6IHNSRC5sZWFndWVQb2ludHMsXG4gICAgICAgIHdpbnM6IHNSRC53aW5zLFxuICAgICAgICBsb3NzZXM6IHNSRC5sb3NzZXMsXG4gICAgICAgIHdpbnJhdGUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyBzdW1tb25lck5hbWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cblxuLy8gdGFrZXMgaW4gYW4gYXJyYXkgb2Ygc3VtbW9uZXIgbmFtZXMgYW5kIGRpc3BsYXlzIHRoZWlyIHJhbmtzXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRQbGF5ZXJSYW5rcyhzdW1tb25lckFycmF5KSB7XG4gIGNvbnN0IHBsYXllcnNXaXRoU29sb3FSYW5rZWREYXRhID0gW107XG4gIGNvbnN0IHVucmFua2VkUGxheWVyRGF0YSA9IFtdO1xuXG4gIGF3YWl0IFByb21pc2UuYWxsKFxuICAgIHN1bW1vbmVyQXJyYXkubWFwKGFzeW5jIChzdW1tb25lcikgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGxheWVyID0gYXdhaXQgZmlsdGVyU29sb3FSYW5rQnlTdW1tb25lck5hbWUoc3VtbW9uZXIpO1xuXG4gICAgICAgIC8vIGNoZWNrIGlmIHN1bW1vbmVyIGlzIHVucmFua2VkXG4gICAgICAgIGlmIChwbGF5ZXIudGllciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYCR7cGxheWVyLnN1bW1vbmVyTmFtZX06ICR7cGxheWVyLnRpZXJ9ICR7cGxheWVyLnJhbmt9ICgke3BsYXllci5scH0gTFApIHwgJHtwbGF5ZXIud2luc31XLCAke3BsYXllci5sb3NzZXN9TCA9ICR7cGxheWVyLndpbnJhdGV9JSBXUiBgKTtcbiAgICAgICAgICBwbGF5ZXJzV2l0aFNvbG9xUmFua2VkRGF0YS5wdXNoKHBsYXllcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYCR7cGxheWVyLnN1bW1vbmVyTmFtZX0gaXMgY3VycmVudGx5IFVucmFua2VkLmApO1xuICAgICAgICAgIHVucmFua2VkUGxheWVyRGF0YS5wdXNoKHBsYXllcik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFN1bW1vbmVyOiAke3N1bW1vbmVyfSB8YCwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0pXG4gICk7XG5cbiAgcmV0dXJuIHsgcGxheWVyc1dpdGhTb2xvcVJhbmtlZERhdGEsIHVucmFua2VkUGxheWVyRGF0YSB9O1xufVxuIiwiLy8gdGhpcyBmaWxlIGlzIG9ubHkgdGhlcmUgdG8gbGltaXQgdGhlIG51bWJlciBvZiBhcGkgY2FsbHMgbmVlZGVkIHRvIGdldCBhcm91bmQgc29tZSByYXRlIGxpbWl0cy5cbi8vIFwic3RvcmluZ1wiIHN1bW1vbmVySWRzXG5cbmNvbnN0IGRiID0ge1xuICBzaWxoaW06ICcyeHAyRUJ2aXE3VWJYU3I5RmhJRVltbTNNNE5sMGltSXNRcTFqbE9GN1BrLUU1OCcsXG4gIGx2YW5jZTogJ0QyLWh4V2Zab0M0bGd1TUVoMlptYUJSVTVhVzYwekt5UHBBdEdNclZTbTJwYUw0JyxcbiAgc2NpbnRtYXI6ICctYnE2WlVrR3AzSWtkTWowTEk3LVJBQ0FGS3dKRzRDUHdUbUt5SkVaRnozVTVPSScsXG4gIHNjaG1vbmdvOiAnWG9PMlphd043ZDVFR0RSbm9DdDRtN0lxazJFc2xKUFZNUFc0UFJ5c0RxZjNNT2snLFxuICBkaW1hbnR1czogJ1hCN2I5bEUxUWxHbUZTQ2ZteGF5R3ZZVzNHYVBSaHhWNlRieEVudUtrZlZpTmdBJyxcbiAgZmVydGlnMTE6ICc5MVBUcEc5SmFGRjc5Z2pOZG1scC12OHRUUkNNVjVNYVpoaktPMWZOVUF0bXg1SScsXG4gIGhvcm55Y29wdGVyOiAnSnpHVWtTblY3dFBRWkhqNFNUdFlEVUZaUlRGeXFXY2YxMmRyZEZPRWJoNXU0ancnLFxuICBnZW5lcmFsbXVoOiAnemN1OFZkUndmZlZteGl0RTQ2Y3lacU1FLXlvbVN2dW5IWkJlWk9LRnc1LUtiOVEnLFxuICBtNHBsM2cwZDogJ0NKUTdqOVdfdGRNWVZqS1QzZjR2T0R4VHU0Qm1ONnowVkExVllNVGtCb2xnZHd2c3dTUDdtVFJTSkEnLFxuICBndWNjaXNjcmlwdGVyOiAnSTJrZlFTT2VIcDBreFB5eTRWNFZwaDZRUXRYZVRJX3BLM1R3M0hmOFZHS1FHbDQnLFxuICBrZWVwMHV0OiAnMEp5TXR4UUVwM09kN2Q0d3c2VHZLSU5vRk1HWkdqYVRPSWR1MG5vTGlCUmZyRTgnLFxuICBhZG1pcmFsYWxwYWthOiAnVGxCUmx4RzN0eDVueV9weHJIc1JLNlRqR29sQU9CTUtUQUlRaUZSVTU1dkhGRlknLFxuICBrcm9rb2VmZW5kaTogJ1FWdnpfdFdmMGFySmstc2lmLXJMSHpjemEtN291OVRFNHRjWkVaY3FmeVVSS1A4JyxcbiAgZXNjYXBlczogJzhXU2R3eS1aa2dTdHJodU9WQi1nb0ZrTVJRZ0lSZ0hKS2dVV3g5UGFjRVBJMVpBJyxcbiAgbHVtcGlkdW1waWR1OiAnUUR2MTM0RUZVZjdKVzZaZnRGbUJIbjBmTXA4WFc2YWNPNGFNcjNZM2oyRkVKWVUnLFxuICBjYXJ0aG91cjogJ0czSzBqMGtBQWdlZHA2OTJNTUJqbV8wQzRqalRyWmVOUDV2NE90VDdJMjB3S0RzJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFN1bW1vbmVySWRCeVN1bW1vbmVyTmFtZShzdW1tb25lck5hbWUpIHtcbiAgcmV0dXJuIGRiW3N1bW1vbmVyTmFtZS50b0xvd2VyQ2FzZSgpXTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHNvcnRBbGxSYW5rcyBmcm9tICcuL2xhZGRlcic7XG5cbnNvcnRBbGxSYW5rcyhbXG4gICdTaWxoaW0nLFxuICAnTFZhbmNlJyxcbiAgJ1NjaW50bWFyJyxcbiAgJ1NjaG1vbmdvJyxcbiAgJ0RpbWFudHVzJyxcbiAgJ0ZlcnRpZzExJyxcbiAgJ0hvcm55Y29wdGVyJyxcbiAgJ0dlbmVyYWxNdWgnLFxuICAnTTRwbDNnMGQnLFxuICAnR1VDQ0lTQ1JJUFRFUicsXG4gICdLZWVwMHV0JyxcbiAgJ0FkbWlyYWxBbHBha2EnLFxuICAnS3Jva29FZmVuZGknLFxuICAnRXNjYXBlcycsXG4gICdMdW1waUR1bXBpRHUnLFxuICAnQ2FydGhvdXInLFxuXSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=