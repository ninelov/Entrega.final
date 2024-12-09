const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawCircles();
}

function drawCircles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const circleRadius = 10;
    const circleSpacing = 30;
    const columnCenterX = canvas.width / 2; 

    let currentY = circleRadius + circleSpacing;

    while (currentY < canvas.height - circleRadius) {
        ctx.beginPath();
        ctx.arc(columnCenterX, currentY, circleRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'blue'; 
        ctx.lineWidth = 6; 
        ctx.stroke(); 
        ctx.closePath();

        currentY += circleRadius * 2 + circleSpacing;
    }
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();