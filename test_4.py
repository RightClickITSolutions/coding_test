"""
write a function or set of functions that 
finds the word entered by a user in a word search. 
Your function paramaters are as follows:
INPUT: an 18 x 18 matrix representing the puzzle i.e a list containing 18 lists which contain 18 characters each.
OUTPUT: If it finds the word, it should return the position of the word. If it doesnt find the word, it should simply return a message saying word was not found
Note: The words are basketball terms and positions eg SMALLFORWARD, POWERFORWARD, GUARD etc
"""

# WRITE YOUR SOLUTION IN HERE


puzzle = [
    ['P', 'G', 'T', 'H', 'S', 'S', 'M', 'A', 'L',
        'L', 'F', 'O', 'R', 'W', 'A', 'R', 'D', 'J'],
    ['U', 'N', 'T', 'T', 'O', 'N', 'H', 'E', 'I',
        'R', 'N', 'B', 'T', 'M', 'V', 'E', 'E', 'W'],
    ['Y', 'I', 'D', 'R', 'H', 'O', 'O', 'N', 'G',
        'C', 'E', 'U', 'E', 'T', 'I', 'R', 'S', 'O'],
    ['A', 'S', 'R', 'O', 'U', 'R', 'P', 'I', 'O',
        'N', 'O', 'B', 'S', 'N', 'S', 'R', 'L', 'R'],
    ['L', 'S', 'A', 'U', 'P', 'O', 'E', 'A', 'T',
        'E', 'I', 'C', 'O', 'E', 'C', 'O', 'A', 'H'],
    ['R', 'A', 'U', 'T', 'O', 'R', 'C', 'E', 'M',
        'U', 'O', 'L', 'Y', 'U', 'O', 'H', 'M', 'T'],
    ['E', 'P', 'G', 'O', 'I', 'H', 'O', 'I', 'P',
        'R', 'T', 'F', 'B', 'G', 'N', 'D', 'D', 'E'],
    ['Y', 'B', 'G', 'F', 'N', 'R', 'T', 'V', 'E',
        'O', 'A', 'I', 'N', 'B', 'R', 'D', 'U', 'E'],
    ['A', 'T', 'N', 'B', 'T', 'S', 'E', 'B', 'E',
        'S', 'I', 'I', 'T', 'A', 'I', 'M', 'N', 'R'],
    ['L', 'S', 'I', 'O', 'S', 'K', 'O', 'T', 'N',
        'R', 'L', 'N', 'W', 'S', 'A', 'R', 'K', 'F'],
    ['P', 'I', 'T', 'U', 'E', 'A', 'T', 'E', 'R',
        'E', 'T', 'R', 'T', 'E', 'B', 'B', 'D', 'S'],
    ['B', 'S', 'O', 'N', 'R', 'A', 'A', 'T', 'V',
        'A', 'O', 'I', 'T', 'E', 'L', 'U', 'H', 'L'],
    ['L', 'S', 'O', 'D', 'W', 'K', 'E', 'A', 'A',
        'F', 'U', 'S', 'M', 'J', 'R', 'O', 'S', 'A'],
    ['O', 'A', 'H', 'S', 'E', 'K', 'R', 'F', 'R',
        'M', 'E', 'Q', 'R', 'E', 'T', 'N', 'E', 'C'],
    ['C', 'L', 'S', 'R', 'S', 'T', 'O', 'E', 'B',
        'A', 'C', 'K', 'B', 'O', 'A', 'R', 'D', 'S'],
    ['K', 'L', 'S', 'A', 'N', 'U', 'W', 'G', 'A',
        'M', 'E', 'M', 'I', 'T', 'F', 'L', 'A', 'H'],
    ['A', 'A', 'B', 'C', 'L', 'O', 'C', 'K', 'I',
        'R', 'E', 'F', 'E', 'R', 'E', 'E', 'S', 'M'],
    ['I', 'B', 'T', 'H', 'P', 'T', 'E', 'N', 'D',
        'R', 'A', 'U', 'G', 'T', 'N', 'I', 'O', 'P'],
]

tableLength = 18
tableHeight = 18


def displayTable():
    for row in range(0, 18):
        for column in range(0, 18):
            print(puzzle[row][column], end='      ')

            if column == 17:
                print('\n')


def displayResultTable(positions):
    for row in range(0, 18):
        for column in range(0, 18):
            puzzle[row][column] = '0'
            print(puzzle[row][column], end='      ')
            if row == positions[0][0] and column == positions[0][1]:
                print(puzzle[row][column], end='      ')


def findWord(word):
    len_word = len(word)
    first_char = word[0]
    last_char = word[len_word - 1]

    for row in puzzle:
        for char in row:
            if char == first_char:
                if row.index(first_char) + len_word - 1 < 18:
                    # print("Second proof")
                    i = row.index(first_char)
                    j = row.index(first_char) + len_word - 1
                    sequence = ''
                    while i <= j:
                        sequence += row[i]
                        i += 1
                    # print(sequence)
                    if sequence == word:
                        message = f'{sequence} == {word}'
                        # print(message)
                        i = row.index(first_char)
                        j = row.index(first_char) + len_word - 1

                        position = f'Found at Row {puzzle.index(row)+1} with index number {puzzle.index(row)} => between index {i} and {j}'
                        return position

    not_found = f'{word} was not found'
    return not_found


word = str(input("Enter the word to search for in UPPERCASE: "))

print(findWord(word))
