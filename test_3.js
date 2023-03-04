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

/*

I used in my solution the "fs" module to read the csv file and the "csv-parser"
module to parse the csv data. It defines an empty object stats with keys 
for the different stats to track, and then uses the `on('data')` event handler 
to iterate over each row in the csv file. For each row, it extracts the relevant data, 
compares it to the current leader in that stat, and updates `stats` if the new data is higher. 
Finally, it outputs `stats` to the console using the `on('end')` event handler.

*/

const fs = require('fs');
const csv = require('csv-parser');

function goat_awards(csv_file) {
  const stats = {
    most_points: ['', 0],
    most_assists: ['', 0],
    most_rebounds: ['', 0],
    most_blocks: ['', 0]
  };

  fs.createReadStream(csv_file)
    .pipe(csv())
    .on('data', (row) => {
      const name = row['name'];
      const points = parseInt(row['points']);
      const assists = parseInt(row['assists']);
      const rebounds = parseInt(row['rebounds']);
      const blocks = parseInt(row['blocks']);

      if (points > stats.most_points[1]) {
        stats.most_points = [name, points];
      }

      if (assists > stats.most_assists[1]) {
        stats.most_assists = [name, assists];
      }

      if (rebounds > stats.most_rebounds[1]) {
        stats.most_rebounds = [name, rebounds];
      }

      if (blocks > stats.most_blocks[1]) {
        stats.most_blocks = [name, blocks];
      }
    })
    .on('end', () => {
      console.log(stats);
    });
}

goat_awards('stats.csv');