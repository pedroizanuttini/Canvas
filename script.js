//Actividad clase 6

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


// 1 - Dibujo del cuadrado
ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(400,400);
ctx.lineTo(400,100);
ctx.lineTo(600,100);
ctx.lineTo(600,300);
ctx.lineTo(400,300)
ctx.fill();
ctx.fillStyle = "blue"
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.strokeStyle()

// 2 - Dibujo del triangulo

ctx.fillStyle = "violet";
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(100,100);
ctx.lineTo(300,100);
ctx.lineTo(200,200);
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.strokeStyle()
// 3 - Dibujo del circulo

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(50,50,20,0, Math.PI *2, false)
ctx.fill()
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.strokeStyle()















// ctx.fillStyle = 'red';
// //             x, y, width, height  
// ctx.fillRect( 20, 20, 200, 100);


// ctx.fillStyle = 'blue';
// ctx.fillRect( 50, 50, 200, 100);

// /* Dibujando rectangulos contorneados */
// ctx.lineWidth = 4;
// ctx.strokeStyle = 'red';
// ctx.strokeRect(0,0,300,200)