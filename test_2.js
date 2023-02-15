/* 
A milk carton can hold 3.78 liters of milk. Each morning, a dairy farm ships cartons of milk to a local grocery store. The cost of producing one liter of milk is ₦250, and the profit of each carton of milk is ₦180. Write a program that does the following:
	- Prompts the user to enter the total amount of milk produced in the morning.
	- Outputs the number of milk cartons needed to hold milk. (Round your answer to the nearest integer.)
	- Outputs the cost of producing milk.
	- Outputs the profit for producing milk.

 */

	//ANSWERS

	// This code takes in the amount of milk produced in litres and returns the number of cartons needed, the cost, and profit made from producing the milk.

let morningmilk = prompt('Enter the total amount of milk produced in the morning in Litres')
let morningmilkint = parseFloat(morningmilk, 10)
let numofcartons = morningmilkint / 3.78
let numofcartonsint = Math.round(numofcartons)
let costofmilk = morningmilkint * 250
let profitofmilk = numofcartonsint * 180
console.log('The number of milk cartons needed to hold ' + morningmilk + ' litres of milk is ' + numofcartonsint);
console.log('The cost of producing ' + morningmilk + ' litres of milk is #' + costofmilk);
console.log('The profit for producing ' + morningmilk +  ' litres of milk is #' + profitofmilk);

// Since the number of cartons needed is approximated to the nearest integer, the profit per carton is also acquired from the approximated value of the number of cartons.
