// Cache-Busting Method

document.addEventListener('DOMContentLoaded', () => {
    const videoSources = document.querySelectorAll('video source');
    const timestamp = new Date().getTime(); // Generates a unique timestamp
    videoSources.forEach(videoSource => {
        videoSource.src = `${videoSource.src.split('?')[0]}?t=${timestamp}`; // Append timestamp to URL
        videoSource.parentElement.load(); // Reload video with new source
    });
});



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



// Video Error Refresh Fix

// document.addEventListener('DOMContentLoaded', () => {
//     const videos = document.querySelectorAll('video');

//     // Detect errors during loading
//     videos.forEach(video => {
//         video.addEventListener('error', () => {
//             console.log('Video failed to load. Refreshing page...');
//             location.reload();
//         });
//     });

    // // Check if the video is ready after a timeout
    // setTimeout(() => {
    //     if (video.readyState < 3) { // Less than 3 means not enough data to play
    //         console.log('Video not ready. Refreshing page...');
    //         location.reload();
    //     }
    // }, 5000); // Wait 5 seconds to allow loading
// });