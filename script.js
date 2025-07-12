const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");

// 1. Dibuja primero fondo blanco por si acaso
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 2. Dibuja el texto que se revelará
ctx.fillStyle = "#000000";
ctx.font = "bold 18px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("¿Quieres ser el padrino de Julieta?", canvas.width / 2, canvas.height / 2);

// 3. Capa gris encima que será "rascable"
ctx.globalCompositeOperation = "source-over";
ctx.fillStyle = "#c0c0c0";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 4. Activamos modo borrado
ctx.globalCompositeOperation = "destination-out";

let isDrawing = false;

function getPosition(e) {
  const rect = canvas.getBoundingClientRect();
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
  ctx.arc(pos.x, pos.y, 20, 0, Math.PI * 2);
  ctx.fill();
}

canvas.addEventListener("mousedown", () => isDrawing = true);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("touchstart", () => isDrawing = true);
canvas.addEventListener("touchend", () => isDrawing = false);
canvas.addEventListener("touchmove", draw);
