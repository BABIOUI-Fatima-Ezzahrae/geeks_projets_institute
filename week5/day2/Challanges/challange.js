const form = document.querySelector("form");
const input = document.getElementById("searchInput");
const resultat = document.getElementById("resultat");
const deleteAllBtn = document.getElementById("delete");

const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const query = input.value.trim();
    if (!query) return;

    try {
        const res = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${query}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();

        const gifUrl = data.data.images.original.url;

        const gifDiv = document.createElement("div");
        const img = document.createElement("img");
        const deleteBtn = document.createElement("button");

        img.src = gifUrl;
        img.alt = query;
        img.style.width = "250px";

        deleteBtn.textContent = "DELETE";
        deleteBtn.addEventListener("click", () => {
            gifDiv.remove();
        });

        gifDiv.appendChild(img);
        gifDiv.appendChild(deleteBtn);
        resultat.appendChild(gifDiv);

        input.value = "";

    } catch (error) {
        console.log("Error:", error);
    }
});

deleteAllBtn.addEventListener("click", () => {
    resultat.innerHTML = "";
});
