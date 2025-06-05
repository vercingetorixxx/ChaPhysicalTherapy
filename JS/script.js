const musicPlayer = document.getElementById('musicPlayer');
const musicLine = document.querySelector('.musicLine');

musicPlayer.addEventListener('click', () => {
    musicLine.classList.toggle('show');
});