/*
write a function or set of functions that 
finds the word entered by a user in a word search. 
Your function paramaters are as follows:
INPUT: an 18 x 18 matrix representing the puzzle i.e a list containing 18 lists which contain 18 characters each.
OUTPUT: If it finds the word, it should return the position of the word. If it doesnt find the word, it should simply return a message saying word was not found
Note: The words are basketball terms and positions eg SMALLFORWARD, POWERFORWARD, GUARD etc


#WRITE YOUR SOLUTION IN HERE


const puzzle = [
    ['P','G','T','H','S','S','M','A','L','L','F','O','R','W','A','R','D','J'],
    ['U','N','T','T','O','N','H','E','I','R','N','B','T','M','V','E','E','W'],
    ['Y','I','D','R','H','O','O','N','G','C','E','U','E','T','I','R','S','O'],
    ['A','S','R','O','U','R','P','I','O','N','O','B','S','N','S','R','L','R'],
    ['L','S','A','U','P','O','E','A','T','E','I','C','O','E','C','O','A','H'],
    ['R','A','U','T','O','R','C','E','M','U','O','L','Y','U','O','H','M','T'],
    ['E','P','G','O','I','H','O','I','P','R','T','F','B','G','N','D','D','E'],
    ['Y','B','G','F','N','R','T','V','E','O','A','I','N','B','R','D','U','E'],
    ['A','T','N','B','T','S','E','B','E','S','I','I','T','A','I','M','N','R'],
    ['L','S','I','O','S','K','O','T','N','R','L','N','W','S','A','R','K','F'],
    ['P','I','T','U','E','A','T','E','R','E','T','R','T','E','B','B','D','S'],
    ['B','S','O','N','R','A','A','T','V','A','O','I','T','E','L','U','H','L'],
    ['L','S','O','D','W','K','E','A','A','F','U','S','M','J','R','O','S','A'],
    ['O','A','H','S','E','K','R','F','R','M','E','Q','R','E','T','N','E','C'],
    ['C','L','S','R','S','T','O','E','B','A','C','K','B','O','A','R','D','S'],
    ['K','L','S','A','N','U','W','G','A','M','E','M','I','T','F','L','A','H'],
    ['A','A','B','C','L','O','C','K','I','R','E','F','E','R','E','E','S','M'],
    ['I','B','T','H','P','T','E','N','D','R','A','U','G','T','N','I','O','P'],
]

const tableLength = 18
const tableHeight = 18				

function findWord(word):

    return

*/

