console.log(convertToGrams(5.75)+"g");
function convertToGrams(x) {
    return (x * 1000);
}

const convertToGramsExpr = function(s){
    return s*1000;
} 
console.log(convertToGramsExpr(25)+'g')


// Function expression is stored in a variable, unlike declaration which is hoisted.

const convertGram = (y) => y*1000
console.log(convertGram(10)+'g')