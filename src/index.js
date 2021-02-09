import "./styles/index.scss";
import canvasDraw from "./scripts/canvas";
import Tone from "./scripts/tone";

document.addEventListener("DOMContentLoaded", () => {
  canvasDraw();

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  window.Tone = Tone;

  const nodeContainer = document.getElementById("node-container");
  const newNodeButton = document.createElement("button");
  newNodeButton.innerHTML = "New Node";
  newNodeButton.addEventListener("click", () => {
    debugger;
    new Tone(audioCtx);
    console.log("Generating tone node. beep boop beep.");
  });

  nodeContainer.append(newNodeButton);
});
