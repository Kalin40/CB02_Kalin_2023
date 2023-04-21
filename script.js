const darkModeBtn = document.getElementById("dark-mode-btn");
const darkMode = localStorage.getItem("darkMode");
const toggleIcon = document.querySelector(".toggle-icon");
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('nav ul');
const navLinksLi = document.querySelectorAll('nav ul li');
const scrollToTopBtn = document.getElementById("scroll-to-top");


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


// Hide the button on page load
scrollToTopBtn.style.display = "none";

// When the user scrolls, check if they've scrolled down enough to show the button
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// When the button is clicked, scroll to the top of the page
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


function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var calculatorWindow;

function openCalculator() {
    calculatorWindow = window.open("challenge/Calculator/index.html", "Calculator", "width=400,height=500");
}

function closeCalculator() {
    calculatorWindow.close();
}



