birthdays = {
    'Mona' : '2007/05/25',
    'Ali' : '1998/07/02',
    'Asmaa' : '2002/11/11',
    'Sofya' : '1989/02/18',
    'Sami' : '1997/12/11',
}

print("Welcome 🙌 !!")
x = input("you can search about birthday of any people in the liste : ").strip()

if x in birthdays:
    print(f"{x}'s birthday is on {birthdays[x]}")
else:
    print("Sorry, this name is not in the list.")
