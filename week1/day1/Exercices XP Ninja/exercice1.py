
x1 = 3 <= 3 < 9 #output = True

y1= 3 == 3 == 3 #output = True

a1= bool(0) #output = False

b1= bool(5 == "5") #output = False

c1= bool(4 == 4) == bool("4" == "4") #output = True

d1= bool(bool(None)) #output = False

x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x) #output = True
print("y is", y) #output =False
print("a:", a) #output =5
print("b:", b) #output =10