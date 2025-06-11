// Music Player

const musicPlayer = document.getElementById('musicPlayer');
const audio = document.querySelector('audio');
let isPlaying = false;

audio.volume = 0.4;

musicPlayer.addEventListener('click', () => {
    musicPlayer.classList.toggle('show');
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
});



// Video Error Refresh Fix - Cache-Busting doesn't seem to work

document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video');

    // Detect errors during loading
    videos.forEach(video => {
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
});



// Dynamic InfoBoxes

document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".infoBox");

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scrolled");
      } else{
        entry.target.classList.remove("scrolled");
      }
    });
  };

  const options = {
    root: null, // Use viewport as root
    rootMargin: "0px", // Margin around root
    threshold: 0.5 // Trigger when 10% of the target is visible
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  });
});