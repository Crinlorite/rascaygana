const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");

const message = "¿Quieres ser el padrino de Julieta?";
ctx.font = "20px Arial";
ctx.fillStyle = "#000";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText(message, canvas.width / 2, canvas.height / 2);

// Rellenamos con "rasca"
ctx.globalCompositeOperation = "source-over";
ctx.fillStyle = "#c0c0c0";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Activamos el borrado
ctx.globalCompositeOperation = "destination-out";

let isDrawing = false;

function getPosition(e) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: (e.touches ? e.touches[0].clientX : e.clientX) - rect.left,
    y: (e.touches ? e.touches[0].clientY : e.clientY) - rect.top
  };
}

function draw(e) {
  if (!isDrawing) return;
  e.preventDefault();
  const pos = getPosition(e);
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 15, 0, Math.PI * 2);
  ctx.fill();
}

canvas.addEventListener("mousedown", () => isDrawing = true);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("touchstart", () => isDrawing = true);
canvas.addEventListener("touchend", () => isDrawing = false);
canvas.addEventListener("touchmove", draw);
