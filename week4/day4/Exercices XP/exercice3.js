const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

const jsonMarioGame = JSON.stringify(marioGame);
console.log(jsonMarioGame);

// Nested objects are also converted into JSON format and included in the final string.
// The full structure is preserved, but everything becomes part of a string.

const jsonMarioGame1 = JSON.stringify(marioGame, null, 2);
debugger;
console.log(jsonMarioGame1);

