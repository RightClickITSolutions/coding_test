/* 
A milk carton can hold 3.78 liters of milk. Each morning, a dairy farm ships cartons of milk to a local grocery store. The cost of producing one liter of milk is ₦250, and the profit of each carton of milk is ₦180. Write a program that does the following:
	- Prompts the user to enter the total amount of milk produced in the morning.
	- Outputs the number of milk cartons needed to hold milk. (Round your answer to the nearest integer.)
	- Outputs the cost of producing milk.
	- Outputs the profit for producing milk.

 */
// ---------------------------ANSWER-----------------------//

//To Prompt the user to enter the total amount of milk produced in the morning
const MilkProducedInTheMorning = parseFloat(
  prompt("Enter the total amount of milk produced in liters:")
);
console.log(MilkProducedInTheMorning);

//To Calculate the number of milk cartons needed to hold the milk and rounding to nearest integer
const CatonsNeedForMilk = Math.round(MilkProducedInTheMorning / 3.78);
console.log(`Number of milk cartons need to hold is ${CatonsNeedForMilk}`);
// To calculate the cost of producing milk
const ProducionCost = MilkProducedInTheMorning * 250;
console.log(`Cost of producing milk #${ProducionCost.toFixed(2)}`);
// To calculate the profit for producing milk
const Profit = CatonsNeedForMilk * 180;
console.log(`Profit for producing milk: ₦${Profit.toFixed(2)}`);
