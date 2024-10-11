const container = document.getElementById('grid');

const circleSize = 60; 
const margin = 10; 

const containerWidth = window.innerWidth;
const containerHeight = window.innerHeight;

const columns = Math.floor(containerWidth / circleSize);
const rows = Math.floor(containerHeight / circleSize);

let counter = 0;
let totalCircles = columns * rows;

while (totalCircles > 0) {
    const circle = document.createElement('div');
    
    circle.classList.add('circle');
    
    if (counter % 2 === 0) {
        circle.style.backgroundColor = 'black'; 
        circle.style.borderColor = 'transparent';
    } else {
        circle.style.backgroundColor = 'transparent';
        circle.style.borderColor = 'blue'; 
    }

    counter++;
    totalCircles--;
    
    container.appendChild(circle);
}