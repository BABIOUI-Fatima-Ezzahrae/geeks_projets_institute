
# methode1:
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
c = 0
count = 0
family_prix = {}
for i, j in family.items():
    if j<3 :
        c = 0
    elif j>12 :
        c = 15
    else :
        c = 10

    family_prix [i]= c
    count += c

print(family_prix)

print(f"Prix total est : {count}")


print("*********************************")
print("*********************************")
print("*********************************")

# methode2:
familys = {}
x = int(input("how  mony people exist ? "))
d = 0
count = 0

for i in  range(0,x):
    y = input("Name:  ")
    z = int(input("Age : "))
    familys[y] = z
print(familys)

prix_family = {}
for i, j in familys.items():
    if j<3 :
        d = 0
    elif j>12 :
        d = 15
    else :
        d = 10

    prix_family [i]= d
    count += d


print(prix_family)

print(count)