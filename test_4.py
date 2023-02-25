"""
write a function or set of functions that 
finds the word entered by a user in a word search. 
Your function paramaters are as follows:
INPUT: an 18 x 18 matrix representing the puzzle i.e a list containing 18 lists which contain 18 characters each.
OUTPUT: If it finds the word, it should return the position of the word. If it doesnt find the word, it should simply return a message saying word was not found
Note: The words are basketball terms and positions eg SMALLFORWARD, POWERFORWARD, GUARD etc
"""

""" 
name: Akeju Oluwanifemi
email: akejunifemi11@gmail.com

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
				



word = str(input("Enter the word to search for in UPPERCASE: "))

def findWord(puzzle, word):
    word_length = len(word)
    for i in range(18):
        for j in range(18):
            if puzzle[i][j] == word[0]:
                # Check in all eight directions
                for x, y in [(0, 1), (0, -1), (1, 0), (-1, 0), (1, 1), (1, -1), (-1, 1), (-1, -1)]:
                    # Calculate the end position of the word in this direction
                    end_i = i + (word_length - 1) * x
                    end_j = j + (word_length - 1) * y
                    # Check if the end position is within the puzzle boundaries
                    if end_i >= 0 and end_i < 18 and end_j >= 0 and end_j < 18:
                        # Check if the word is found in this direction
                        found = True
                        for k in range(1, word_length):
                            if puzzle[i + k*x][j + k*y] != word[k]:
                                found = False
                                break
                        if found:
                            return f"Word found starting at position ({i},{j}) and ending at position ({end_i},{end_j})"
    return "Word not found"


print(find_word(puzzle, word))