import random as rand

def ran(first, second):
    numbers = []
    for i in range(3):  
        num = rand.randrange(first, second)
        numbers.append(num)
    return numbers

x = int(input("sheiyvane first ricxvi: "))
y = int(input("sheiyvane meore ricxvi: "))
print(ran(x, y))

# import random

# def generate_random_numbers():
#     lower = int(input("Enter the lower bound of the range: "))
#     upper = int(input("Enter the upper bound of the range: "))
    
#     if lower >= upper:
#         print("Invalid range. The lower bound must be less than the upper bound.")
#         return
    
#     random_numbers = [random.randint(lower, upper) for _ in range(3)]
#     return random_numbers

# if __name__ == "__main__":
#     random_numbers = generate_random_numbers()
#     if random_numbers:
#         print("Random numbers:", random_numbers)
