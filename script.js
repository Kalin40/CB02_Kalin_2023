const darkModeBtn = document.getElementById("dark-mode-btn");
const toggleIcon = document.querySelector(".toggle-icon");
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('nav ul');
const navLinksLi = document.querySelectorAll('nav ul li');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Iterate over each nav link li element and add a delay to their transitions
    navLinksLi.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Toggle the burger menu animation
    burgerMenu.classList.toggle('toggle');
});


darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleIcon.classList.toggle("active");
});


document.querySelector('.clickable-sectionUCD').addEventListener('click', function () {
    window.location.href = 'Ucd.html';
});

document.querySelector('.clickable-sectionMP').addEventListener('click', function () {
    window.location.href = 'MP.html';
});

document.querySelector('.clickable-sectionCode').addEventListener('click', function () {
    window.location.href = 'Code.html';
});

document.querySelector('.clickable-sectionProject').addEventListener('click', function () {
    window.location.href = 'Psroject.html';
});