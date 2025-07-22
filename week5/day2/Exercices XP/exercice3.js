async function asyncData() {
    try {
        const output = await fetch("https://www.swapi.tech/api/starships/9/")

        if (!output.ok) {
            throw new Error(`HTTP error! status: ${output.status}`)
        }
        const objetStarWars = await output.json()
        console.log(objetStarWars.result)
    } catch (error) {
        console.log(error)
    }
}

asyncData();