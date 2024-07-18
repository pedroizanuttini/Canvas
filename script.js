const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


/* Dibujando otras formas con canvas */

ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(100,100);
ctx.lineTo(200,100);
ctx.lineTo(150,15);
ctx.fill();


ctx.fillStyle = "blue";
ctx.beginPath();
//       x   y   R  0°    360°      
ctx.arc(150,200,50,0, Math.PI * 2,false)
ctx.fill()













// ctx.fillStyle = 'red';
// //             x, y, width, height  
// ctx.fillRect( 20, 20, 200, 100);


// ctx.fillStyle = 'blue';
// ctx.fillRect( 50, 50, 200, 100);

// /* Dibujando rectangulos contorneados */
// ctx.lineWidth = 4;
// ctx.strokeStyle = 'red';
// ctx.strokeRect(0,0,300,200)