const search = document.getElementById('search')
const contenue = document.getElementById('contenue')

search.addEventListener('click', getRandomCharacter)

async function getRandomCharacter() {
    contenue.innerHTML = `
          <div class="loading">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Loading...</p>
          </div>`
    const randmId = Math.floor(Math.random() * 83) + 1
    try {
        const cherche = await fetch(`https://www.swapi.tech/api/people/${randmId}`)
        const data = await cherche.json()

        if (!data.result) {
            throw new Error("Person not found")
        } 
        const person = data.result.properties
        const planetRes = await fetch(person.homeworld)
        const planetData = await planetRes.json()
        const homeworld = planetData.result.properties.name

        contenue.innerHTML = `
            <p><strong>Name:</strong> ${person.name}</p>
            <p><strong>Height:</strong> ${person.height}</p>
            <p><strong>Gender:</strong> ${person.gender}</p>
            <p><strong>Birth Year:</strong> ${person.birth_year}</p>
            <p><strong>Home World:</strong> ${homeworld}</p>`

    } catch (error) {
        contenue.innerHTML = `
            <p>Oh No! That person isn't available.</p>`
    }
}
