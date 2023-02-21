/* 
A milk carton can hold 3.78 liters of milk. Each morning, a dairy farm ships cartons of milk to a local grocery store. The cost of producing one liter of milk is ₦250, and the profit of each carton of milk is ₦180. Write a program that does the following:
	- Prompts the user to enter the total amount of milk produced in the morning.
	- Outputs the number of milk cartons needed to hold milk. (Round your answer to the nearest integer.)
	- Outputs the cost of producing milk.
	- Outputs the profit for producing milk.

 */

function calculate() {
    const milkProduced = parseFloat(document.getElementById('milk-production').value);
    const cartonsNeeded = Math.round(milkProduced / 3.78);
    const cost = (milkProduced * 250).toFixed(2);
    const profit = (cartonsNeeded * 180).toFixed(2);

    const results = document.getElementById('results');
    results.innerHTML = `
          <p>Number of milk cartons needed: ${cartonsNeeded}</p>
          <p>Cost of producing milk: ₦${cost}</p>
          <p>Profit for producing milk: ₦${profit}</p>
        `;
}