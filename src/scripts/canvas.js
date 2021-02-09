const canvasDraw = () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  // ctx.fillStyle = "#8becdfc9";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  canvas.width = innerWidth;
  canvas.height = innerHeight;

  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);

  let f = 440;
  let t = 0.01;
  let j = 600;

  for (let i = 0; i < canvas.width; i++) {
    ctx.lineTo(
      i,
      canvas.height / 2 +
        (Math.sin(i * (2 * Math.PI * f * (t / canvas.width))) +
          Math.sin(i * (2 * Math.PI * j * (t / canvas.width)))) *
          200
    );
  }
  ctx.stroke();
};

export default canvasDraw;
