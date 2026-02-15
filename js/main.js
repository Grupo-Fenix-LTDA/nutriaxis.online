// Menu Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    navLinks.style.transform = navLinks.style.transform === 'translateY(0%)' ? 'translateY(-150%)' : 'translateY(0%)';
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.style.transform = 'translateY(-150%)';
    });
});