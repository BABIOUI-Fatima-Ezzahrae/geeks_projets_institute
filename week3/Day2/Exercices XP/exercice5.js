const family = {
    father: "Alice",
    mother:  "Diana",
    son: "David",
    daughter: "Lynda"
};

for(let key in family){
    console.log("Key : ", key);
}

for(let key in family){
    console.log("Value : ", family[key]);
}

