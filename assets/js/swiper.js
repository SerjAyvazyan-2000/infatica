
const swiper = new Swiper('.proxy-swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: '.services-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.-convert-swiper-next',
        prevEl: '.convert-swiper-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 16
        },
        530: {
            slidesPerView: 1.8,
            spaceBetween: 16
        },
        567: {
            slidesPerView: 2,

        },
        730: {
            slidesPerView: 2.7,
            spaceBetween: 34,

        },

        900: {
            slidesPerView: 3,
            spaceBetween: 16

        },
        1200: {
            slidesPerView: 4,
        },
    }


});



// const swiperScarping = new Swiper('.scraping-swiper', {
//     slidesPerView: 3,
//     spaceBetween: 32,
//     // loop:true,
//
//     pagination: {
//         el: '.scraping-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.-convert-swiper-next',
//         prevEl: '.convert-swiper-prev',
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1.2,
//             spaceBetween: 16
//         },
//         567: {
//             slidesPerView: 2,
//
//         },
//         700: {
//             slidesPerView:2.4 ,
//             spaceBetween: 16,
//
//         },
//
//
//         900: {
//             slidesPerView: 2,
//             spaceBetween: 16,
//
//         },
//         1200: {
//             slidesPerView: 3,
//         },
//     }
//
//
// });


let swiperScarping;

function initSwiper() {
    const isSmallScreen = window.innerWidth < 1000;

    swiperScarping = new Swiper('.scraping-swiper', {
        slidesPerView: isSmallScreen ? 1 : 3,
        spaceBetween: isSmallScreen ? 16 : 32,
        loop: isSmallScreen,
        pagination: {
            el: '.scraping-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.-convert-swiper-next',
            prevEl: '.convert-swiper-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 16,
            },
            567: {
                slidesPerView: 2,
            },
            700: {
                slidesPerView: 2.4,
                spaceBetween: 16,
            },
            900: {
                slidesPerView: isSmallScreen ? 1.2 : 2,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
}

initSwiper();

window.addEventListener('resize', () => {
    const isSmallScreen = window.innerWidth < 1000;

    if ((isSmallScreen && !swiperScarping.params.loop) || (!isSmallScreen && swiperScarping.params.loop)) {
        swiperScarping.destroy(true, true);
        initSwiper();
    }
});


const swiperDatasets = new Swiper('.datasets-swiper', {
    slidesPerView: 4,
    spaceBetween: 32,
    // loop:true,
    pagination: {
        el: '.datasets-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.-convert-swiper-next',
        prevEl: '.convert-swiper-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 16
        },
        567: {
            slidesPerView: 2,

        },
        700: {
            slidesPerView:2.7 ,
            spaceBetween: 16,

        },

        900: {
            slidesPerView: 3,
            spaceBetween: 16

        },
        1200: {
            slidesPerView: 4,
        },
    }


});

