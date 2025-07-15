const gameInfos = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

const usernames = []
gameInfos.forEach(element => {
    usernames.push(element.username + "!");
});
console.log(usernames);

const winners  = []
gameInfos.forEach(element => {
    if(element.score > 5){
        winners .push(element.username);
    }
});
console.log(winners );

let total_score = 0;
gameInfos.forEach(element => {
    total_score += element.score;
});
console.log(total_score );