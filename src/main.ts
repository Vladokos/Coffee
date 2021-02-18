import './style.scss';
import './teplate.html';
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

//
let catalogBlock = document.getElementsByClassName('catalog__block');
for (let i = 0; i < catalogBlock.length; i++) {
    console.log(i);
    if (i == 0 || i == 1){
        catalogBlock[i].classList.add('visible');
    }else{
        catalogBlock[i].classList.add('clear');
    }

}

//