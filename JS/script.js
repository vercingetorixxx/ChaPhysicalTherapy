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