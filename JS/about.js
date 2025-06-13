// ---------- Dynamic InfoBoxes ---------- //

document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(".infoBox, .yoYoItem, .flipper");
    const stateMap = new WeakMap(); // Store timeout IDs per element

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            // Get or initialize state
            const state = stateMap.get(entry.target) || { timeoutId: null, isAnimating: false };

            // Clear existing timeout
            if (state.timeoutId) { clearTimeout(state.timeoutId); }

            if (entry.isIntersecting) {
                state.timeoutId = setTimeout(() => {
                    entry.target.classList.add("scrolled");
                    state.isAnimating = true;
                    stateMap.set(entry.target, state);
                    // Clear animation flag after transition duration (500ms)
                    setTimeout(() => {
                        state.isAnimating = false;
                        stateMap.set(entry.target, state);
                    }, 250);
                }, 100);
                stateMap.set(entry.target, state);
            } else if (!entry.target.classList.contains("yoYoItem") && !state.isAnimating) {
                state.timeoutId = setTimeout(() => {
                    entry.target.classList.remove("scrolled");
                }, 100);
                stateMap.set(entry.target, state);
            };
        });
    };

    const options = {
        root: null, // Use viewport as root
        rootMargin: "0px", // Margin around root
        threshold: 0.6 // Trigger when 50% of the target is visible
    };

    const observer = new IntersectionObserver(callback, options);

    targets.forEach(target => {
        observer.observe(target);
        stateMap.set(target, { timeoutId: null, isAnimating: false }); // Initialize state
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