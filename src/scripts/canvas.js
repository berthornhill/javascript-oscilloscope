const canvasDraw = () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "#8becdfc9";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  



};

export default canvasDraw;
