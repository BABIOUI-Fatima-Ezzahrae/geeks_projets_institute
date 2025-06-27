longest_sentence = ''

while True:
    x= input("Can you input the longest sentence without the character 'A': ")
    if x.lower() == "o":
        print("Goodbye! 👋")
        break
    if 'a' in x or 'A' in x:
        print("Don't use 'A' 🙌🤦‍♂️")

    else:
        if len(x)>len(longest_sentence):
            longest_sentence = x
            print("Bravo! You've set a new record!👏👏")
            print(f"Current record: {len(longest_sentence)} characters.")
            
