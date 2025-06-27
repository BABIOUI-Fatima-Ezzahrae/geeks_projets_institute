from datetime import datetime

ask = input("Please enter your date of birth (DD/MM/YYYY): ")
birthdate = datetime.strptime(ask, "%d/%m/%Y")
today = datetime.today()

age = today.year - birthdate.year

candles = age % 10
candles_str = "i" * candles
line_width = 11
padding = (line_width - len(candles_str)) // 2
candles_line = " " * 4 + "_" * padding + candles_str + "_" * (line_width - padding - len(candles_str))

print(candles_line)
print("   |:H:a:p:p:y:|")
print(" __|___________|__")
print("|^^^^^^^^^^^^^^^^^|")
print("|:B:i:r:t:h:d:a:y:|")
print("|                 |")
print("~~~~~~~~~~~~~~~~~~~")
