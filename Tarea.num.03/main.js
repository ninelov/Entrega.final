
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Definir el área central cuadrada
const cuadradoLado = Math.min(canvas.width, canvas.height) * 0.5;
const cuadradoX = (canvas.width - cuadradoLado) / 2;
const cuadradoY = (canvas.height - cuadradoLado) / 2;


let bolas = [];
for (let i = 0; i < 20; i++) {
    bolas.push({
        // Colocar circulos dentro del cuadrado
        x: cuadradoX + Math.random() * cuadradoLado, 
        y: cuadradoY + Math.random() * cuadradoLado, 
        radio: Math.random() * 30 + 10,  // Tamaño inicial
        dx: (Math.random() - 0.5) * 8,   // Velocidad en eje X
        dy: (Math.random() - 0.5) * 8,   // Velocidad en eje Y
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
    });
}


function generarColorAleatorio() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}


function generarTamañoAleatorio() {
    return Math.random() * 30 + 10; // Tamaño entre 10 y 40
}


function dibujarBola(bola) {
    ctx.beginPath();
    ctx.arc(bola.x, bola.y, bola.radio, 0, Math.PI * 2, false);
    ctx.fillStyle = bola.color;
    ctx.fill();
    ctx.closePath();
}

// verificar si una bola pega el borde
function verificarPeriferia(bola) {
    let golpePeriferia = false;

    if (bola.x + bola.radio >= cuadradoX + cuadradoLado || bola.x - bola.radio <= cuadradoX ||
        bola.y + bola.radio >= cuadradoY + cuadradoLado || bola.y - bola.radio <= cuadradoY) {
        golpePeriferia = true;
    }

    return golpePeriferia;
}

// actualizar la posición y el tamaño de las bolas
function actualizarBolas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

    // Dibujar el cuadrado en el centro
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.strokeRect(cuadradoX, cuadradoY, cuadradoLado, cuadradoLado);

    bolas.forEach(bola => {
        // Movimiento de la bola
        bola.x += bola.dx;
        bola.y += bola.dy;

        // Comportamiento: Rebotar en los bordes del cuadrado central
        if (bola.x + bola.radio > cuadradoX + cuadradoLado || bola.x - bola.radio < cuadradoX) {
            bola.dx = -bola.dx; // Invertir la dirección en X
        }

        if (bola.y + bola.radio > cuadradoY + cuadradoLado || bola.y - bola.radio < cuadradoY) {
            bola.dy = -bola.dy; // Invertir la dirección en Y
        }

        // Verificar si la bola golpea borde
        if (verificarPeriferia(bola)) {
            bola.color = generarColorAleatorio(250,20,25);  
            bola.radio = generarTamañoAleatorio(250,20,23); 
        }

       
        dibujarBola(bola);
    });

    requestAnimationFrame(actualizarBolas); // Animación continua
}

// Ajustar el tamaño del canvas cuando se cambia el tamaño de la ventana
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const nuevoCuadradoLado = Math.min(canvas.width, canvas.height) * 0.5;
    cuadradoX = (canvas.width - nuevoCuadradoLado) / 2;
    cuadradoY = (canvas.height - nuevoCuadradoLado) / 2;
});


actualizarBolas();
