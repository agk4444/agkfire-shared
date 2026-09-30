const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;
document.body.appendChild(canvas);

function drawBoard() {
  const colors = ['red', 'green', 'yellow', 'blue'];
  const squares = [
    { x: 0, y: 0 },
    { x: 300, y: 0 },
    { x: 0, y: 300 },
    { x: 300, y: 300 }
  ];

  // Draw quadrants
  squares.forEach((square, index) => {
    ctx.fillStyle = colors[index];
    ctx.fillRect(square.x, square.y, 300, 300);
  });

  ctx.fillStyle = '#fff';
  ctx.fillRect(200, 200, 200, 200);
  ctx.strokeRect(200, 200, 200, 200);

  ctx.beginPath();
  ctx.moveTo(300, 200);
  ctx.lineTo(300, 400);
  ctx.moveTo(200, 300);
  ctx.lineTo(400, 300);
  ctx.stroke();
}

drawBoard();