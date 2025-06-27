paragraph = """Learning to code is like learning a new language. It requires practice, patience, and curiosity. With time, anyone can develop the skills needed to solve problems and build amazing things with technology."""

Characters = len(paragraph)
c = 0

for i in paragraph:
    if i in ['.', '?', '!']:
        c += 1
words = paragraph.split()

unique_words = set(words)

non_whitespace_chars = len(paragraph.replace(" ", ""))

repeated_words = len(words) - len(unique_words)

moyen = len(words) / c


print("Characters:", Characters)
print("Sentences:", c)
print("Words:", len(words))
print("Unique words:", len(unique_words))
print("Non-whitespace characters:", non_whitespace_chars)
print("Non-unique words:", repeated_words)
print("Average words per sentence:", moyen)
