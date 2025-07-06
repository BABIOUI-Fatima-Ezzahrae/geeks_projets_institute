const people = ["Greg", "Mary", "Devon", "James"];

people.splice(0, 1); // Remove "Greg"
console.log(people);

people[2] = "John";
console.log(people);

people.push("Fatima Ezzahrae");
console.log(people);

console.log("L'index de Mary est : "+people.indexOf("Mary"));

new_list =  people.slice();
console.log("La copie de liste 'people' : ",new_list);

console.log(people.indexOf("Foo"));

let last =  people[people.length - 1];
console.log(last);

for (let i = 0; i < people.length; i++) {
    const element = people[i];
    console.log(element);
}

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
    }
}