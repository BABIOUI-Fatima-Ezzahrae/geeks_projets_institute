let c = 0;
function displayNumbersDivisible(){
    let numbers = [];
    for (let i = 0; i<500; i++) {
        if (i % 23 === 0) {
            numbers.push(i);
            c += i;
        }
    }
    console.log("The numbers divisible by 23 are: ",numbers.join(" "));
    console.log("The sum of all numbers divisible by 23 is: ",c);
}

displayNumbersDivisible();


function displayNumbersDivisibles(divisor) {
    let numbers = [];
    let c = 0;
    for (let i = 0; i < 500; i++) {
        if (i % divisor === 0) {
            numbers.push(i);
            c += i;
        }
    }
    console.log("The numbers divisible by " + divisor + " are: ", numbers.join(" "));
    console.log("The sum of all numbers divisible by " + divisor + " is: ", c);
}

displayNumbersDivisibles(45);