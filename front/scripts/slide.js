export function initializeSlides() {
    const slides = {
        main: document.getElementById('slide-main'),
        left: document.getElementById('slide-left'),
        right: document.getElementById('slide-right'),
        down: document.getElementById('slide-down'),
    };

    let currentSlide = 'main';

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            changeSlide('left');
        } else if (event.key === 'ArrowRight') {
            changeSlide('right');
        } else if (event.key === 'ArrowDown') {
            changeSlide('down');
        }
    });

    function changeSlide(direction) {
        slides[currentSlide].classList.remove('active');
        slides[direction].classList.add('active');
        currentSlide = direction;
    }
}
