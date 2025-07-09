const container = document.getElementById("container");
const animate = document.getElementById("animate");

function myMove() {
    let pos = 0;
    const maxPosition = container.offsetWidth - animate.offsetWidth;
    const position = setInterval(()=>{
        if(pos >= maxPosition){
            clearInterval(position);
        }else{
            pos++;
            animate.style.left = pos+"px";
        }
    }, 1);
}