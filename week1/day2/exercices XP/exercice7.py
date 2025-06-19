import random

def get_random_temp():
    # return random.randint(-10,40)
    return random.uniform(-10,40)

def main():
    x = get_random_temp()
    print(f"The temperature right now is {x} degrees Celsius")
    if x <0 :
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif x>0 and x<16:
        print("Quite chilly! Don’t forget your coat.")
    elif x>16 and x<23:
        print("Nice weather.")
    elif x>24 and x<32:
        print("A bit warm, stay hydrated.")
    else:
        print("It’s really hot! Stay cool.")

main()