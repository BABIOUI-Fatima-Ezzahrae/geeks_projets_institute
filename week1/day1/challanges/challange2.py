x = input("user's word : ")

previous_char = ""

resultat = ""

for char in x:
    if char != previous_char :
        resultat += char
    previous_char = char

print(resultat)