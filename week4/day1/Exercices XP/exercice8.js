function makeJuice (size) {
    const ingredients = [];

    function addIngredients (ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice () {
        const all_ings = ingredients.join(', ');
        const sentence = `The client wants a ${size} juice, containing ${all_ings}.`;

        const P = document.createElement('p');
        P.textContent = sentence
        document.body.appendChild(P);
    }

     addIngredients('apple', 'banana', 'orange');
    addIngredients('pineapple', 'mango', 'strawberry');

    displayJuice();
}
makeJuice('small')

