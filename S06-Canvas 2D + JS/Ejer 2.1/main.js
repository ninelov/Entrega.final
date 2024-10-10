/*///// Código del ejercicio de configuración de canvas y animación (S05. Ex.03.) ///*/
const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
  CANVAS.width = CANVAS.getBoundingClientRect().width;
  CANVAS.height = CANVAS.getBoundingClientRect().height;
}



/*///// 1. Primero creamos una función para renderizar las figuras que queremos para simplificar el código que escribiremos en los ciclos for y while ///*/
function renderCircleRed(x, y) {
    CTX.fillStyle = "red";
    CTX.beginPath();
    CTX.ellipse(x, y, 15, 15, 0, 0, PI2);
    CTX.fill();
}

function renderCircleGreen(x, y) {
    CTX.fillStyle = "red";
    CTX.beginPath();
    CTX.ellipse(x, y, 15, 15, 0, 0, PI2);
    CTX.fill();
}



/*///// 2. Creamos las variables que estaremos modificando en cada frame, en este caso las variables de posición de las figuras y el contador que necesitamos para el "ciclo while" ya que no cuenta con uno como lo tiene el "ciclo for" ///*/
let redCircleX = 0;
let greenCircleX = 0;
let whileCounter = 0;

function frame() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    /*///// 3. Después de haber limpiado el canvas, creamos el primer ciclo for para renderizar 10 círculos en este ejemplo ///*/
    for (let i = 0; i < 10; i++) {
        redCircleX = i * 35; // Aquí estamos calculando la posición de cada círculo, con una distancia igual entre todos de 35 pixeles entre su centro, el primer circulo estará en la coordenada x 0 * 35, que es 0; el segundo estará en 1 * 35, que es 35; el tercero en 2 * 35 que es igual a 70, y así sucesivamente.
        renderCircleRed(redCircleX, 35);
    }


    whileCounter = 0; // Para el contador del ciclo while, necesitamos reiniciarl en cada frame a 0, así como en la sintaxis del ciclo for, cada vez que se ejecuta, el indice "i" vale 0, aqui lo estamos haciendo nosotros ya que while no cuenta con esa variable indice en su declaración.

    greenCircleX = 0; // De igual forma, debemos reiniciar la posición del círculo verde para que se cumple la condición al ejecutar nuestro código en el siguiente frame.

    while (greenCircleX < window.innerWidth) {
        /*
            La condición que estamos estableciendo para ejecutar es que la posición del último círculo verde esté dentro de los límites del canvas, o dicho de otra manera, que haya espacio para dibujar otro círculo dentro del canvas, así dependiendo del tamaño de la pantalla dibujaremos una cantidad diferente de círculos.
        */
        greenCircleX = whileCounter * 60;
        renderCircleGreen(greenCircleX, 90);

        whileCounter++; // Similar al ciclo for, estamos usando el operador "++" para incrementar en 1 unidad a cada repetición del ciclo while
    }

    requestAnimationFrame(frame);
}



/*///// Paso Final. Ejecutar nuestro código ///*/
window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(frame);


// Documentacion sobre los ciclos for, while y otros disponibles:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration