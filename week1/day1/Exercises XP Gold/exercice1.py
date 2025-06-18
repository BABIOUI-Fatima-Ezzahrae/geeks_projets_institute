month = int(input("Give me a number of month : "))
if month in [12,1,2]:
    print("The season is Winter")
elif month in [3,4,5]:
    print("The season is Spring")
elif month in [6,7,8]:
    print("The season is Summer")
elif month in [9,10,11]:
    print("The season is Autum")
else:
    print("Sorry, we have just 12 months!!!!")