const disc = document.getElementById("disc");
const audio = document.getElementById("audioPlayer");

disc.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        disc.classList.add("spin");
    } else {
        audio.pause();
        disc.classList.remove("spin");
    }
});
