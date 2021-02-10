import canvasDraw from "./canvas";

class Tone {
  constructor(context) {
    debugger;
    this.context = context;
    this.playing = false;
    this.nodeEle = this.generateToneControllers();
  }

  initialize() {
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    this.gainNode.gain.value = 0.5;

    this.oscillator.type = "sine";
    this.oscillator.frequency.setValueAtTime(440, this.context.currentTime);
    this.oscillator.detune.value = 100;
  }

  detune(hz) {
    this.oscillator.frequency.value = hz;
  }

  play() {
    this.initialize();
    this.oscillator.start();
  }

  adjustGain(volume) {
    debugger;
    this.gainNode.gain.value = volume;
    debugger;
  }

  stop() {
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, 1);
    this.oscillator.stop(1.5);
    this.nodeEle.remove();
  }

  generateToneControllers() {
    debugger;
    const toneList = document.getElementById("toneList");
    const toneLi = document.createElement("li");
    toneList.append(toneLi);

    // play/stop button
    const playButton = document.createElement("button");
    playButton.innerHTML = "Play Tone";
    playButton.addEventListener("click", () => {
      if (!this.playing) {
        this.play();
        this.playing = true;
        playButton.innerHTML = "Remove Node";
      } else {
        this.stop();
      }
    });

    // volume control

    const volumeSlider = document.createElement("input");
    volumeSlider.type = "range";
    volumeSlider.min = 0.0;
    volumeSlider.max = 1.0;
    volumeSlider.value = 0.5;
    volumeSlider.step = 0.01;
    volumeSlider.className = "volume";

    volumeSlider.addEventListener("change", (event) => {
      debugger;
      this.adjustGain(event.target.value);
    });

    // pitchBar or tone adjustment range-slider
    const pitchBar = document.createElement("input");
    pitchBar.type = "range";
    pitchBar.min = 20;
    pitchBar.max = 4000;
    pitchBar.value = 440;
    pitchBar.className = "pitch-bar";

    pitchBar.addEventListener("change", (event) => {
      // debugger;
      this.detune(event.target.value);
    });

    toneLi.append(playButton);
    toneLi.append(volumeSlider);
    toneLi.append(pitchBar);
    return toneLi;
  }

  // canvasDraw() {
  //   let canvas = document.getElementById("canvas");
  //   let ctx = canvas.getContext("2d");
  //   // ctx.fillStyle = "#8becdfc9";
  //   // ctx.fillRect(0, 0, canvas.width, canvas.height);
  //   debugger;
  //   canvas.width = innerWidth;
  //   canvas.height = innerHeight;

  //   ctx.beginPath();
  //   ctx.moveTo(0, canvas.height / 2);

  //   let f = 440;

  //   // let f = this.oscillator.frequency.value || 0;
  //   let t = 0.01;

  //   for (let i = 0; i < canvas.width; i++) {
  //     ctx.lineTo(
  //       i,
  //       canvas.height / 2 +
  //         Math.sin(i * (2 * Math.PI * f * (t / canvas.width))) * 500
  //     );
  //   }
  //   ctx.stroke();
  // }
}

export default Tone;
