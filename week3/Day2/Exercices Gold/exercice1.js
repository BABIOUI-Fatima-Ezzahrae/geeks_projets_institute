let numbers = [123, 8409, 100053, 333333333, 7]

for (let index = 0; index < numbers.length; index++) {
    console.log(`${numbers[index]} is divisible by 3?`)
    if (numbers[index] % 3 === 0) {
        console.log(true)
    }else{
        console.log(false)
    }
}