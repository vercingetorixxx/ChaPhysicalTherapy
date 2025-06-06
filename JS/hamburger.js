// hamLine bug fix

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hamToggle').checked = false;
});



// hamburger menu

const hamToggle = document.getElementById('hamToggle');
const navigation = document.querySelector('.navigation');
const hamburger = document.querySelector('.hamburger');
const hamIcon = document.querySelector('.hamIcon');

hamToggle.addEventListener('click', () => {
    navigation.classList.toggle('hamBg');
    document.body.classList.toggle('menu-open');

    if (hamburger.classList.contains('show')) {
        hamburger.classList.remove('show');
        hamIcon.classList.remove('checked');
    } else {
        hamburger.classList.add('show');
        hamIcon.classList.add('checked');
    };
});



// plusButtons

const plusButtons = document.querySelectorAll('.plusButton');

plusButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.nextElementSibling.classList.toggle('hidden');
        button.querySelector('.rotate').classList.toggle('rotated');
        button.classList.toggle('clicked');
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


