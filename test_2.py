"""
A milk carton can hold 3.78 liters of milk. Each morning, a dairy farm ships cartons of milk to a local grocery store. The cost of producing one liter of milk is ₦250, and the profit of each carton of milk is ₦180. Write a program that does the following:
	- Prompts the user to enter the total amount of milk produced in the morning.
	- Outputs the number of milk cartons needed to hold milk. (Round your answer to the nearest integer.)
	- Outputs the cost of producing milk.
	- Outputs the profit for producing milk.

"""

# Here i prompt user for the total amount of milk produced
total_milk_liters = float(
    input("Enter the total amount of milk produced in liters: "))

# here i calculate the number of milk cartons needed to hold milk
cartons_needed = round(total_milk_liters / 3.78)

# here i alculate the cost of producing milk
cost = total_milk_liters * 250

# here i calculate the profit of producing milk
profit = cartons_needed * 180

# Output the results
print("Number of milk cartons needed:", cartons_needed)
print("Cost of producing milk: ₦{:.2f}".format(cost))
print("Profit for producing milk: ₦{:.2f}".format(profit))
