// Music Player

const musicButton = document.getElementById('musicButton');
let player;
let isPlaying = false;
let isPlayerReady = false;

function onYouTubeIframeAPIReady() {
  console.log('YouTube IFrame API is ready');
  player = new YT.Player('youtube-player', {
    height: '0',
    width: '0',
    videoId: 'QKSFDPEGUZo', // Replace with your YouTube video ID
    playerVars: {
      autoplay: 0,
      loop: 1,
      playlist: 'QKSFDPEGUZo' // Required for loop
    },
    events: {
      'onReady': onPlayerReady, // Attach onReady handler
      'onError': onPlayerError  // Attach onError handler
    }
  });
  console.log('Player created');
}

function onPlayerReady(event) {
  isPlayerReady = true;
  console.log('Player is ready');
}

function onPlayerError(event) {
  console.error('YouTube Player Error:', event.data);
}

musicButton.addEventListener('click', () => {
  if (!isPlayerReady) {
    console.warn('Player is not ready yet. Please try again later.');
    return;
  }
  musicButton.classList.toggle('show');
  if (isPlaying) {
    player.pauseVideo();
  } else {
    player.playVideo();
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
      } else {
        entry.target.classList.remove("scrolled");
      }
    });
  };

  const options = {
    root: null, // Use viewport as root
    rootMargin: "0px", // Margin around root
    threshold: 0.5 // Trigger when 50% of the target is visible
    //should set timeout!
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  });
});



// dynamic navBar bottom

function updateScale() {
  const navigation = document.querySelector('.navigation');
  // Get scroll position and document height
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

  // Calculate progress (0 to 1)
  const progress = totalHeight > 0 ? Math.min(Math.max(scrollPosition / totalHeight, 0), 1) : 0;

  // Apply scaleX transformation
  navigation.style.setProperty('--scale', progress);
}

// Update on scroll
window.addEventListener('scroll', updateScale);

// Initial call to set correct scale on page load
updateScale();