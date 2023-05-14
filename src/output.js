import { getIconIdBySummonerName } from './summonerId';

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

function cardCreator(classToAdd, text = '', cardToAdd = cardContainer) {
  const card = document.createElement('div');
  card.innerHTML = text;
  card.classList.add(classToAdd);
  cardToAdd.appendChild(card);

  return card;
}

function iconCreator(cardToAdd, summonerName) {
  const card = document.createElement('img');
  const iconId = getIconIdBySummonerName(summonerName.replaceAll(' ', ''));
  console.log(iconId);
  // card.src = `https://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/${iconId}.png`;
  card.src = `https://ddragon-webp.lolmath.net/latest/img/profileicon/${iconId}.webp`;
  card.classList.add('icon');
  cardToAdd.appendChild(card);
}

export function displayLadder(rankedPlayers) {
  let ranking = 1;
  rankedPlayers.forEach((player) => {
    const card = cardCreator('card');
    // rankingElementCreator
    cardCreator('ranking', ranking, card);
    // iconElementCreator
    iconCreator(card, player.summonerName);
    // ignElementCreator
    cardCreator('ign', player.summonerName, card);
    // rankElementCreator
    cardCreator('rank', `${player.tier} ${player.rank} ${player.lp}LP`, card);

    consoleOutput(player, ranking);
    ranking += 1;
  });
}

export function displayUnrankedPlayers(unrankedPlayers) {
  let honorableMention = 'Unranked: ';
  unrankedPlayers.forEach((player) => {
    honorableMention += `${player.summonerName}, `;
  });
  honorableMention = `${honorableMention.slice(0, -2)}.`;
  cardCreator('unranked', honorableMention);
}
