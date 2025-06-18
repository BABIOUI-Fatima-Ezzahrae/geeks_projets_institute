import random #pour ajouter un nombre aléatoire

x = int(input("input a number from 1 to 9 : "))

random_nombre = random.randint(1,9)

if x == random_nombre :
    print("Winner")
else :
    print("Better luck next time.")
