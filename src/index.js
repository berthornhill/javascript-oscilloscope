import "./styles/index.scss";
import canvasDraw from "./scripts/canvas";
import Tone from "./scripts/tone";
import Wave from "./scripts/canvas";
import Display from "./scripts/display";

document.addEventListener("DOMContentLoaded", () => {
  const display = new Display();
});

// document.addEventListener("DOMContentLoaded", () => {
//   // old initiation
//   // canvasDraw();

//   const wave = new Wave();
//   animate = animate.bind(wave);
//   animate();

//   const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
//   // window.Tone = Tone;

//   const nodeContainer = document.getElementById("node-container");
//   const newNodeButton = document.createElement("button");
//   newNodeButton.innerHTML = "New Node";
//   newNodeButton.addEventListener("click", () => {
//     debugger;
//     let tone = new Tone(audioCtx);
//     // tones.push(tone);
//     console.log("Generating tone node. beep boop beep.");
//   });

//   nodeContainer.append(newNodeButton);
// });

// function animate() {
//   debugger;
//   requestAnimationFrame(animate);
//   // this.draw();
//   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

//   this.ctx.beginPath();
//   this.ctx.moveTo(0, canvas.height / 2);

//   for (let i = 0; i < this.canvas.width; i++) {
//     this.ctx.lineTo(
//       i,
//       this.yAxis + Math.sin(i * this.frequency + this.step) * 300
//       // Math.sin(i * this.frequency + this.step) * 300
//     );
//   }
//   this.ctx.stroke();
//   this.step += this.frequency;
//   // this.step > this.canvas.width ? (this.step = 0.01) : (this.step += this.step);
// }

// for (let i = 0; i < this.canvas.width; i++) {
//   this.ctx.lineTo(
//     i,
//     this.canvas.height / 2 +
//       Math.sin(
//         i * (2 * Math.PI * this.hz * (this.t / this.canvas.width)) + this.step
//       ) *
//         200
//   );
// }
