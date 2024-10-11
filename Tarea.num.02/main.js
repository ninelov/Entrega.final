
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const colores = ["red", "azulblue", "yellow", "green", "purple", "orange", "pink"];


let posiciones = [
    {x: canvas.width / 2 - 200, y: canvas.height / 2 + 100},
    {x: canvas.width / 2 - 100, y: canvas.height / 2 + 50},
    {x: canvas.width / 2, y: canvas.height / 2},
    {x: canvas.width / 2 + 100, y: canvas.height / 2 - 50},
    {x: canvas.width / 2 + 200, y: canvas.height / 2 - 100}
];


function dibujarCírculo(x, y, radio, color) {
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function crearFiguras() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    for (let i = 0; i < posiciones.length; i++) {
        let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        dibujarCírculo(posiciones[i].x, posiciones[i].y, 40, colorAleatorio);
    }
}


function animar() {
    crearFiguras();
    requestAnimationFrame(animar); 
}


animar();
