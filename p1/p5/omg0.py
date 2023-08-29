# def fun(num):
#     s = 0
#     for i in range(int((num))):
#      s += int(num(i))**int(num(i))
#     return s 
# num = str(input("sheiyvane ricxvi "))   
# fun(num)

# takes the number then turns it into the string then gets its square and returns it as the integer

# def num(number):
#     ko = ''

#     for i in number :
#         ko += str(int(i) ** 2 )
#     return int(ko)

# print(num(3))

# facebook who likes it
def likes(names):
    ko= len(names) - 2
    if  names == [''] or names == []:
       return 'no one likes this'
    if len(names) == 1 :
        return names[0] + ' likes this'
    if len(names) == 2 :
        return names[0] + ' and ' + names[1] + ' like this'
    if len(names) == 3 :
        return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
    if len(names) >= 4 :
        return names[0] + ', ' + names[1] + ' and ' + str(ko) + ' others like this'

print(likes(["onaygot", "ambatukam"]))