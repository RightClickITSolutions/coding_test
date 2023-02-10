/* 
A milk carton can hold 3.78 liters of milk. Each morning, a dairy farm ships cartons of milk to a local grocery store. The cost of producing one liter of milk is ₦250, and the profit of each carton of milk is ₦180. Write a program that does the following:
	- Prompts the user to enter the total amount of milk produced in the morning.
	- Outputs the number of milk cartons needed to hold milk. (Round your answer to the nearest integer.)
	- Outputs the cost of producing milk.
	- Outputs the profit for producing milk.

 */

const cartonMilk = 3.78;
const productionCost = 250;
const cartonProfit = 180;

const TotalAmount = prompt("Enter total amount of milk produced");

const cartonsRequired = (TotalAmount.valueOf() / cartonMilk).toFixed(2);
alert("Number of milk cartons " + cartonsRequired);

const costOfProduction = cartonsRequired * productionCost;
alert("Cost of producing milk " + costOfProduction);

const profitProduction = cartonsRequired * cartonProfit;
alert("Profit for producing milk " + profitProduction);
