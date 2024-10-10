//guardar una referencia a las etiquetas HTML en JS
var domMouseX = document.getElementById("coordX");
var domMouseY = document.getElementById("coordY");
var mouseY = 0;
var mouseX = 0;

console.log(domMouseX);
console.log(domMouseY);

// definir nuestra funciion imprimir coordenadas
function printCoords(mouseData){
    //recibir las coordenadas del mouse
  //console.log(mouseData.clientX);
  //console.log(mouseData.clientY);
  mouseY= mouseData.clientY;
  mouseX= mouseData.clientX;
    //Asignarlas al elemento HTML
  //domMouseX.innerText = mouseData.clientX;
  domMouseX.innerText = `Mouse X:${mouseX}`;
  domMouseX.style = `translate(${mouseX}px,  ${mouseY}px)`;
  domMouseY.innerText = `Mouse Y:${mouseY}`;
  domMouseY.style = `translate(${mouseY}px,  ${mouseY}px)`;
}

//escuchar el movimiento del mouse del usuario 
document.addEventListener("mousemove", printCoords);

