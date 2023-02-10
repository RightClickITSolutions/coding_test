function findWordInMatrix(matrix, word) {
    // loops through the matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            // checks to see if the first letter of the word is found in the matrix
            if (matrix[i][j] === word[0]) {
                // checks to see if the rest of the word can be found in the matrix starting from its current position
                if (checkWord(matrix, i, j, word)) {
                    return `Word found at position (${i}, ${j})`;
                }
            }
        }
    }
    return 'Word was not found';
}

function checkWord(matrix, i, j, word) {
    // array to store the directions to check for the word
    let direction = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let curr = 1;
    // loops through the directions
    for (let k = 0; k < direction.length; k++) {
        let x = i + direction[k][0];
        let y = j + direction[k][1];
        // checks if the current position is within the matrix boundary
        while (x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length) {
            // checks to see if the current letter in the word matches the letter at the current position in the matrix
            if (matrix[x][y] === word[curr]) {
                curr++;
                // check to see if we have found the complete word
                if (curr === word.length) {
                    return true;
                }
            } else {
                break;
            }
            x += direction[k][0];
            y += direction[k][1];
        }
        curr = 1;
    }
    return false;
}

puzzle = [
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

const tableLength = 18; 
const tableHeight = 18; 
    // variable to store the lenght and height of the table 
function displayTable() {
    // function to display the table
    for (let row = 0; row < tableLength; row++) {
    // loops through the rows of the table
        
        for (let column = 0; column < tableHeight; column++) {
            // loop through the columns of the table
            console.log(puzzle[row][column], end='      '); // print the value of the current cell
            // if the current column is the last column of the row
            if (column === 17) {
                console.log('\n'); // move to the next line
            }
        }
    }
}

function displayResultTable(positions) {
    // function to display the result table   
    for (let row = 0; row < tableLength; row++) {
    // loop through the rows of the table
        for (let column = 0; column < tableHeight; column++) {
    // loop through the columns of the table
            puzzle[row][column] = '0'; // set the value of the current cell to 0
            console.log(puzzle[row][column], end='      '); // print the value of the current cell
            // if the current cell is the starting position of the word
            if (row === positions[0][0] && column === positions[0][1]) {
                console.log(puzzle[row][column], end='      ');
            }
        }
    }
}

// displayTable();

const word = prompt("Enter the word to search for in UPPERCASE: "); // get the word to search for from the user
