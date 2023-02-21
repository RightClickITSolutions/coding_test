/* 
A milk carton can hold 3.78 liters of milk. Each morning, a dairy farm ships cartons of milk to a local grocery store. The cost of producing one liter of milk is ₦250, and the profit of each carton of milk is ₦180. Write a program that does the following:
	- Prompts the user to enter the total amount of milk produced in the morning.
	- Outputs the number of milk cartons needed to hold milk. (Round your answer to the nearest integer.)
	- Outputs the cost of producing milk.
	- Outputs the profit for producing milk.

 */

const cartonCapacity = 3.78;
const costOfProdPerLiter = 250;
const profitPerCarton = 180;

const milkProduced = prompt("Enter amount of milk produced, in litres", 0);
milkProduced = parseFloat(milkProduced); //convert string input to float

const totalCartonsProduced = Math.round(milkProduced / cartonCapacity);

const totalCostOfProd = milkProduced * costOfProdPerLiter;

const totalProfit = profitPerCarton * totalCartonsProduced;

console.log(`Number of cartons needed to hold milk: ${totalCartonsProduced} `);
console.log(`Cost of production of milk: ${totalCostOfProd}`);
console.log(`Profit for producing milk: ${totalProfit}`);
