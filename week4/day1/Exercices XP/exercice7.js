(function (name) {
    const nav = document.querySelector('nav');
    const div = document.createElement('div');
    const image = document.createElement('img');
    const Span = document.createElement('span');

    image.src = 'https://tiermaker.com/images/chart/chart/anime-character-raouf-665484/10724558amjpg.png';
    image.alt = 'Profile picture';
    image.style.borderRadius = "100%";
    image.style.height = "70px";
    image.style.width = "70px";
    Span.style.fontSize = "40px";
    Span.textContent = name;
    div.appendChild(image);
    div.appendChild(Span);
    nav.appendChild(div);
})('Raouf');