const musicPlayer = document.getElementById('musicPlayer');
const musicLine = document.querySelector('.musicLine');
const audio = document.querySelector('audio');
let isPlaying = false;

musicPlayer.addEventListener('click', () => {
    musicLine.classList.toggle('show');
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
});