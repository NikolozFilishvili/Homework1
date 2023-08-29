
number = int(input("insert the number here:"))

digit = 1
while digit <= number:
    if digit % 3 == 0 and digit % 5 == 0:
        print("fizzbuzz")
    elif digit % 3 == 0:
        print("fizz")
    elif digit % 5 == 0:
        print("buzz")
    else:
        print(str(digit))
    digit += 1