const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((element, index) => {
    const ord = (index + 1 === 1) ? ordinal[1] :
                (index + 1 === 2) ? ordinal[2] :
                (index + 1 === 3) ? ordinal[3] : ordinal[0];
    console.log(`${index + 1}${ord} choice is ${element}.`);
});