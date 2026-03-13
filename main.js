document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for section fade-in animation
    const sections = document.querySelectorAll('section');
    const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the section must be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-section');
                entry.target.classList.remove('hidden-section');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('hidden-section'); // Initially hide all sections
        observer.observe(section);
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Add 'scrolled' class after scrolling 50px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Delay the animation of the hero section slightly to let the page load
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.classList.remove('hidden-section');
        heroSection.classList.add('show-section');
    }
});