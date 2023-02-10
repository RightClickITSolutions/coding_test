const costPerLiter = 250;
const profitPerCarton = 180;
const cartonCapacity = 3.78;
// Declare variables for cost and profit per liter and carton capacity

const totalMilkProduced = prompt("Enter the total amount of milk produced in the morning:");
// Prompt user for total amount of milk produced

const numOfCarton = Math.round(totalMilkProduced / cartonCapacity);
// Calculates the number of cartons needed to hold milk

const costOfProducing = totalMilkProduced * costPerLiter;
// Calculates the  cost of producing milk

const profitForProducing = numOfCarton * profitPerCarton;
// Calculates profit for producing milk


console.log("Number of cartons needed: " + numOfCarton);
console.log("Cost of producing milk: ₦" + costOfProducing);
console.log("Profit for producing milk: ₦" + profitForProducing);
// Outputs results
