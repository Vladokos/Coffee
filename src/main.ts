import './style.scss';
import './teplate.html';
import Swiper, { Navigation, Pagination } from 'swiper';


// header popup
let videoBtn = document.querySelector('.videon-btn');
let videoCloseBtn = document.querySelector('.close-button');
let videoPlayer = document.querySelector('video');
let videoPopup = document.getElementById('popupV');

videoBtn?.addEventListener('click', function () {
    videoPopup?.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = getScrollbarWidth();
});
videoCloseBtn?.addEventListener('click', function () {
    videoPopup?.classList.remove('active');
    document.body.style.overflow = 'visible';
    document.body.style.paddingRight = '0px';
    videoPlayer?.pause();
});

//scroll get size
function getScrollbarWidth() {

    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    document.body.appendChild(outer);
  
    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);
  
    // Calculating difference between container's full width and the child width
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth +'px';
  
    // Removing temporary elements from the DOM
    outer.parentNode?.removeChild(outer);

    console.log(scrollbarWidth);

    return scrollbarWidth;
  
  }
//scroll get size


// header popup

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
let checkSlideList = 0;//Проверяет номер стр. слайда
let slideOffsetAft = -780;
let slidesOffsetBef = 200;
Swiper.use([Navigation, Pagination]);
new Swiper('.catalog-items', {
    slidesPerGroup: 2,
    slidesOffsetBefore: slidesOffsetBef,
    slidesOffsetAfter: slideOffsetAft,
    spaceBetween: -630,
    grabCursor: true,
    navigation: {
        nextEl: '.next-slide',
        prevEl: '.prev-slide',
    },

    on: {
        slideNextTransitionStart: function () {
            checkSlideList += 2;
            for (let c = 0; c < catalogBlock.length; c++) {
                catalogBlock[c].classList.add('clear');// 1 и след. листам добавляется класс -clear-(прозрачные)
                if (c == checkSlideList) {
                    for (let i = checkSlideList; i < checkSlideList + 2; i++) {
                        catalogBlock[i].classList.remove('clear')//убирает у переключенного слайда класс -clear-
                        catalogBlock[i].classList.add('visible');//добавляет класс -visible- 
                    }
                    break;
                }
            }
        },
        slidePrevTransitionStart: function () {
            checkSlideList -= 2;
            for (let c = 0; c < catalogBlock.length; c++) {
                catalogBlock[c].classList.remove('clear');
                if (c == checkSlideList + 1) {// +1 нужен чтобы на старнице оба слайда были -visible-
                    for (let i = checkSlideList + 2; i < checkSlideList + 4; i++) {// +2 нужен чтобы два пред. слайда были -clear- А +4 чтобы цикл не затрагивал активные слайды
                        catalogBlock[i].classList.add('clear');//добавляет класс -clear-
                        catalogBlock[i].classList.remove('visible');//убираем класс -visible-
                    }
                    break;
                }
            }
        }
    },
});
//slider

//toggle
let oneBtnToggle = document.querySelector('.slide-btn__one');
let twoBtnToggle = document.querySelector('.slide-btn__two');
let thridBtnToggle = document.querySelector('.slide-btn__thrid');


let oneBlock = document.querySelector('.one');
let twoBlock = document.querySelector('.two');
let thridBlock = document.querySelector('.thrid');

oneBtnToggle?.addEventListener('click',function(){
    oneBlock?.classList.remove('clear');
    twoBlock?.classList.add('clear');
    thridBlock?.classList.add('clear');
});
twoBtnToggle?.addEventListener('click',function(){
    oneBlock?.classList.add('clear');
    twoBlock?.classList.remove('clear');
    thridBlock?.classList.add('clear');
});
thridBtnToggle?.addEventListener('click',function(){
    oneBlock?.classList.add('clear');
    twoBlock?.classList.add('clear');
    thridBlock?.classList.remove('clear');
});
//toggle