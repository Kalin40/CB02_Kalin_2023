const darkModeBtn = document.getElementById("dark-mode-btn");
const darkMode = localStorage.getItem("darkMode");
const toggleIcon = document.querySelector(".toggle-icon");
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('nav ul');
const navLinksLi = document.querySelectorAll('nav ul li');

/*--------------------------------------------------------------------------*/

//Burger menu for smaller screens
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
/*--------------------------------------------------------------------------*/


darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    console.log("body.classList", document.body.classList); // Verify that the dark mode class is toggled on and off

    const toggleIcon = document.getElementById("toggle-icon"); // Retrieve the toggle-icon element inside the click event listener

    // Update the icon's content
    if (document.body.classList.contains("dark-mode")) {
        toggleIcon.textContent = "☀️";
        ; // Use escape sequence for sun icon
    } else {
        toggleIcon.textContent = "🌙"; // Use escape sequence for moon icon
    }
});

/*--------------------------------------------------------------------------*/

//Scrool to the top of the page
const scrollToTopBtn = document.getElementById("scroll-to-top");
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

/*--------------------------------------------------------------------------*/


document.querySelector('.clickable-sectionUCD').addEventListener('click', function () {
    window.location.href = 'UCD.html';
});

document.querySelector('.clickable-sectionMP').addEventListener('click', function () {
    window.location.href = 'MP.html';
});

document.querySelector('.clickable-sectionCode').addEventListener('click', function () {
    window.location.href = 'Code.html';
});

document.querySelector('.clickable-sectionProject').addEventListener('click', function () {
    window.location.href = 'Project.html';
});

/*--------------------------------------------------------------------------*/
