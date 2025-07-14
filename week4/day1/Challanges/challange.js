let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries =() =>{groceries.fruits.forEach(element => {
    console.log(element);
});}

displayGroceries();

function cloneGroceries(user) {
    user = 'LOLO';
    console.log(user);
}

// Changing 'user' does not affect 'client' because strings are passed by value (a copy is made)

cloneGroceries(client);

let shopping = groceries;

shopping.totalPrice = "35$";

console.log(shopping)
console.log(groceries.totalPrice)
// Modifying 'shopping.totalPrice' also modifies 'groceries.totalPrice'
// because both variables point to the same object (passed by reference)

shopping.other.paid = false;

console.log(groceries.other.paid)
console.log(shopping.other.paid)

// Modifying 'shopping.other.paid' also modifies 'groceries.other.paid'
// because 'other' is a nested object, and still the same reference