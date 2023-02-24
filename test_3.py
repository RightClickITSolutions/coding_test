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


def disp_results():
    file = open('players_stats.csv', mode='r')
    names_array = []
    points_arr = []
    assists_arr = []
    rebounds_arr = []
    blocks_arr = []

    for row in file:
        row = row.replace('\n', '')
        id = row.split(',')
        names_array.append(id[0])
        points_arr.append(int(id[1]))
        assists_arr.append(int(id[2]))
        rebounds_arr.append(int(id[3]))
        blocks_arr.append(int(id[4]))

    max_points = max(points_arr)
    points_list = [names_array[points_arr.index(max_points)], max_points]

    max_assists = max(assists_arr)
    assists_list = [names_array[assists_arr.index(max_assists)], max_assists]

    max_rebounds = max(rebounds_arr)
    rebounds_list = [
        names_array[rebounds_arr.index(max_rebounds)], max_rebounds]

    max_blocks = max(blocks_arr)
    blocks_list = [names_array[blocks_arr.index(max_blocks)], max_blocks]

    result = {
        'most_points': points_list,
        'most_assists': assists_list,
        'most_rebounds': rebounds_list,
        'most_blocks': blocks_list
    }

    print(result)
    return result


disp_results()
