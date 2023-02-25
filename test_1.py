"""
If you buy a 40 GB hard drive, then chances are that the actual storage on the hard drive is not 40 GB.

This is due to the fact that, typically, a manufacturer uses 1,000 bytes as the value of 1K bytes, 1,000 K bytes as the value of 1 MB, 1,000 MB as the value of 1 GB. Therefore, a 40 GB hard drive contains 40,000,000,000 bytes.

However, in computer memory, 1 KB is equal to 1,024 bytes, and so on. So the actual storage on a 40 GB hard drive is approximately 37.25 GB. (You might like to read the fine print next time you buy a hard drive.)

Write a program that prompts the user to enter the size of the hard drive specified by the manufacturer, on the hard drive box, and outputs the actual storage capacity of the hard drive.
"""


"""
name: Akeju Oluwanifemi
email: akejunifemi11@gmail.com

"""

""" userInput = int(input("Hello user. Please enter your supposed hard drive storage capacity: ")) """

supposed_size_manufacturer = int(
    input("Enter the size of the hard drive specified by the manufacturer in GB: "))

# calculate the actual storage capacity of the hard drive
size_actual = supposed_size_manufacturer * 1000**3 / 1024**3

print(f"The actual size of the hard drive is {round(size_actual,2)} GB")
