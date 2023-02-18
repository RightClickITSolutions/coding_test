/* 
A milk carton can hold 3.78 liters of milk. Each morning, a dairy farm ships cartons of milk to a local grocery store. The cost of producing one liter of milk is ₦250, and the profit of each carton of milk is ₦180. Write a program that does the following:
	- Prompts the user to enter the total amount of milk produced in the morning.
	- Outputs the number of milk cartons needed to hold milk. (Round your answer to the nearest integer.)
	- Outputs the cost of producing milk.
	- Outputs the profit for producing milk.

 */
let oneLiter = 250;
let profitPerEachCarton = 180;
const totalAmountOfMilkProduced = prompt(
  "Enter the total amount of milk produced in the morning (in litres)"
);

const numberOfMilkCartonNeeded = (totalAmountOfMilkProduced / 3.78).toFixed(0);

const costOfMilkProduction = totalAmountOfMilkProduced * oneLiter;

const profitForMilkProduced = numberOfMilkCartonNeeded * profitPerEachCarton;

console.log(
  `The number of milk cartons needed to hold milk is ${numberOfMilkCartonNeeded} cartons`
);
console.log(`The cost of the milk production is #${costOfMilkProduction}`);
console.log(
  `The profit of the milk production is #${profitForMilkProduced} cartons`
);
