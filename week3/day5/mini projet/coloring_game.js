
let currentColor = '';
const coloring_area = document.getElementById('coloring-area');

coloring_area.addEventListener('click', function(event){
    if(event.target.classList.contains('color')){
        currentColor = event.target.style.backgroundColor;
    }
})
const clearBtn = document.getElementById('clear-button');

clearBtn.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
});

const container = document.getElementById('container');
let isDrawing = false;

    document.addEventListener('mouseup', () => {
        isDrawing = false;
    });
    
for (let j=0; j<2500; j++){
    const div_container = document.createElement('div');
    div_container.setAttribute('class', 'square');
    div_container.style.backgroundColor = 'white';
    div_container.style.border = '1px solid black';
    
    div_container.addEventListener('mousedown', () => {
        isDrawing = true;
        div_container.style.backgroundColor = currentColor;
    });

    div_container.addEventListener('mouseover', () => {
        if (isDrawing) {
            div_container.style.backgroundColor = currentColor;
        }
    });

    container.appendChild(div_container);

}