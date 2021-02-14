import canvasDraw from "./canvas";

class Tone {
  constructor(context) {
    debugger;
    this.context = context;
    this.playing = false;
    this.nodeEle = this.generateToneControllers();
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    // this.gainNode.gain.value = 0.5;
    this.gainNode.gain.setValueAtTime(0.5, context.currentTime);

    // setting wave type, "sine" and initial value at 440Hz, or A 440.
    // detune value is set to 100 and referenced in cents.

    this.oscillator.type = "sine";
    this.oscillator.frequency.setValueAtTime(440, this.context.currentTime);
    this.oscillator.detune.value = 100;

    // step keeps track of the motion of the wave.
    // starting value is always based off frequency and incremented from there
    // it will be reset every change in oscillator frequency.

    this.step;
    this.setStep();

    // setting these two constants to reference and not calculate every animate loop

    this.twoPI = 2 * Math.PI;
    this.t = 0.01 / 1600;
  }

  // sets frequency after change from user. Also resets step value to new frequency.
  detune(hz) {
    // this.oscillator.frequency.value = hz;
    this.oscillator.frequency.setValueAtTime(hz, this.context.currentTime);
    this.setStep();
  }

  adjustGain(volume) {
    // debugger;
    // this.gainNode.gain.value = volume;
    this.gainNode.gain.setValueAtTime(volume, this.context.currentTime);
    // debugger;
  }

  // this.frequency = 2 * Math.PI * this.hz * (this.t / this.canvas.width);

  setStep() {
    this.step = this.twoPI * this.oscillator.frequency.value * this.t;
  }

  play() {
    // this.initialize();
    this.oscillator.start();
    this.setStep();
  }

  stop() {
    // debugger;
    this.gainNode.gain.linearRampToValueAtTime(0, this.context.currentTime + 1);
    // this.gainNode.gain.linearRampToValueAtTime(0.01,this.context.currentTime + 1);

    // this.oscillator.frequency.setValueAtTime(
    //   0,
    //   this.context.currentTime + 0.01
    // );
    // debugger;
    this.oscillator.frequency.value = 0;
    this.oscillator.frequency.setValueAtTime(0, this.context.currentTime);

    this.oscillator.stop(1);

    // debugger;

    this.setStep();
    this.nodeEle.remove();
  }

  generateToneControllers() {
    // debugger;
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
    volumeSlider.step = 0.01;
    volumeSlider.value = 0.5; // 1.0
    volumeSlider.className = "volume";
    // debugger;

    volumeSlider.addEventListener("change", (event) => {
      // debugger;
      this.adjustGain(event.target.value);
    });

    // pitchBar or tone adjustment range-slider
    const pitchBar = document.createElement("input");
    pitchBar.type = "range";
    pitchBar.min = 20;
    pitchBar.max = 3000;
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
}

export default Tone;
