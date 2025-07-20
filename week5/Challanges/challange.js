const prompt = require('prompt-sync')();

function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(words) && words.every(word => typeof word === 'string')) {
            const uppercased = words.map(word => word.toUpperCase());
            resolve(uppercased);
        } else {
            reject("Error: Not all elements are strings.");
        }
    });
}

function sortWords(wordsUpper) {
    return new Promise((resolve, reject) => {
        if (wordsUpper.length > 4) {
            const wordsUpperCase = wordsUpper.sort((a, b) => a.localeCompare(b));
            resolve(wordsUpperCase);
        } else {
            reject("Error: Array length is 4 or less.");
        }
    });
}

makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error));

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error));

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJs() {
    return new Promise((resolve, reject) => {
        const objet = JSON.parse(morse);
        if (Object.keys(objet).length !== 0) {
            resolve(objet);
        } else {
            reject("Erreur: objet vide");
        }
    });
}

function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        const morseWord = prompt("Enter a word or sentence: ").toLowerCase();
        const result = [];
        for (let i = 0; i < morseWord.length; i++) {
            const char = morseWord[i];
            if (char === " ") {
                result.push("/");
                continue;
            }
            if (char in morseJS) {
                result.push(morseJS[char]);
            } else {
                reject(`Erreur: le caractère "${char}" n'existe pas dans le dictionnaire Morse.`);
                return;
            }
        }
        resolve(result);
    });
}

function joinWords(morseTranslation) {
    const joined = morseTranslation.join('\n');
    console.log(joined);
}


toJs()
  .then(toMorse)
  .then(joinWords)
  .catch((err) => console.error("Erreur attrapée:", err));