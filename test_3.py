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

""" 
name: Akeju Oluwanifemi
email: akejunifemi11@gmail.com
 """

import csv
from collections import defaultdict

def goat_awards(csv_file):
    with open(csv_file) as file:
        reader = csv.reader(file)
        next(reader)  # Skip the header row
        stats = defaultdict(lambda: [0, 0, 0, 0])  # Dictionary with default values [0, 0, 0, 0] for points, rebounds, assists, and blocks
        for row in reader:
            name = row[0]
            points = int(row[2])
            rebounds = int(row[3])
            assists = int(row[4])
            blocks = int(row[7])
            stats[name][0] += points
            stats[name][1] += rebounds
            stats[name][2] += assists
            stats[name][3] += blocks
        
        most_points = max(stats.items(), key=lambda x: x[1][0])
        most_assists = max(stats.items(), key=lambda x: x[1][2])
        most_rebounds = max(stats.items(), key=lambda x: x[1][1])
        most_blocks = max(stats.items(), key=lambda x: x[1][3])
        
        return {
            "most_points": [most_points[0], most_points[1][0]],
            "most_assists": [most_assists[0], most_assists[1][2]],
            "most_rebounds": [most_rebounds[0], most_rebounds[1][1]],
            "most_blocks": [most_blocks[0], most_blocks[1][3]],
        }

print(goat_awards("players_stats.csv"))