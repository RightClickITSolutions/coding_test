"""
If you buy a 40 GB hard drive, then chances are that the actual storage on the hard drive is not 40 GB.

This is due to the fact that, typically, a manufacturer uses 1,000 bytes as the value of 1K bytes, 1,000 K bytes as the value of 1 MB, 1,000 MB as the value of 1 GB. Therefore, a 40 GB hard drive contains 40,000,000,000 bytes.

However, in computer memory, 1 KB is equal to 1,024 bytes, and so on. So the actual storage on a 40 GB hard drive is approximately 37.25 GB. (You might like to read the fine print next time you buy a hard drive.)

Write a program that prompts the user to enter the size of the hard drive specified by the manufacturer, on the hard drive box, and outputs the actual storage capacity of the hard drive.
"""


def display_real_size():
    ratio = obtain_unit()
    a = input("Input manufacturer's size: ")
    b = int(a) * ratio
    if ratio == 1000000:
        c = b / (1024 * 1024)
        message = f'Actual size = {c} Gb'
    elif ratio == 1000:
        c = b / 1024
        message = f'Actual size = {c} Mb'
    else:
        c = b / 1
        message = f'Actual size = {c} bytes'
    print(message)


def obtain_unit():
    size_type = input(
        "Input the size\'s unit i.e. G for Gigabytes, M for Megabytes, K for Kilobytes: ")
    if size_type == 'G':
        ratio = 1000 * 1000
    elif size_type == 'M':
        ratio = 1000
    elif size_type == 'K':
        ratio = 1
    else:
        print('Error - Incorrect Input')
        obtain_unit()

    return ratio


display_real_size()
