// [2] === [2] <===>False
// {} === {} <====>False
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5 };

object1.number = 4;

console.log(object2.number)
console.log(object3.number)
console.log(object4.number)

// object1, object2, and object3 share the same reference, so updating object1.number affects all of them.
// object4 is a new separate object, so it keeps its own value.

class Animal {
    constructor(animal_name, type, color) {
        this.animal_name = animal_name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    constructor(animal_name, type, color) {
        super(animal_name, type, color)
    }
    sound(Animalsound) {
        return `${Animalsound} I'm a ${this.type}, named ${this.animal_name} and I'm ${this.color}.`
    }
}

const farmerCow = new Mammal("Lily", "cow", "brown and white");

console.log(farmerCow.sound("Moooo"));
