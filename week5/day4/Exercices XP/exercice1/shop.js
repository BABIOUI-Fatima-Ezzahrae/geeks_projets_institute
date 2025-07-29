const produits = require('./products');

function findProductByName(productName) {
  const product = produits.find((item) => item.name.toLowerCase() === productName.toLowerCase());

  if (product) {
    console.log("✅ The product exist:");
    console.log(`Name : ${product.name}`);
    console.log(`Price : $${product.price}`);
    console.log(`Category : ${product.category}`);
    console.log('----------------------------');
  } else {
    console.log(`The "${productName}" not exist.`);
    console.log('----------------------------');
  }
}

findProductByName("Laptop");
findProductByName("Book");
findProductByName("T-shirt");
findProductByName("Phone");
