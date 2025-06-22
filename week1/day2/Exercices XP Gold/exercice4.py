import random

list1 = []

def throw_dice():
    return random.randint(1, 6)

def throw_until_doubles():
    count = 0
    while True:
        x = throw_dice()
        y = throw_dice()
        count += 1
        print(f"Roll {count}: {x} - {y}")
        if x == y:
            print(f"🎉 Got doubles: {x} - {y} after {count} throws.\n")
            return count

def main():
    for i in range(0,100):  
        z = throw_until_doubles()
        list1.append(z)
    
    c = sum(list1)  
    d = round(c / 100, 2)
    
    print(f"\n🎯 It took {c} throws in total to reach 100 doubles.")
    print(f"📊 The average number of throws to get doubles was {d}.")

main()
