import Tone from "./tone";
import Canvas from "./canvas";

class Display {
  constructor() {
    this.canv = new Canvas();
    this.AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new this.AudioContext();
    this.toneNodes = [];

    this.animateWave = this.animateWave.bind(this);
    this.calculateWave = this.calculateWave.bind(this);
    this.calculateStep = this.calculateStep.bind(this);

    this.createNewNodeButton();
    this.animateWave();
  }

  createNewNodeButton() {
    this.nodeContainer = document.getElementById("node-container");
    this.newNodeButton = document.createElement("button");
    this.newNodeButton.className = "new-node";
    this.newNodeButton.innerHTML = "Add Node";

    this.newNodeButton.addEventListener("click", () => {
      let tone = new Tone(this.audioCtx);
      this.toneNodes.push(tone);
      console.log("Generating tone node. beep boop beep.");
    });

    this.nodeContainer.append(this.newNodeButton);
  }

  animateWave() {
    // debugger;
    requestAnimationFrame(this.animateWave);
    // this.draw();

    this.canv.ctx.fillStyle = "rgba(0,0,0,0.03)";
    this.canv.ctx.fillRect(
      0,
      0,
      this.canv.canvas.width,
      this.canv.canvas.height
    );

    this.canv.ctx.beginPath();
    this.canv.ctx.moveTo(0, canvas.height / 2);

    for (let i = 0; i < this.canv.canvas.width; i++) {
      this.canv.ctx.lineTo(
        i,
        this.canv.yAxis + this.calculateWave(i) * 125
        // Math.sin(i * this.canv.frequency + this.canv.step) * 300
      );
    }

    this.canv.ctx.strokeStyle = "hsl(190, 70%, 50%)";
    this.canv.ctx.stroke();
    this.calculateStep();
  }

  // Math.sin( location * ( 2pi*oscillatorFrequency * t ) + step)
  calculateWave(i) {
    // debugger;
    // if (this.toneNodes.length === 0) return 0;
    let result = 0;

    for (let j = 0; j < this.toneNodes.length; j++) {
      // debugger;
      let node = this.toneNodes[j];
      // debugger;
      result += Math.sin(
        i * (this.canv.twoPI * node.oscillator.frequency.value * this.canv.t) +
          node.step
      );
    }
    // debugger;

    return result;
  }

  //adds step to increment motion of wave.
  calculateStep() {
    // debugger;

    for (let i = 0; i < this.toneNodes.length; i++) {
      // debugger;
      this.toneNodes[i].step += this.incrementStep(this.toneNodes[i]);
      // debugger;
    }
  }

  // return calculates frequency to increment
  incrementStep(node) {
    // debugger;
    return this.canv.twoPI * node.oscillator.frequency.value * this.canv.t;
  }
}

export default Display;
