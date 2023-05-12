// plays audio when clicking with the mouse
let elementButton = document.querySelectorAll("button");

elementButton.forEach((selectedAudio) => {
  selectedAudio.addEventListener("click", () => {
    let playAudio = document.querySelector(`audio[data-value="${selectedAudio.dataset.button}"]`);
    document
      .querySelectorAll("audio")
      .forEach((selectedAudio) => selectedAudio.pause()); // When clicking on another audio, it interrupts the previous one
      playAudio.currentTime = 0; // reset audio
      playAudio.play();
  });
});
