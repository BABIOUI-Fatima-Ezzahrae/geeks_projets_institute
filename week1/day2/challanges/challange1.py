word_diction = {}
word = input("give me a word : ")

for i in range(len(word)):
    letter = word[i]
    if letter in word_diction:    
        word_diction[letter].append(i)
    else:
        word_diction[letter] = [i]
print(word_diction)