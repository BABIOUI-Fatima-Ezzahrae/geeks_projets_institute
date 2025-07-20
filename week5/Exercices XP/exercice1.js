function compareToTen(number) {
    return new Promise((resolve, reject) => {
        if (number <= 10) {
            resolve(`${number} is less than or equal to 10`)
        } else {
            reject(`${number} is greater than 10`)
        }
    })
}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))