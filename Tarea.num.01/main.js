
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let cursorX = canvas.width / 4;
let cursorY = canvas.height / 6;


function dibujarLineas(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;

    
    ctx.beginPath();
    ctx.moveTo(canvas.width / 3, canvas.height / 3); 
    ctx.lineTo(x, y); 
    ctx.stroke();

    
    ctx.beginPath();
    ctx.moveTo(200, 100); 
    ctx.lineTo(x, y); 
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(20, 500); 
    ctx.lineTo(x, y); 
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1200, 500); 
    ctx.lineTo(x, y); 
    ctx.stroke();
}


canvas.addEventListener("mousemove", (evento) => {
    cursorX = evento.clientX;
    cursorY = evento.clientY;
    dibujarLineas(cursorX, cursorY);
});


window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
