const slides = [
    '<div class="carousel-container__slide"><img src="img/addidas.svg" alt="addidas"></div>',
    '<div class="carousel-container__slide"><img src="img/asics.svg" alt="asics"></div>',
    '<div class="carousel-container__slide"><img src="img/nike.svg" alt="nike"></div>',
    '<div class="carousel-container__slide"><img src="img/new-balance.svg" alt="new-balance"></div>',
    '<div" class="carousel-container__slide"><img src="img/reebok.svg" alt="reebok"></div>'
];

let currentSlideIndex=0;

function renderSlide() {
    const slideContainer = document.querySelector('.carousel-container__slides');
    slideContainer.innerHTML = slides[currentSlideIndex];
    if (window.matchMedia('(min-width:550px)').matches) {
        const secondSlideIndex = currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
        slideContainer.innerHTML += slides[secondSlideIndex];
        if (window.matchMedia('(min-width:950px)').matches) {
            const thirdSlideIndex = secondSlideIndex + 1 >= slides.length ? 0 : secondSlideIndex + 1;
            slideContainer.innerHTML += slides[thirdSlideIndex];
        }
    }
}

function nextSlide(){
    currentSlideIndex = currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
    renderSlide();
}

function prevSlide(){
    currentSlideIndex = currentSlideIndex - 1 < 0 ? slides.length - 1 : currentSlideIndex - 1;
    renderSlide();
}

// setInterval(nextSlide, 3000);
renderSlide();

const nextBtn = document.querySelector('.carousel-container__button-next')
nextBtn.addEventListener('click', nextSlide);

const prevBtn = document.querySelector('.carousel-container__button-prev')
prevBtn.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);