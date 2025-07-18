function areAnagrams(str1, str2) {

  let cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
  let cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();

  let sortedStr1 = cleanStr1.split('').sort().join('');
  let sortedStr2 = cleanStr2.split('').sort().join('');

  if (sortedStr1 === sortedStr2) {
    console.log(`"${str1}" is an anagram of "${str2}"`)
  } else {
    console.log(`"${str1}" isn't an anagram of "${str2}"`)
  }

}

areAnagrams("Astronomer", "Moon starer");
areAnagrams("School master", "The classroom");
areAnagrams("Hello", "World");
 