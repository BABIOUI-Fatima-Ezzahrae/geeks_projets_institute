const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((element, index) => {
        console.log(`${index+1}# choice is ${element}`);    
});
// methode1:
if(colors.includes("Violet")){
    console.log("Yeah")
}else{
    console.log("No...")
}
// methode2:
if(colors.some(color => color === "Violet")){
    console.log("Yeah")
}else{
    console.log("No...")
}