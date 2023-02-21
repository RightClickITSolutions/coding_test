/* 
If you buy a 40 GB hard drive, then chances are that the actual storage on the hard drive is not 40 GB.

This is due to the fact that, typically, a manufacturer uses 1,000 bytes as the value of 1K bytes, 1,000 K bytes as the value of 1 MB, 1,000 MB as the value of 1 GB. Therefore, a 40 GB hard drive contains 40,000,000,000 bytes.

However, in computer memory, 1 KB is equal to 1,024 bytes, and so on. So the actual storage on a 40 GB hard drive is approximately 37.25 GB. (You might like to read the fine print next time you buy a hard drive.)

Write a program that prompts the user to enter the size of the hard drive specified by the manufacturer, on the hard drive box, and outputs the actual storage capacity of the hard drive.

 */

function calculate() {
    const manufacturerSizeGB = parseFloat(document.getElementById("manufacturerSizeGB").value);
    const manufacturerSizeBytes = manufacturerSizeGB * 1000 * 1000 * 1000; // Convert to bytes
    const actualSizeBytes = manufacturerSizeBytes / Math.pow(1024, 3); // Convert using 1024 bytes in a KB
    const actualSizeGB = actualSizeBytes.toFixed(2); // Round to 2 decimal places
    document.getElementById("result").innerHTML = `The actual storage capacity of the hard drive is approximately ${actualSizeGB} GB.`;
}