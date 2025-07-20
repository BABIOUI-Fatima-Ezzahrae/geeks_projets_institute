function resolve4Seconds() {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Success")
        }, 4000)
    })
}

resolve4Seconds()
 .then(result => console.log(result))
 .catch(error => console.log(error))