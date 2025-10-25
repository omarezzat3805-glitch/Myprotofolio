const sliders = document.querySelectorAll('#slider');
const next = document.querySelectorAll('.next');
const prev = document.querySelectorAll('.prev');


sliders.forEach(slider => {
    next.addEventListener('click', () => slider.scrollBy({ left: 180, behavior: 'smooth' }));
    prev.addEventListener('click', () => slider.scrollBy({ left: -180, behavior: 'smooth' }));
});