"""
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

"""

import csv

def goat_awards(csv_file):
    with open(csv_file, 'r') as file:
        reader = csv.DictReader(file)
        players = list(reader)
    
    most_points = max(players, key=lambda x: int(x['points']))
    most_assists = max(players, key=lambda x: int(x['assists']))
    most_rebounds = max(players, key=lambda x: int(x['rebounds']))
    most_blocks = max(players, key=lambda x: int(x['blocks']))
    
    return {
        'most_points': [most_points['name'], int(most_points['points'])],
        'most_assists': [most_assists['name'], int(most_assists['assists'])],
        'most_rebounds': [most_rebounds['name'], int(most_rebounds['rebounds'])],
        'most_blocks': [most_blocks['name'], int(most_blocks['blocks'])]
    }
