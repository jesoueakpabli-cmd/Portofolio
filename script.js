// Theme toggle with saved preference
const themeToggleBtn = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggleBtn.textContent = 'Light mode ☀️';
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = 'Light mode ☀️';
        localStorage.setItem('portfolio-theme', 'dark');
    } else {
        themeToggleBtn.textContent = 'Dark mode 🌙';
        localStorage.setItem('portfolio-theme', 'light');
    }
});

// Clickable Gmail suffix for the contact email field
const contactEmail = document.getElementById('contact-email');
const gmailSuffix = document.getElementById('gmail-suffix');

function updateGmailSuffix() {
    gmailSuffix.classList.toggle('is-hidden', contactEmail.value.includes('@'));
}

contactEmail.addEventListener('input', updateGmailSuffix);
gmailSuffix.addEventListener('click', () => {
    const value = contactEmail.value.trim();
    if (!value) {
        contactEmail.focus();
        return;
    }
    if (!value.includes('@')) {
        contactEmail.value = `${value}@gmail.com`;
    } else if (value.endsWith('@')) {
        contactEmail.value = `${value}gmail.com`;
    }
    updateGmailSuffix();
    contactEmail.focus();
});
// Mobile navigation menu
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close the mobile menu when a navigation link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// Reveal project cards as they enter the viewport
const projectCards = document.querySelectorAll('.project-card');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            scrollObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

projectCards.forEach(card => {
    scrollObserver.observe(card);
});

