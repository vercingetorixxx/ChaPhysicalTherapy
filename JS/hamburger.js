// hamburger menu

const hamToggle = document.getElementById('hamToggle');
const navigation = document.querySelector('.navigation');

const toggleMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    const main = document.querySelector('main');
    const currentMainDisplay = window.getComputedStyle(main).display;
    if (hamburger) {
        const currentHamDisplay = window.getComputedStyle(hamburger).display;
        hamburger.style.display = currentHamDisplay === 'none' ? 'block' : 'none';
        navigation.classList.toggle('bg');
    }
    document.body.classList.toggle('menu-open');
}

hamToggle.addEventListener('click', toggleMenu);


// moreMenu buttons


const moreMenuButtons = document.querySelectorAll('.plusButton');

moreMenuButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.nextElementSibling.classList.toggle('hidden');
        button.parentElement.nextElementSibling.classList.toggle('moreMenu');
    })
});


// Dynamic Navbar


const threshold = window.innerHeight / 10;

function handleScrollDown() {
    if (window.scrollY > threshold) {
        navigation.classList.add('transBg');
    }
    else {
        navigation.classList.remove('transBg');
    }
}

window.addEventListener('scroll', handleScrollDown);
handleScrollDown();