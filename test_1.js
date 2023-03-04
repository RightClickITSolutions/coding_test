/* 
If you buy a 40 GB hard drive, then chances are that the actual storage on the hard drive is not 40 GB.

This is due to the fact that, typically, a manufacturer uses 1,000 bytes as the value of 1K bytes, 1,000 K bytes as the value of 1 MB, 1,000 MB as the value of 1 GB. Therefore, a 40 GB hard drive contains 40,000,000,000 bytes.

However, in computer memory, 1 KB is equal to 1,024 bytes, and so on. So the actual storage on a 40 GB hard drive is approximately 37.25 GB. (You might like to read the fine print next time you buy a hard drive.)

Write a program that prompts the user to enter the size of the hard drive specified by the manufacturer, on the hard drive box, and outputs the actual storage capacity of the hard drive.

 */

/* 
In my solution, I first prompt the user for the hard drive size specified by the manufacturer in gigabytes.
I then convert the size to bytes by multiplying by 1,000,000,000. Next, I divide this number by 1024^3 to convert 
from bytes to gigabytes using the correct conversion rate for computer memory. Finally, I round the actual size 
to two decimal places using the `toFixed` method and output it to the console using `console.log` method.
*/

/* Prompt the user for the hard drive size specified by the manufacturer */
let manufacturerSize = prompt("Enter the hard drive size specified by the manufacturer in GB:");

/* Convert the manufacturer size to bytes */
let bytes = manufacturerSize * 1000000000;

/* Calculate the actual storage capacity based on the conversion rate from bytes to gigabytes */
let actualSize = bytes / (1024 ** 4);

/* Round the actual size to decimal places */
actualSize = actualSize.toFixed(2);

/* Output the actual storage capacity to the console */
console.log(`The actual storage capacity fo the hard drive is approximately ${actualSize} GB.`);