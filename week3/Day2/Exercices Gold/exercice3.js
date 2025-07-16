let age = [20,5,12,43,98,55];
let c = 0
let d = 0
for (let i = 0; i < age.length; i++) {
    c += age[i]    
}

console.log("The sum of all the numbers :",c)

for (let index = 0; index < age.length; index++) {
    if(d < age[index]){
        d = age[index]
    }
    
}
console.log("Tthe highest age is : " ,d)
