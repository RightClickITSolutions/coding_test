import csv
from collections import defaultdict

def goat_awards(csv_file):
    players = defaultdict(lambda: defaultdict(int))
    
    with open(csv_file, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            name = row['name']
            players[name]['points'] += int(row['points'])
            players[name]['assists'] += int(row['assists'])
            players[name]['rebounds'] += int(row['rebounds'])
            players[name]['blocks'] += int(row['blocks'])
            
    most_points = max(players, key=lambda x: players[x]['points'])
    most_assists = max(players, key=lambda x: players[x]['assists'])
    most_rebounds = max(players, key=lambda x: players[x]['rebounds'])
    most_blocks = max(players, key=lambda x: players[x]['blocks'])
    
    return {
        'most_points': [most_points, players[most_points]['points']],
        'most_assists': [most_assists, players[most_assists]['assists']],
        'most_rebounds': [most_rebounds, players[most_rebounds]['rebounds']],
        'most_blocks': [most_blocks, players[most_blocks]['blocks']]
    }
    
