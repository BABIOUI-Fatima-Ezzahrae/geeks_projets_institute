MORSE_CODE_DICT = {
    'A': '.-',     'B': '-...',   'C': '-.-.', 
    'D': '-..',    'E': '.',      'F': '..-.',
    'G': '--.',    'H': '....',   'I': '..',
    'J': '.---',   'K': '-.-',    'L': '.-..',
    'M': '--',     'N': '-.',     'O': '---',
    'P': '.--.',   'Q': '--.-',   'R': '.-.',
    'S': '...',    'T': '-',      'U': '..-',
    'V': '...-',   'W': '.--',    'X': '-..-',
    'Y': '-.--',   'Z': '--..',

    '0': '-----',  '1': '.----',  '2': '..---',
    '3': '...--',  '4': '....-',  '5': '.....',
    '6': '-....',  '7': '--...',  '8': '---..',
    '9': '----.'}
INVERSE_MORSE_CODE_DICT = {value: key for key, value in MORSE_CODE_DICT.items()}

def text_to_morse(text):
    text = text.upper()  
    morse_code = []

    for word in text.split():  
        morse_word = []
        for letter in word:
            if letter in MORSE_CODE_DICT:
                morse_word.append(MORSE_CODE_DICT[letter])
        morse_code.append(" ".join(morse_word))  
    return " / ".join(morse_code)  

def morse_to_text(morse):
    text = []

    for word in morse.split(" / "):  
        letters = []
        for symbol in word.split():  
            if symbol in INVERSE_MORSE_CODE_DICT:
                letters.append(INVERSE_MORSE_CODE_DICT[symbol])
        text.append("".join(letters))  
    return " ".join(text)

print(text_to_morse("HELLO WORLD"))

print(morse_to_text("..... . .-. .-.. --- / .-- --- .-. .-.. -.."))
