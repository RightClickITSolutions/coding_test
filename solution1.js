function calculateStorage(size) {
// Function to calculate the actual storage capacity of hard drive
 const oneGB = 1000;
 // Assume that 1 GB = 1000 MB
 const oneTB = 1000;
// Assume that 1 TB = 1000 GB
 let value = parseFloat(size.match(/\d+\.\d+|\d+/g));
 let unit = size.match(/[a-zA-Z]+/g)[0];
// Split the input string to extract the value and unit
 
 if (unit === 'TB') {
   value = value * oneTB * oneGB;
 } else if (unit === 'GB') {
   value = value * oneGB;
 } else if (unit === 'MB') {
 // Converts the value to MB
 } else {
   console.log("Invalid unit. Please enter the size in format 'value unit' (e.g. 1 TB, 500 GB, 100 MB)");
   return;
 }
 
 console.log(`Actual storage capacity: ${value} MB`);
}
   
const size = prompt("Enter the size of the hard drive specified by the manufacturer (e.g. 1 TB, 500 GB, 100 MB)");
// Gets input from user

calculateStorage(size);
// Calls the function to calculate and outputs the storage capacity
