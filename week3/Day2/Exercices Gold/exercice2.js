let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

const prompt = require("prompt-sync")();
let ask_name = prompt("Enter your name please : ").toLowerCase()

if (ask_name in guestList) {
    console.log(`Hi! I'm ${ask_name}, and I'm from ${guestList[ask_name]}.`)
} else {
    console.log("Hi! I'm a guest.")
}