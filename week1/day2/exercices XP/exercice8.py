toppings = []
x = ''
c = 10
while x != 'quit':
    x = input("what you need add in your PIZZA ? (or 'quit' to finish) ")
    if x != 'quit' :
        toppings.append(x)
        print(f"Adding {toppings} to your PIZZA")
        c += 2.50

print(f"total price : {c}")
