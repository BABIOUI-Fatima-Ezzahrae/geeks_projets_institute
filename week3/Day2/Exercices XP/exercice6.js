const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
};

const keysOrder = ["my", "is", "the"];
let sentence = "";
for (let i = 0; i < keysOrder.length; i++) {
    let key = keysOrder[i];
  sentence += key + " " + details[key] + " ";
}
console.log(sentence.trim());