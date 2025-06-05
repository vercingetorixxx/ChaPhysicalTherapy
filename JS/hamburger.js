// hamLine bug fix

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hamToggle').checked = false;
});



// hamburger menu

const hamToggle = document.getElementById('hamToggle');
const navigation = document.querySelector('.navigation');
const hamburger = document.querySelector('.hamburger');

hamToggle.addEventListener('click', () => {
    navigation.classList.toggle('hamBg');
    document.body.classList.toggle('menu-open');

    if (hamburger.classList.contains('show')) {
        hamburger.classList.remove('show');
    } else {
        hamburger.classList.add('show');
    };
});



// plusButtons

const plusButtons = document.querySelectorAll('.plusButton');

plusButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.nextElementSibling.classList.toggle('hidden');
        button.parentElement.nextElementSibling.classList.toggle('moreMenu');
        button.querySelector('.rotate').classList.toggle('rotated');
    })
});



// Dynamic Navbar

const threshold = window.innerHeight / 10;

function handleScrollDown() {
    if (window.scrollY > threshold) {
        navigation.classList.add('bg');
    }
    else {
        navigation.classList.remove('bg');
    }
}

window.addEventListener('scroll', handleScrollDown);
handleScrollDown();


