import "./styles/index.scss";

import Display from "./scripts/display";

document.addEventListener("DOMContentLoaded", () => {
  const display = new Display();
});

const modal = document.getElementById("entry-modal");

modal.addEventListener("click", () => {
  let modalScreen = document.getElementById("modal-screen");
  let modalContent = document.getElementById("modal-content");

  modalContent.classList.add("hide");
  modalScreen.classList.add("hide");

  setTimeout(function () {
    modal.className = "modal";
  }, 1000);
});

const aboutModal = document.getElementById("about-modal");

const aboutButton = document.getElementById("about");
aboutButton.addEventListener("click", () => {
  aboutModal.classList.add("showing");
});

const aboutClose = document.getElementById("close-button");
aboutClose.addEventListener("click", () => {
  let modalScreen = document.getElementById("about-modal-screen");
  let modalContent = document.getElementById("about-modal-content");
  debugger;
  modalContent.classList.add("hide");
  modalScreen.classList.add("hide");

  setTimeout(function () {
    debugger;
    aboutModal.className = "modal";
    modalContent.className = "modal-content";
    modalScreen.className = "modal-screen";
  }, 700);
});
