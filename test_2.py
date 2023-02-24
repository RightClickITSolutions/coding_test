"""
A milk carton can hold 3.78 liters of milk. Each morning, a dairy farm ships cartons of milk to a local grocery store. The cost of producing one liter of milk is ₦250, and the profit of each carton of milk is ₦180. Write a program that does the following:
	- Prompts the user to enter the total amount of milk produced in the morning.
	- Outputs the number of milk cartons needed to hold milk. (Round your answer to the nearest integer.)
	- Outputs the cost of producing milk.
	- Outputs the profit for producing milk.

"""


def dairy():
    amount_of_milk = int(input(
        "Enter the total amount of milk produced (in litres): "))
    cartons_needed = int(amount_of_milk / 3.78)
    cost_of_milk = amount_of_milk * 250
    profits = (cartons_needed * 180)
    cart_str = f'Number of milk cartons needed => {int(cartons_needed)}'
    cost_str = f'Cost of producing milk => #{cost_of_milk}'
    profits_str = f'Profit made from producing milk => #{profits}'

    print(cart_str)
    print(cost_str)
    print(profits_str)


dairy()
