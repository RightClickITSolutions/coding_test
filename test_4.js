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

function findWord(puzzle, word) {
    const numRows = puzzle.length;
    const numCols = puzzle[0].length;
    const wordLen = word.length;

    // Check if the word can fit horizontally
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col <= numCols - wordLen; col++) {
            let match = true;
            for (let i = 0; i < wordLen; i++) {
                if (puzzle[row][col+i] !== word[i]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return { direction: 'horizontal', row, col };
            }
        }
    }

    // Check if the word can fit vertically
    for (let row = 0; row <= numRows - wordLen; row++) {
        for (let col = 0; col < numCols; col++) {
            let match = true;
            for (let i = 0; i < wordLen; i++) {
                if (puzzle[row+i][col] !== word[i]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return { direction: 'vertical', row, col };
            }
        }
    }

    // Check if the word can fit diagonally from left to right
    for (let row = 0; row <= numRows - wordLen; row++) {
        for (let col = 0; col <= numCols - wordLen; col++) {
            let match = true;
            for (let i = 0; i < wordLen; i++) {
                if (puzzle[row+i][col+i] !== word[i]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return { direction: 'diagonal-left-to-right', row, col };
            }
        }
    }

    // Check if the word can fit diagonally from right to left
    for (let row = 0; row <= numRows - wordLen; row++) {
        for (let col = wordLen - 1; col < numCols; col++) {
            let match = true;
            for (let i = 0; i < wordLen; i++) {
                if (puzzle[row+i][col-i] !== word[i]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return { direction: 'diagonal-right-to-left', row, col };
            }
        }
    }

    // If the word wasn't found, return a message
    return "Word not found";
}

