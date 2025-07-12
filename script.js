const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");

// 1. Dibuja el mensaje en el fondo
ctx.fillStyle = "#000000";
ctx.font = "bold 18px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("¿Quieres ser el padrino de Julieta?", canvas.width / 2, canvas.height / 2);

// 2. Cubre todo con la capa "rascable"
ctx.globalCompositeOperation = "source-over";
ctx.fillStyle = "#c0c0c0"; // Color del rasca
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 3. Cambia el modo a "borrar"
ctx.globalCompositeOperation = "destination-out";

let isDrawing = false;

// Función para obtener la posición del puntero/táctil
function getPosition(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (e.touches ? e.touches[0].clientX : e.clientX) - rect.left,
    y: (e.touches ? e.touches[0].clientY : e.clientY) - rect.top
  };
}

// Función para dibujar círculos que borran
function draw(e) {
  if (!isDrawing) return;
  e.preventDefault();
  const pos = getPosition(e);
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 20, 0, Math.PI * 2);
  ctx.fill();
}

// Eventos para ratón y táctil
canvas.addEventListener("mousedown", () => isDrawing = true);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("touchstart", () => isDrawing = true);
canvas.addEventListener("touchend", () => isDrawing = false);
canvas.addEventListener("touchmove", draw);
