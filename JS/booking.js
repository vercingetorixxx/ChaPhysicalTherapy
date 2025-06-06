document.querySelectorAll('.scrollLink').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').substring(1); // Get ID from href (e.g., "myElement")
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling
            block: 'end'    // Center the element vertically
        });
    });
});