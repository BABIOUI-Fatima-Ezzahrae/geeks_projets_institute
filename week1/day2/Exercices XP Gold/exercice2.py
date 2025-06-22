person_name = {
    'Mona' : '2007/05/25',
    'Ali' : '1998/07/02',
    'Asmaa' : '2002/11/11',
    'Sofya' : '1989/02/18',
    'Sami' : '1997/12/11',
}

x = input("can you give a name : ")

if x in person_name:
    print(f"{x} birthday is {person_name[x]}")
else:
    print("Sorry, this name is not in the list.")
