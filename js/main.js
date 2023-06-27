document.addEventListener("DOMContentLoaded", function() {
  function playSound() {
    // Mapeamento das teclas para os botões e áudios correspondentes
    const keyMappings = {
      "7": { button: "uepa", audio: "uepa" },
      "8": { button: "cavalo", audio: "cavalo" },
      "9": { button: "ui", audio: "ui" },
      "4": { button: "sad-music", audio: "sad-music" },
      "5": { button: "loba", audio: "loba" },
      "6": { button: "tomi", audio: "tomi" },
      "1": { button: "emotional", audio: "emotional" },
      "2": { button: "my-god", audio: "my-god" },
      "3": { button: "sad-violin", audio: "sad-violin" },
    };

    let elementButton = document.querySelectorAll("button");

    // Adiciona o evento de clique aos botões
    elementButton.forEach((selectedAudio) => {
      selectedAudio.addEventListener("click", () => {
        playAudio(selectedAudio.dataset.button); // Chama a função playAudio passando o valor do botão como parâmetro
      });
    });

    document.onkeydown = function(event) {
      const key = event.key;
      const keyMapping = keyMappings[key];
      if (keyMapping) {
        const audioKey = document.querySelector(`button[data-button="${keyMapping.button}"]`);
        if (audioKey) {
          playAudio(audioKey.dataset.button); // Chama a função playAudio passando o valor do botão correspondente à tecla pressionada
        }
      }
    };

    // Função para reproduzir o áudio
    function playAudio(buttonValue) {
      const playAudio = document.querySelector(`audio[data-value="${buttonValue}"]`);
      document.querySelectorAll("audio").forEach((selectedAudio) => selectedAudio.pause()); // Pausa todos os áudios
      playAudio.currentTime = 0;
      playAudio.play();
      document.querySelectorAll(".sound__key")[0].classList.add("ativa");
    }
  }

  playSound();
});
