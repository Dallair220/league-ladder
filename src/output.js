const cardContainer = document.querySelector('.cardcontainer');

function consoleOutput(player, ranking) {
  console.log(
    `${ranking}. `,
    `${player.summonerName} |`,
    player.tier,
    player.rank,
    `${player.lp}LP`,
    `- at ${player.winrate}% wr`,
    `(${player.wins + player.losses} games)`
  );
}

// function

function cardCreator(player) {
  const card = document.createElement('div');
  card.innerHTML = player.summonerName;
  console.log(cardContainer);
  cardContainer.appendChild(card);

  return card;
}

export function displayLadder(rankedPlayers) {
  let ranking = 1;
  rankedPlayers.forEach((player) => {
    const card = cardCreator(player);

    consoleOutput(player, ranking);
    ranking += 1;
  });
}

export function displayUnrankedPlayers(unrankedPlayers) {
  unrankedPlayers.forEach((player) => {
    cardCreator(player);
  });
}

// .card {
//   display: grid;
//   grid-template-areas:
//     'ranking icon ign ign'
//     'ranking icon rank games'
//     'ranking icon rank winrate';
//   grid-template-columns: 1fr 2fr 2fr 1fr;
//   grid-template-rows: 2fr 1fr 1fr;
// }
// .ranking {
//   grid-area: ranking;
//   justify-self: center;
// }
// .icon {
//   grid-area: icon;
//   justify-self: center;
// }
// .ign {
//   grid-area: ign;
//   justify-self: center;
// }
// .rank {
//   grid-area: rank;
//   justify-self: center;
// }
// .games {
//   grid-area: games;
//   justify-self: center;
// }
// .winrate {
//   grid-area: winrate;
//   justify-self: center;
// }
