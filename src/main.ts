import './style.scss';
import './teplate.html';
import Swiper, { Navigation, Pagination } from 'swiper';
// header
let videoBtn = document.querySelector('.videon-btn');
let videoCloseBtn = document.querySelector('.close-button');
let videoPlayer = document.querySelector('video');
let videoPopup = document.getElementById('popupV');

videoBtn?.addEventListener('click', function () {
    videoPopup?.classList.add('active');
});
videoCloseBtn?.addEventListener('click', function () {
    videoPopup?.classList.remove('active');
    videoPlayer?.pause();
});
// header

//slider
let catalogBlock = document.getElementsByClassName('catalog__block');
for (let i = 0; i < catalogBlock.length; i++) {
    console.log(i);
    if (i == 0 || i == 1) {
        catalogBlock[i].classList.add('visible');
    } else {
        catalogBlock[i].classList.add('clear');
    }

}
let c = 0;
let g = 0;
Swiper.use([Navigation, Pagination]);
new Swiper('.catalog-items', {
    slidesPerGroup: 2,
    slidesOffsetBefore: 200,
    slidesOffsetAfter: -780,
    spaceBetween: -630,
    grabCursor: true,
    navigation: {
        nextEl: '.next-slide',
        prevEl: '.prev-slide',
    },

    on: {
        slideNextTransitionStart: function () {
            console.log('change!');

            g += 2;
            for (c = 0; c < catalogBlock.length; c++) {
                catalogBlock[c].classList.add('clear');
                if (c == g) {
                    for (let i = g; i < g + 2; i++){
                        console.log('chge');
                        catalogBlock[i].classList.remove('clear');
                        catalogBlock[i].classList.add('visible');
                        // if(i == g + 2){
                        //     break;
                        // }
                    }
                    break;
                }
            }
        },
    },

});



//slider