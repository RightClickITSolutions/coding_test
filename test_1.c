/**
 * QUESTION 1:
 * If you buy a 40 GB hard drive, then chances are that the actual storage on the hard drive is not 40 GB. This is due to the fact that, typically, a manufacturer uses 1,000 bytes as the value of 1K bytes, 1,000 K bytes as the value of 1 MB, 1,000 MB as the value of 1 GB. Therefore, a 40 GB hard drive contains 40,000,000,000 bytes. However, in computer memory, 1 KB is equal to 1,024 bytes, and so on. So the actual storage on a 40 GB hard drive is approximately 37.25 GB. (You might like to read the fine print next time you buy a hard drive).
 * Write a program that prompts the user to enter the size of the hard drive specified by the manufacturer, on the hard drive box, and outputs the actual storage capacity of the hard drive.
 */

#include <stdio.h>

void storage_capacity()
{
	double manufacturer_size;
	double actual_storage;

	printf("Enter the size of the hard drive (in GB) as specified on the hard drive box: \n");
	scanf("%lf", &manufacturer_size);

	actual_storage = ((manufacturer_size * 1000000000) / (1024 * 1024 * 1024));
	printf("The actual storage capacity of your hard drive is %.2f GB\n", actual_storage);

}


int main(void)
{
	storage_capacity();
	return (0);
}
