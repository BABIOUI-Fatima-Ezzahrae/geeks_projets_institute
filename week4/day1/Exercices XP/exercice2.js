const winBattle = () => true;

console.log(winBattle());

let experiencePoints;
if(winBattle() === true){
    experiencePoints = 10;
}
else{
    experiencePoints = 1;
}
console.log(experiencePoints);t