print("this is a decision game, after each paragraph you will have ability to make a choice ")
print("welcome to the treasure island, your mission is to find a treasure. ")
choice1= (input("left or right?"))
if choice1 == "left" or choice1 == "Left":
    choice1= (input("swim or wait?"))
else:    
    print("you Fall in hole\n Game over")
    exit()  
# end of decision 1
if choice1 == "Wait" or choice1 =="wait":
    choice1=(input("Choose door (yellow,blue and Red)"))
else:
    print("you were eaten by megalotrout\n Game over")   
    exit() 
 #end of decision 2 
if choice1 == "yellow"  or choice1 =="Yellow":
    print("You win")  
elif choice1 == "blue" or choice1== "Blue":
    print("Burned in fire\n Game over.")    
    exit()
elif choice1 == "red" or choice1=="Red":
    print("Eaten by beasts\n Game over.")
    exit()
else:
    print("you are a goofy one aren't you?\n Game over LMFAO.")    
    exit()
