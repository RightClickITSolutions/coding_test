"""
write a function or set of functions that 
finds the word entered by a user in a word search. 
Your function paramaters are as follows:
INPUT: an 18 x 18 matrix representing the puzzle i.e a list containing 18 lists which contain 18 characters each.
OUTPUT: If it finds the word, it should return the position of the word. If it doesnt find the word, it should simply return a message saying word was not found
Note: The words are basketball terms and positions eg SMALLFORWARD, POWERFORWARD, GUARD etc
"""

#WRITE YOUR SOLUTION IN HERE


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

tableLength = 18
tableHeight = 18


def displayTable():
	for row in range(0,18):
		for column in range(0,18):
			print(puzzle[row][column], end='      ')

			if column == 17:
				print('\n')

def displayResultTable(positions):
	for row in range(0,18):
		for column in range(0,18):
			puzzle[row][column] = '0'
			print(puzzle[row][column], end='      ')
			if row == positions[0][0] and column == positions[0][1]:
				print(puzzle[row][column], end='      ')
				

def findWord(word):

    return

word = str(input("Enter the word to search for in UPPERCASE: "))

print(findWord(word))


def findWord(word):
    # First, we need to check all possible starting positions for the word.
    # There are four directions: horizontal (left to right), vertical (top to bottom),
    # and the two diagonals (top-left to bottom-right, and top-right to bottom-left).
    for row in range(tableHeight):
        for col in range(tableLength):
            if puzzle[row][col] == word[0]:
                # We found the first letter of the word at this position, so we need
                # to check the rest of the letters in all four directions.
                # First, horizontal (left to right):
                if col + len(word) <= tableLength and \
                        all(puzzle[row][col+i] == word[i] for i in range(len(word))):
                    return f"{word} found at ({row},{col}) to ({row},{col+len(word)-1})"
                # Vertical (top to bottom):
                if row + len(word) <= tableHeight and \
                        all(puzzle[row+i][col] == word[i] for i in range(len(word))):
                    return f"{word} found at ({row},{col}) to ({row+len(word)-1},{col})"
                # Diagonal (top-left to bottom-right):
                if row + len(word) <= tableHeight and col + len(word) <= tableLength and \
                        all(puzzle[row+i][col+i] == word[i] for i in range(len(word))):
                    return f"{word} found at ({row},{col}) to ({row+len(word)-1},{col+len(word)-1})"
                # Diagonal (top-right to bottom-left):
                if row + len(word) <= tableHeight and col - len(word) >= -1 and \
                        all(puzzle[row+i][col-i] == word[i] for i in range(len(word))):
                    return f"{word} found at ({row},{col}) to ({row+len(word)-1},{col-len(word)+1})"
    # If we got here, it means we didn't find the word in any direction.
    return f"{word} not found"

# To use this function, you can simply call it with the word you want to search for as the argument, like this:
word = input("Enter the word to search for in UPPERCASE: ")
result = findWord(word)
print(result)
