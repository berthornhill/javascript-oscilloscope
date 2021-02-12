class Canvas {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;
    this.t = 0.01 / this.canvas.width;
    this.hz = 440;
    this.yAxis = this.canvas.height / 2;
    this.frequency = 2 * Math.PI * this.hz * this.t;
    this.step = this.frequency;
    this.twoPI = 2 * Math.PI;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(0, canvas.height / 2);

    let f = 440;
    let t = 0.1;
    let j = 600;
    let step = 0;

    for (let i = 0; i < this.canvas.width; i++) {
      this.ctx.lineTo(
        i,
        this.canvas.height / 2 +
          Math.sin(i * (2 * Math.PI * f * (t / this.canvas.width)) + step) * 200
      );
    }
    this.ctx.stroke();
  }
}

export default Canvas;
