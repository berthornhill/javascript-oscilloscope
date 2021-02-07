import "./styles/index.scss";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World");

  // debugger;
  const helloWorld = document.createElement("h1");
  helloWorld.innerText = "Sound ON!";
  document.body.append(helloWorld);

  const startButton = document.createElement("button");
  startButton.innerHTML = "Start Play";

  document.body.append(startButton);

  // debugger;

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  const initialVol = 0.005;

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  // oscillator.start();

  gainNode.gain.value = initialVol;

  let playing = false;

  startButton.addEventListener("click", function () {
    if (!playing) {
      oscillator.start();
      playing = true;
    } else {
      oscillator.stop();
      playing = false;
    }
  });
});
