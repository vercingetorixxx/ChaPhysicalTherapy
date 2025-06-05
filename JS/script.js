// Music Player

const musicPlayer = document.getElementById('musicPlayer');
const musicLine = document.querySelector('.musicLine');
const audio = document.querySelector('audio');
let isPlaying = false;

audio.volume = 0.4;

musicPlayer.addEventListener('click', () => {
    musicLine.classList.toggle('show');
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
});



// Video Error Refresh

document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('video');

    // Detect errors during loading
    video.addEventListener('error', () => {
        console.log('Video failed to load. Refreshing page...');
        location.reload();
    });

    // Check if the video is ready after a timeout
    setTimeout(() => {
        if (video.readyState < 3) { // Less than 3 means not enough data to play
            console.log('Video not ready. Refreshing page...');
            location.reload();
        }
    }, 5000); // Wait 5 seconds to allow loading
});