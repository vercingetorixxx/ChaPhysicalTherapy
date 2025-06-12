// ---------- Dynamic InfoBoxes ---------- //

document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".infoBox, .yoYoItem, .flipper");

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      // Clear any existing timeout to prevent multiple triggers
      clearTimeout(entry.target.timeoutId);

      // Set a new timeout for 100ms delay
      entry.target.timeoutId = setTimeout(() => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scrolled");
        } else if (!entry.target.classList.contains("yoYoItem")) {
          entry.target.classList.remove("scrolled");
        }
      }, 100);
    });
  };

  const options = {
    root: null, // Use viewport as root
    rootMargin: "0px", // Margin around root
    threshold: 0.5 // Trigger when 50% of the target is visible
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  });
});




// ---------- .siContainer flip ---------- //

document.querySelectorAll('.siContainer').forEach(container => {
	container.addEventListener('click', () => {
		container.querySelector('.flipper').classList.toggle('flipped');
		container.classList.add('flipping');

		// Remove flipping class after transition ends
		setTimeout(() => {
			container.classList.remove('flipping');
		}, 1000);
	});
});