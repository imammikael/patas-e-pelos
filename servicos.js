let currentSlide = 0;

function slideLeft() {
    currentSlide = (currentSlide === 0) ? 1 : 0;
    updateCarrossel();
}

function slideRight() {
    currentSlide = (currentSlide === 1) ? 0 : 1;
    updateCarrossel();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarrossel();
}

function updateCarrossel() {
    const carrosselTrack = document.querySelector('.carrossel-track');
    const slideWidth = carrosselTrack.offsetWidth / 2; // largura de 3 cards
    carrosselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    
    // Atualiza os indicadores das bolinhas
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Ao carregar a página, adiciona a classe "active" à primeira bolinha
window.onload = () => {
    const dots = document.querySelectorAll('.dot');
    dots[0].classList.add('active');  // Adiciona a classe "active" ao primeiro indicador
};