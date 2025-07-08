const allBooks = [
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        image: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg",
        alreadyRead: true
    },
    {
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        image: "https://eloquentjavascript.net/img/cover.jpg",
        alreadyRead: false
    }
];

let section = document.querySelector("section");

allBooks.forEach(book => {
    let div = document.createElement("div");
    let title = document.createElement("h2");
    let author = document.createElement("p");
    let image = document.createElement("img");

    title.textContent = book.title;
    author.textContent = `${book.title} written by ${book.author}`;
    image.src = book.image;
    image.style.width = "150px";

    if (book.alreadyRead) {
        title.style.color = "red";
        author.style.color = "red";
    }

    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(image);
    section.appendChild(div);
});
