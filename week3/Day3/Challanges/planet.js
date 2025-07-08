let planets = [
    {
        name : "Mercury",
        moons : 0,
        backgroundColor: "gray"
    },
    {
        name : "Venus",
        moons : 0,
        backgroundColor: "yellow"
    },
    {
        name : "Earth",
        moons : 1,
        backgroundColor: "blue"
    },
    {
        name : "Mars",
        moons : 2,
        backgroundColor: "red"
    },
    {
        name : "Jupiter",
        moons : 79,
        backgroundColor: "orange"
    },
    {
        name : "Saturn",
        moons : 83,
        backgroundColor: "gold"
    },
    {
        name : "Uranus",
        moons : 27,
        backgroundColor: "lightblue"
    },
    {
        name : "Neptune",
        moons : 14,
        backgroundColor: "darkblue"
    }
]

let section = document.querySelector("section");
section.style.display = "flex";

for (let i = 0; i < planets.length; i++) {
        let div =  document.createElement("div");
        div.className = "planet";
        div.classList.add(planets[i].name.toLowerCase());
        section.appendChild(div);
        div.style.backgroundColor = planets[i].backgroundColor;
        div.style.top = `${20 + i * 30}px`;
        div.style.left = `${20 + i * 40}px`;
        

    for (let j = 0; j < planets[i].moons; j++) {
        let moon = document.createElement("div");
        moon.className = "moon";
        moon.classList.add(planets[i].name.toLowerCase() + "-moon")

        moon.style.left = `${20 + j * 5}px`;
        moon.style.top = `${20 + j * 15}px`;

        div.appendChild(moon);
    }
};
