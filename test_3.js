/*
A scouting firm has hired you to write a program that analyzes the data of a player. In this case, they want to analyze potential NBA drafts stats. Some stats to track include:
Player Name: The name of the player.
Game: The date of the game for which the statistics are being recorded.
Points: The number of points scored by the player in that game.
Rebounds: The number of rebounds the player had in that game.
Assists: The number of assists the player had in that game.
Three-Pointers Made: The number of three-pointers made by the player in that game.
Steals: The number of steals the player had in that game.
Blocks: The number of blocks the player had in that game.

These stats are currently saved in a csv file as shown below:

name,game,points,rebounds,assists,3 pointers,steals,blocks
John Smith,1,35,9,4,1,2
Emily Johnson,1,28,10,5,4,0
Michael Brown,1,42,11,8,3,1
Jesse Davis,1,31,9,10,2,3
John Smith,2,25,9,4,1,1
Emily Johnson,2,30,10,5,4,3
Michael Brown,2,34,11,8,3,2
Jesse Davis,2,29,9,10,2,0

Write a function goat_awards that takes 1 parameter: csv_file where csv_file is the name of the csv file containing data.
The function primarily reads the csv file and:
	Finds out who scored the most points of all the players
	Finds out who recorded the most assists of all the players
	Finds out who recorded the most rebounds of all the players:
	Finds out who recorded the most blocks of all the players:
It should return a dictionary like this:
{
	most_points: ['Lex Lu',356],
	most_assists: ['Lex Lu',356],
	most_reboundss: ['Lex Lu',356],
	most_blocks: ['Lex Lu',356]
}

*/

const fs = require("fs");

function goat_awards(csv_file) {
  const data = fs.readFileSync(csv_file, "utf-8");
  const lines = data.split("\n").filter((line) => line.trim() !== "");

  const players = {};
  lines.forEach((line) => {
    const [name, game, points, rebounds, assists, threes, steals, blocks] =
      line.split(",");
    if (!players[name]) {
      players[name] = {
        points: 0,
        rebounds: 0,
        assists: 0,
        threes: 0,
        steals: 0,
        blocks: 0,
      };
    }
    players[name].points += parseInt(points);
    players[name].rebounds += parseInt(rebounds);
    players[name].assists += parseInt(assists);
    players[name].threes += parseInt(threes);
    players[name].steals += parseInt(steals);
    players[name].blocks += parseInt(blocks);
  });

  const mostPoints = Object.keys(players).reduce((a, b) =>
    players[a].points > players[b].points ? a : b
  );
  const mostAssists = Object.keys(players).reduce((a, b) =>
    players[a].assists > players[b].assists ? a : b
  );
  const mostRebounds = Object.keys(players).reduce((a, b) =>
    players[a].rebounds > players[b].rebounds ? a : b
  );
  const mostBlocks = Object.keys(players).reduce((a, b) =>
    players[a].blocks > players[b].blocks ? a : b
  );

  return {
    most_points: [mostPoints, players[mostPoints].points],
    most_assists: [mostAssists, players[mostAssists].assists],
    most_rebounds: [mostRebounds, players[mostRebounds].rebounds],
    most_blocks: [mostBlocks, players[mostBlocks].blocks],
  };
}

const result = goat_awards("players_stats.csv");
console.log(result);
