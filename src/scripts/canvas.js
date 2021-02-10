// const canvasDraw = () => {
//   let canvas = document.getElementById("canvas");
//   let ctx = canvas.getContext("2d");
//   // ctx.fillStyle = "#8becdfc9";
//   // ctx.fillRect(0, 0, canvas.width, canvas.height);

//   canvas.width = innerWidth;
//   canvas.height = innerHeight;

//   ctx.beginPath();
//   ctx.moveTo(0, canvas.height / 2);

//   let f = 440;
//   let t = 0.01;
//   let j = 600;

//   for (let i = 0; i < canvas.width; i++) {
//     ctx.lineTo(
//       i,
//       canvas.height / 2 +
//         (Math.sin(i * (2 * Math.PI * f * (t / canvas.width))) +
//           Math.sin(i * (2 * Math.PI * j * (t / canvas.width)))) *
//           200
//     );
//   }
//   ctx.stroke();
// };

// export default canvasDraw;

class Wave {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;
    this.t = 0.01;
    this.hz = 440;
    this.yAxis = this.canvas.height / 2;
    this.frequency = 2 * Math.PI * this.hz * (this.t / this.canvas.width);
    this.step = this.frequency;
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

  // animate() {
  //   debugger;
  //   requestAnimationFrame(this.animate);
  //   // this.draw();

  //   this.ctx.beginPath();
  //   this.ctx.moveTo(0, canvas.height / 2);

  //   let f = 440;
  //   let t = 0.01;
  //   let j = 600;
  //   let step = 0.01;

  //   for (let i = 0; i < this.canvas.width; i++) {
  //     this.ctx.lineTo(
  //       i,
  //       this.canvas.height / 2 +
  //         Math.sin(i * (2 * Math.PI * f * (t / this.canvas.width)) + step) * 200
  //     );
  //   }
  //   this.ctx.stroke();
  // }
}

export default Wave;
