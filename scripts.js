document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in effect
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.getElementById('phonenopho').onclick = function() {
    var phonenoElement = document.getElementById('phoneno');
    phonenoElement.style.visibility = 'visible';
    phonenoElement.style.fontSize = '13px';
};

document.addEventListener('click', function(event) {
    var phonenoElement = document.getElementById('phoneno');
    if (event.target.id !== 'phonenopho' && phonenoElement.style.visibility === 'visible') {
        phonenoElement.style.visibility = 'hidden';
        phonenoElement.style.fontSize = '0';
    }
});