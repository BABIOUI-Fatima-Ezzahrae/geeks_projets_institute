names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

x = input("Can you give me your name please : ")

if x in names:
    index = names.index(x)
    print("your index is "+ str(index))