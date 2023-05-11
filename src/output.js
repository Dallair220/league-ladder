// just log to console for now. later add in UI
export default function displayLadder(rankedPlayers) {
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
