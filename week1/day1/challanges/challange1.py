x = int(input("donnez un nombre : "))
y = int(input("donnez un length : "))
liste1 = []
for i in range(1,y+1):
    z = x * i
    liste1.append(z)

print(liste1)