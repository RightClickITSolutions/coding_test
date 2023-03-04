/* 
A milk carton can hold 3.78 liters of milk. Each morning, a dairy farm ships cartons of milk to a local grocery store. The cost of producing one liter of milk is ₦250, and the profit of each carton of milk is ₦180. Write a program that does the following:
	- Prompts the user to enter the total amount of milk produced in the morning.
	- Outputs the number of milk cartons needed to hold milk. (Round your answer to the nearest integer.)
	- Outputs the cost of producing milk.
	- Outputs the profit for producing milk.

 */

/* 
In my solution, I defined three constants: `MILK_CARTON_CAPACITY`, `COST_PER_LITER` and `PROFIT_PER_CARTON`.
I then prompt the user to enter total amount of milk produced in the morning, and used that input to calculate 
the number of milk cartons needed, the cost of producing milk, and profit of producing milk. Finally, I output 
the result using console.log Method.

I also used the `parseFloat` function to convert the users input to a number and the `toFixed` method to round 
the cost and profit to two decimal places when outputing them.
*/

const MILK_CARTON_CAPACITY = 3.78;
const COST_PER_LITER = 250;
const PROFIT_PER_CARTON = 180;

const totalMilk = parseFloat(prompt(`Enter the total amount produced in liters`));
const cartonsNeeded = Math.round(totalMilk / MILK_CARTON_CAPACITY);
const costOfMilk = totalMilk * COST_PER_LITER;
const profit = cartonsNeeded * PROFIT_PER_CARTON;

console.log(`Number of milk cartons needed: ${cartonsNeeded}`);
console.log(`Cost of producing milk: #${costOfMilk.toFixed(2)}`);
console.log(`Porfit for producing milk: #${profit.toFixed(2)}`);

