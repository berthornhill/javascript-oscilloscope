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
    this.gainNode.value = 0.002;

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
    this.gainNode.value = volume;
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

    // tone range-slider
    const pitchBar = document.createElement("input");
    pitchBar.type = "range";
    pitchBar.min = 20;
    pitchBar.max = 4000;
    pitchBar.value = 440;
    pitchBar.classname = "pitch-bar";

    pitchBar.addEventListener("change", (event) => {
      debugger;
      this.detune(event.target.value);
    });

    toneLi.append(playButton);
    toneLi.append(pitchBar);
    return toneLi;
  }
}

export default Tone;
