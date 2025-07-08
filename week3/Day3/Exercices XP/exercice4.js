const prompt = require('prompt-sync')();
    
function hotelCost() {
    let nights;
    do {
        nights = parseInt(prompt("How many nights will you stay?"));
        if (isNaN(nights) || nights < 0) {
            console.log("Please enter a valid number of nights.");
        }
    } while (isNaN(nights) || nights < 0);

    return nights * 140;
}

function planeRideCost(destination) {
    const destinations = {
        "London": 183,
        "Paris": 220,
        "Other": 300
    };
    
    return destinations[destination] || destinations["Other"];
    
}

function rentalCarCost(days) {
    let cost = days * 40;
    if (days >= 7) {
        cost -= 50;
    } else if (days >= 3) {
        cost -= 20;
    }
    return cost;
}

function totalVacationCost() {
    let destination = prompt("Enter your destination (London, Paris, Other):");
    while (!["London", "Paris", "Other"].includes(destination)) {
        console.log("Please enter a valid destination.");
        destination = prompt("Enter your destination (London, Paris, Other):");
    }

    let nights = hotelCost();
    let planeCost = planeRideCost(destination);
    let days = parseInt(prompt("How many days will you rent a car?"));
    
    while (isNaN(days) || days < 0) {
        console.log("Please enter a valid number of days for car rental.");
        days = parseInt(prompt("How many days will you rent a car?"));
    }
    
    let carCost = rentalCarCost(days);
    
    let totalCost = nights + planeCost + carCost;
    
    console.log(`Your total vacation cost is: $${totalCost}`);
}

totalVacationCost();