// ---------------- ANSWERS------------------------------//
const puzzle = [
  [
    "P",
    "G",
    "T",
    "H",
    "S",
    "S",
    "M",
    "A",
    "L",
    "L",
    "F",
    "O",
    "R",
    "W",
    "A",
    "R",
    "D",
    "J",
  ],
  [
    "U",
    "N",
    "T",
    "T",
    "O",
    "N",
    "H",
    "E",
    "I",
    "R",
    "N",
    "B",
    "T",
    "M",
    "V",
    "E",
    "E",
    "W",
  ],
  [
    "Y",
    "I",
    "D",
    "R",
    "H",
    "O",
    "O",
    "N",
    "G",
    "C",
    "E",
    "U",
    "E",
    "T",
    "I",
    "R",
    "S",
    "O",
  ],
  [
    "A",
    "S",
    "R",
    "O",
    "U",
    "R",
    "P",
    "I",
    "O",
    "N",
    "O",
    "B",
    "S",
    "N",
    "S",
    "R",
    "L",
    "R",
  ],
  [
    "L",
    "S",
    "A",
    "U",
    "P",
    "O",
    "E",
    "A",
    "T",
    "E",
    "I",
    "C",
    "O",
    "E",
    "C",
    "O",
    "A",
    "H",
  ],
  [
    "R",
    "A",
    "U",
    "T",
    "O",
    "R",
    "C",
    "E",
    "M",
    "U",
    "O",
    "L",
    "Y",
    "U",
    "O",
    "H",
    "M",
    "T",
  ],
  [
    "E",
    "P",
    "G",
    "O",
    "I",
    "H",
    "O",
    "I",
    "P",
    "R",
    "T",
    "F",
    "B",
    "G",
    "N",
    "D",
    "D",
    "E",
  ],
  [
    "Y",
    "B",
    "G",
    "F",
    "N",
    "R",
    "T",
    "V",
    "E",
    "O",
    "A",
    "I",
    "N",
    "B",
    "R",
    "D",
    "U",
    "E",
  ],
  [
    "A",
    "T",
    "N",
    "B",
    "T",
    "S",
    "E",
    "B",
    "E",
    "S",
    "I",
    "I",
    "T",
    "A",
    "I",
    "M",
    "N",
    "R",
  ],
  [
    "L",
    "S",
    "I",
    "O",
    "S",
    "K",
    "O",
    "T",
    "N",
    "R",
    "L",
    "N",
    "W",
    "S",
    "A",
    "R",
    "K",
    "F",
  ],
  [
    "P",
    "I",
    "T",
    "U",
    "E",
    "A",
    "T",
    "E",
    "R",
    "E",
    "T",
    "R",
    "T",
    "E",
    "B",
    "B",
    "D",
    "S",
  ],
  [
    "B",
    "S",
    "O",
    "N",
    "R",
    "A",
    "A",
    "T",
    "V",
    "A",
    "O",
    "I",
    "T",
    "E",
    "L",
    "U",
    "H",
    "L",
  ],
  [
    "L",
    "S",
    "O",
    "D",
    "W",
    "K",
    "E",
    "A",
    "A",
    "F",
    "U",
    "S",
    "M",
    "J",
    "R",
    "O",
    "S",
    "A",
  ],
  [
    "O",
    "A",
    "H",
    "S",
    "E",
    "K",
    "R",
    "F",
    "R",
    "M",
    "E",
    "Q",
    "R",
    "E",
    "T",
    "N",
    "E",
    "C",
  ],
  [
    "C",
    "L",
    "S",
    "R",
    "S",
    "T",
    "O",
    "E",
    "B",
    "A",
    "C",
    "K",
    "B",
    "O",
    "A",
    "R",
    "D",
    "S",
  ],
  [
    "K",
    "L",
    "S",
    "A",
    "N",
    "U",
    "W",
    "G",
    "A",
    "M",
    "E",
    "M",
    "I",
    "T",
    "F",
    "L",
    "A",
    "H",
  ],
  [
    "A",
    "A",
    "B",
    "C",
    "L",
    "O",
    "C",
    "K",
    "I",
    "R",
    "E",
    "F",
    "E",
    "R",
    "E",
    "E",
    "S",
    "M",
  ],
  [
    "I",
    "B",
    "T",
    "H",
    "P",
    "T",
    "E",
    "N",
    "D",
    "R",
    "A",
    "U",
    "G",
    "T",
    "N",
    "I",
    "O",
    "P",
  ],
];

const tableLength = 18;
const tableHeight = 18;
function findWord(word, puzzle) {
  const directions = [
    [0, 1], // right
    [1, 0], // down
    [1, 1], // diagonal down-right
    [-1, 1], // diagonal up-right
  ];

  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[i].length; j++) {
      // search for the word starting at (i, j) in all directions
      for (let dir of directions) {
        let found = true;
        let r = i,
          c = j;
        for (let k = 0; k < word.length; k++) {
          // check if we went out of bounds
          if (r < 0 || r >= puzzle.length || c < 0 || c >= puzzle[r].length) {
            found = false;
            break;
          }
          // check if the character matches
          if (puzzle[r][c] !== word[k]) {
            found = false;
            break;
          }
          // move to the next position
          r += dir[0];
          c += dir[1];
        }
        if (found) {
          // return the starting and ending positions of the word
          const start = [i, j];
          const end = [r - dir[0], c - dir[1]];
          return { start, end };
        }
      }
    }
  }
  // if the word was not found, return a message
  return "Word not found";
}
const result = findWord("SMALLFORWARD", puzzle);
if (typeof result === "string") {
  console.log(result); // prints "Word not found"
} else {
  console.log(result.start); // prints [0, 5]
  console.log(result.end); // prints [0, 16]
}
