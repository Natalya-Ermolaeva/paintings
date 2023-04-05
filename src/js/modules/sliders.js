const sliders = (slidersSelector, direction, prevButtonSelector, nextButtonSelector) => {
    const sliderItems = document.querySelectorAll(slidersSelector);
    let slideIndex = 1;
    let pause;

    function showSliders(i) {
        sliderItems.forEach(item => {
            item.style.display = 'none';
            item.classList.add('animated');
        });

        if (i > sliderItems.length) {
            slideIndex = 1;
        }

        if (i < 1) {
            slideIndex = sliderItems.length;
        }
        
        sliderItems[slideIndex - 1].style.display = 'block';
    }
    
    showSliders();

    function moveSlides(step) {
        showSliders(slideIndex += step);
    }

    try {
        const prevButton = document.querySelector(prevButtonSelector);
        const nextButton = document.querySelector(nextButtonSelector);

        prevButton.addEventListener('click', () => {
            moveSlides(-1);
            sliderItems[slideIndex - 1].classList.remove('slideInLeft');
            sliderItems[slideIndex - 1].classList.add('slideInRight');
        });

        nextButton.addEventListener('click', () => {
            moveSlides(1);
            sliderItems[slideIndex - 1].classList.remove('slideInRight');
            sliderItems[slideIndex - 1].classList.add('slideInLeft');
        });

    } catch(e) {}
    
    function activateAnimation() {
        if (direction === 'vertical') {
            pause = setInterval(() => {
                moveSlides(1);
                sliderItems[slideIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
            pause = setInterval(() => {
                moveSlides(1);
                sliderItems[slideIndex - 1].classList.remove('slideInRight');
                sliderItems[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }

    activateAnimation();

    sliderItems[0].parentElement.addEventListener('mouseenter', () => {
        clearInterval(pause);
    });

    sliderItems[0].parentElement.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};

export default sliders;
