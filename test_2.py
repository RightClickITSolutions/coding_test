"""
A milk carton can hold 3.78 liters of milk. Each morning, a dairy farm ships cartons of milk to a local grocery store. The cost of producing one liter of milk is ₦250, and the profit of each carton of milk is ₦180. Write a program that does the following:
	- Prompts the user to enter the total amount of milk produced in the morning.
	- Outputs the number of milk cartons needed to hold milk. (Round your answer to the nearest integer.)
	- Outputs the cost of producing milk.
	- Outputs the profit for producing milk.

"""


import math

# Constants
CARTON_CAPACITY = 3.78  # liters
MILK_COST = 250  # Naira
PROFIT_PER_CARTON = 180  # Naira

# Prompt user for input
milk_produced = float(input("Enter the total amount of milk produced in the morning (in liters): "))

# Calculate number of cartons needed
num_cartons = math.ceil(milk_produced / CARTON_CAPACITY)

# Calculate cost of producing milk
cost = milk_produced * MILK_COST

# Calculate profit for producing milk
profit = num_cartons * PROFIT_PER_CARTON

# Output results
print(f"Number of cartons needed: {num_cartons}")
print(f"Cost of producing milk: {cost:.2f} Naira")
print(f"Profit for producing milk: {profit:.2f} Naira")
