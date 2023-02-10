import csv
# Importing the csv module
from collections import defaultdict
# Importing the defaultdict from the collections module

def goat_awards(csv_file):
# Defining the function goat_awards which takes in the parameter csv_file   
    players = defaultdict(lambda: defaultdict(int))
# Creating a defaultdict with default value as a defaultdict with default value 0
    
    with open(csv_file, 'r') as file:
# Opening the csv file in read mode
        reader = csv.DictReader(file)
# Reading the file as a dictionary using csv.DictReader
        for row in reader:
# Goes through the rows of the csv file
            name = row['name']
# Getting the name of the player
            players[name]['points'] += int(row['points'])
            players[name]['assists'] += int(row['assists'])
            players[name]['rebounds'] += int(row['rebounds'])
            players[name]['blocks'] += int(row['blocks'])
# Adding the points, assists, rebounds, and blocks of the player in the players defaultdict  
            
    most_points = max(players, key=lambda x: players[x]['points'])
# Finding the player with the most points
    most_assists = max(players, key=lambda x: players[x]['assists'])
# Finding the player with the most assists
    most_rebounds = max(players, key=lambda x: players[x]['rebounds'])
# Finding the player with the most rebounds
    most_blocks = max(players, key=lambda x: players[x]['blocks'])
# Finding the player with the most blocks
    
    return {
        'most_points': [most_points, players[most_points]['points']],
        'most_assists': [most_assists, players[most_assists]['assists']],
        'most_rebounds': [most_rebounds, players[most_rebounds]['rebounds']],
        'most_blocks': [most_blocks, players[most_blocks]['blocks']]
    }
# Returns a dictionary with the players with the most points, assists, rebounds, and blocks
