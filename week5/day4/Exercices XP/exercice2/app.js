const peoples = require('./data.js');

function AgeCalcul(personArray) {
    if (personArray.length === 0) {
        console.log("No people to calculate age.");
        return;
    }
    try {
        const totalAge = personArray.reduce((sum,person) => sum + person.age, 0);
        const avergeAge = totalAge / personArray.length;

        console.log(`Average Age: ${averageAge.toFixed(2)}`);
    } catch (error) {
        
    }
}

AgeCalcul(peoples);