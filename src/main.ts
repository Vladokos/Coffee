import './style.scss';
import './teplate.html';
import Swiper from 'swiper';
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
    if (i == 0 || i == 1){
        catalogBlock[i].classList.add('visible');
    }else{
        catalogBlock[i].classList.add('clear');
    }

}

new Swiper('.catalog-items',{
    //arrow
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

});


//slider