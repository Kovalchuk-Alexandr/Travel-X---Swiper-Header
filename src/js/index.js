import mobileNav from './modules/mobile-nav.js';
import loader from './modules/loader.js';

mobileNav();
loader();

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    // эффект паралакса: движение текста и фона с разной скоростью
    // прилетание надписей...
    parallax: true,
    speed: 1000, //Скорость листания (1 сек.)

    // возможность управления с клавиатуры
    keyboard: {
        enabled: true,
    },

    // If we need pagination
    pagination: {
        // el: ".swiper-pagination",
        el: ".slider-controls__count",
        type: "fraction",
        // ставим "0" перед числами
        formatFractionCurrent: function (number) {
            // return number.padStart(2, "0");
            return ("0" + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            // return number.padStart(2, "0");
            return ("0" + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return (
                '<span class="' +
                currentClass +
                '"></span>' +
                " / " +
                '<span class="' +
                totalClass +
                '"></span>'
            );
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: ".sliderNext",
        prevEl: ".sliderPrev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});