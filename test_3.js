/*
A scouting firm has hired you to write a program that analyzes the data of a player.
In this case, they want to analyze potential NBA drafts stats. Some stats to track include:
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

Write a function goat_awards that takes 1 parameter: csv_file
 where csv_file is the name
of the csv file containing data.

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

const goat_awards = (csv_file) => {
  const [header, ...lines] = csv_file.replace(/\r/g, "").split("\n");

  const objHeaders = header.split(",");

  const mergeObjects = (objArr) => Object.assign({}, ...objArr);

  const extractObjPartial = (row, i) => ({ [objHeaders[i]]: row });

  const lineToObject = (line) =>
    mergeObjects(line.split(",").map(extractObjPartial));

  const table = lines.map(lineToObject);

  return table;
};
// read the file as a string
const file = require("fs").readFileSync("./players_stats.csv").toString();

// convert the file to an array of objects
const dataTable = goat_awards(file);
// console.log(1111111, dataTable);

var obj = {
  most_points: [],
  most_assists: [],
  most_reboundss: [],
  most_blocks: [],
};

let highest_score = 0;
let highest_assists = 0;
let highest_reboundss = 0;
let highest_blocks = 0;

let most_points_name = "";
let most_assists_name = "";
let most_blocks_name = "";
let most_reboundss_name = "";

dataTable.map((value) => {
  for (let property in value) {
    // console.log(`${property}: ${value[property]}`);
    let intscore = Number(value[property]);
    let intassist = Number(value[property]);
    let intreboundss = Number(value[property]);
    let intblocks = Number(value[property]);
    //   console.log(intscore);
    if (property === "points") {
      // console.log(value[property]);
      if (value[property] > highest_score) {
        highest_score = intscore;
        most_points_name = value.name;
      }
    } else if (property === "assists") {
      // console.log(value[property]);
      if (value[property] > highest_assists) {
        highest_assists = intassist;
        most_assists_name = value.name;
      }
    } else if (property === "rebounds") {
      // console.log(value[property]);
      if (value[property] > highest_reboundss) {
        highest_reboundss = intreboundss;
        most_reboundss_name = value.name;
      }
    } else if (property === "blocks") {
      // console.log(value[property]);
      if (value[property] > highest_blocks) {
        highest_blocks = intblocks;
        most_blocks_name = value.name;
      }
    }
  }
});

obj["most_points"].push(most_points_name, highest_score);
obj["most_assists"].push(most_assists_name, highest_assists);
obj["most_reboundss"].push(most_reboundss_name, highest_reboundss);
obj["most_blocks"].push(most_blocks_name, highest_blocks);

console.log(obj);

// highest_score = 0
// stdname = ''

// // console.log(dataTable[0].points);
// max_value = dataTable[0].points;
// console.log(1111111, max_value);
// dataTable.forEach(element => {
//     // console.log(element.points);
//     let intscore = Number(element['points'])
//     // console.log(intscore);
//     // if (intscore > highest_score ) {
//     //     highest_score = intscore
//     // }

//     if (obj[element.points] > obj[max_value]) {
//         max_value = element.points
//     }
// });

// obj['most_points'].push(highest_score)

// console.log(max_value);

//   Finds out who scored the most points of all the players

// const mostPoint = dataTable.map( i => {
//     // console.log(i.points);
//     let point = i.points
//     // console.log(point);

//     // Math.max(point)
// })
// var obj = {}

// let maxGame = dataTable.reduce((max, game) => max.points > game.points ? max : game);
// console.log('====================================');
// console.log(1111111, maxGame);
// console.log('====================================');
