names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

x = input("can you give a name : ")

if x in names:
    print(f"{x} we should be printing the index {names.index(x)}")
else:
    print("Sorry, this name is not in the list.")
