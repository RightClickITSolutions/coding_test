"""
A milk carton can hold 3.78 liters of milk. Each morning, a dairy farm ships cartons of milk to a local grocery store. The cost of producing one liter of milk is ₦250, and the profit of each carton of milk is ₦180. Write a program that does the following:
	- Prompts the user to enter the total amount of milk produced in the morning.
	- Outputs the number of milk cartons needed to hold milk. (Round your answer to the nearest integer.)
	- Outputs the cost of producing milk.
	- Outputs the profit for producing milk.

"""

milk_produced = float(input("Enter the total amount of milk produced in liters: "))

# number of milk cartons needed to hold the milk
cartons_needed = round(milk_produced / 3.78)

# cost of producing the milk
production_cost = milk_produced * 250

# profit for producing the milk
profit = cartons_needed * 180

print("Number of milk cartons needed: {}".format(cartons_needed))
print("Cost of producing milk: ₦{:.2f}".format(production_cost))
print("Profit for producing milk: ₦{:.2f}".format(profit))
