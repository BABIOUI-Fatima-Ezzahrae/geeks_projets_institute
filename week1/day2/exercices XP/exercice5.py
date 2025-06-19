import random

def num_random(y=51):
    x=random.randint(1,100)
    print(x)
    if y == x:
        print("great , are the same nombre")
    else:
        print("the numbres are different")

num_random()