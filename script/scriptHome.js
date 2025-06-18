document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu img');
    const menu = document.querySelector('.hamburger-menu ul');
    
    let menuVisible = false;
    
    hamburger.addEventListener('click', function() {
        menuVisible = !menuVisible;
        menu.style.display = menuVisible ? 'block' : 'none';
    });

    hamburger.addEventListener('mouseover', function() {
        menuVisible = true;
        menu.style.display = 'block';
    });

    hamburger.addEventListener('mouseout', function() {
        setTimeout(function() {
            if (!menu.matches(':hover') && !hamburger.matches(':hover')) {
                menuVisible = false;
                menu.style.display = 'none';
            }
        }, 500);
    });

    menu.addEventListener('mouseover', function() {
        menuVisible = true;
        menu.style.display = 'block';
    });

    menu.addEventListener('mouseout', function() {
        setTimeout(function() {
            if (!hamburger.matches(':hover') && !menu.matches(':hover')) {
                menuVisible = false;
                menu.style.display = 'none';
            }
        }, 500);
    });
});


const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slide.length - 1;
    } else if (index >= slide.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Auto slide every 5 seconds
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);
