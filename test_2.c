/**
 *
  QUESTION 2:
  A milk carton can hold 3.78 liters of milk. Each morning, a dairy farm ships cartons of milk to a local grocery store. The cost of producing one liter of milk is ₦250, and the profit of each carton of milk is ₦180. Write a program that does the following:
  - Prompts the user to enter the total amount of milk produced in the morning.
  - Outputs the number of milk cartons needed to hold milk. (Round your answer to the nearest integer).
  - Outputs the cost of producing milk.
  - Outputs the profit for producing milk.



NOTES AND CALCULATIONS:

	1 carton of milk = 3.78 litres
	Cost per litre of milk = ₦250
	Profit per carton = ₦180

Therefore,
	Cost price per carton = ₦250 x 3.78 = ₦945
	Selling price per carton is: ₦945 + ₦180 =  ₦1,125
	Number of cartons produced = amount (in litres) / 3.78 litres
	Total cost of production = ₦250 x amount (in litres)
	Total selling price = ₦1,125 x number of cartons
	Total profit = total selling price - total cost price  OR  number of cartons x ₦180
*/

 #include <stdio.h>
 #include <math.h>

void business_analyzer()
{
	const double volume_per_carton = 3.78;
	const double cost_per_litre = 250;
	const double profit_per_carton = 180;
	double total_volume;
	int carton_num = ceil(total_volume / volume_per_carton);
	double total_profit = carton_num * profit_per_carton;

	printf("Enter the total amount (in litres) of milk produced in the morning:\n");

	if (scanf("%lf", &total_volume) == 1)
	{
		double total_cost = cost_per_litre * total_volume;

		if (total_volume >= 0)
		{
			printf("The number of milk cartons needed to hold %.2lf litres of milk is: %d\n", total_volume, carton_num);
			printf("The cost of producing %.2lf litres of milk is: ₦%.2lf\n", total_volume, total_cost);
			printf("The profit made in producing %d carton(s) of milk is: ₦%.2lf\n", carton_num, total_profit);
		}
		else
		{

			printf("You entered an invalid number. Try again.\n");
		}

	}
	else
	{
		printf("You have entered an invalid amount. Try again.\n");
	}
}

int main(void)
{
	business_analyzer();
	return (0);
}
