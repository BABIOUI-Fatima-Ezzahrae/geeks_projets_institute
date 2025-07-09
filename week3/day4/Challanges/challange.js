const form = document.getElementById("libform");
const storyEl = document.getElementById("story");
const shuffleButton = document.getElementById("shuffle");

let currentInputs = {};
let lastIndex = -1;

const stories = [
  (noun, adjective, person, verb, place) => `${person} went to the ${place} to ${verb} a ${adjective} ${noun}.`,
  (noun, adjective, person, verb, place) => `In the ${place}, ${person} saw a ${adjective} ${noun} and started to ${verb}.`,
  (noun, adjective, person, verb, place) => `${person} tried to ${verb} a ${noun} at the ${place}, but it was too ${adjective}!`
];


form.addEventListener("submit", function(event) {
  event.preventDefault();

  const noun = document.getElementById("noun").value.trim();
  const adjective = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();

  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill in all fields.");
    return;
  }

  currentInputs = { noun, adjective, person, verb, place };

  const story = stories[0](noun, adjective, person, verb, place);
  storyEl.textContent = story;
  lastIndex = 0;
});

// Handle Shuffle
shuffleButton.addEventListener("click", function() {
  if (Object.keys(currentInputs).length === 0) {
    alert("Please submit the form first!");
    return;
  }

  const { noun, adjective, person, verb, place } = currentInputs;

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * stories.length);
  } while (randomIndex === lastIndex && stories.length > 1);

  lastIndex = randomIndex;

  const story = stories[randomIndex](noun, adjective, person, verb, place);
  storyEl.textContent = story;
});
