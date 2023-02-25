"""
A milk carton can hold 3.78 liters of milk. Each morning, a dairy farm ships cartons of milk to a local grocery store. The cost of producing one liter of milk is ₦250, and the profit of each carton of milk is ₦180. Write a program that does the following:
	- Prompts the user to enter the total amount of milk produced in the morning.
	- Outputs the number of milk cartons needed to hold milk. (Round your answer to the nearest integer.)
	- Outputs the cost of producing milk.
	- Outputs the profit for producing milk.

"""

"""
name: Akeju Oluwanifemi
email: akejunifemi11@gmail.com 

 """

# prompt the user to enter total amount of milk produced in the morning in litres

total_amount_litres = int(input("Enter the total amount of milk produced in litres :"))

#Calculate number of cartons needed
number_of_cartons_needed = total_amount_litres / 3.78

print(f"The number of cartons needed is {round(number_of_cartons_needed)}")

#Calculate the cost of production
cost_of_production = total_amount_litres * 250

print(f"The cost of producing {total_amount_litres} litres of milk is #{round(cost_of_production,2)}")

#Calculate the profit made
profit = number_of_cartons_needed * 180

print(f"The profit to be made is #{round(profit,2)}")
