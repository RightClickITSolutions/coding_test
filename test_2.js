/* 
A milk carton can hold 3.78 liters of milk. Each morning, a dairy farm ships cartons of milk to a local grocery store. The cost of producing one liter of milk is ₦250, and the profit of each carton of milk is ₦180. Write a program that does the following:
	- Prompts the user to enter the total amount of milk produced in the morning.
	- Outputs the number of milk cartons needed to hold milk. (Round your answer to the nearest integer.)
	- Outputs the cost of producing milk.
	- Outputs the profit for producing milk.

 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// I Prompt user for the total amount of milk produced
rl.question(
  "Enter the total amount of milk produced in liters: ",
  (total_milk_liters) => {
    total_milk_liters = parseFloat(total_milk_liters);

    //I Calculate the number of milk cartons needed to hold milk
    const cartons_needed = Math.round(total_milk_liters / 3.78);

    //I Calculate the cost of producing milk
    const cost = total_milk_liters * 250;

    //I Calculate the profit of producing milk
    const profit = cartons_needed * 180;

    // Output the results
    console.log("Number of milk cartons needed:", cartons_needed);
    console.log("Cost of producing milk: ₦" + cost.toFixed(2));
    console.log("Profit for producing milk: ₦" + profit.toFixed(2));

    rl.close();
  }
);
