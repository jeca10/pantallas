let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const leftControl = document.querySelector('.carousel-control.left');
const rightControl = document.querySelector('.carousel-control.right');

leftControl.addEventListener('click', () => {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].style.display = 'block';
});

rightControl.addEventListener('click', () => {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
});