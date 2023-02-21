/* 
A milk carton can hold 3.78 liters of milk. Each morning, a dairy farm ships cartons of milk to a local grocery store. The cost of producing one liter of milk is ₦250, and the profit of each carton of milk is ₦180. Write a program that does the following:
	- Prompts the user to enter the total amount of milk produced in the morning.
	- Outputs the number of milk cartons needed to hold milk. (Round your answer to the nearest integer.)
	- Outputs the cost of producing milk.
	- Outputs the profit for producing milk.

 */
const prompt = require("prompt-sync")({ sigint: true });

const totalAmountOfMilk = parseFloat(
  prompt("Enter the total amount of milk produced in liters:")
);

// Calculate the number of milk cartons needed to hold milk
const numberOfCartons = Math.round(totalAmountOfMilk / 3.78);

// Calculate the cost of producing milk
const cost = totalAmountOfMilk * 250;

// Calculate the profit for producing milk
const profit = numberOfCartons * 180;

// Output the results
console.log(`Number of milk cartons needed:  ${numberOfCartons}

Cost of producing milk: ₦ ${cost}
		
Profit for producing milk: ₦ ${profit}`);
