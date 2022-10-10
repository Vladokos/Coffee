import "./style.scss";
import "./index.html";
import Swiper, { Navigation, Pagination } from "swiper";

//slider
const catalog: Swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".next-slide",
    prevEl: ".prev-slide",
  },
  loop: true,
});

//slider

//toggle

const toggle__item = document.getElementsByClassName(
  "toggle__item"
) as HTMLCollectionOf<HTMLDivElement>;
const slide__btn = document.getElementsByClassName(
  "slide-btn"
) as HTMLCollectionOf<HTMLDivElement>;

toggle__item[0].classList.add("active");
for (let i = 1; i < toggle__item.length; i++) {
  toggle__item[i].classList.add("clear");
}

slide__btn[0].classList.add("active");
for (let i = 0; i < slide__btn.length; i++) {
  slide__btn[i].addEventListener("click", () => {
    for (let j = 0; j < slide__btn.length; j++) {
      toggle__item[j].classList.remove("active");
      toggle__item[j].classList.add("clear");

      slide__btn[j].classList.remove("active");
      slide__btn[j].classList.add("clear");
    }
    toggle__item[i].classList.remove("clear");
    toggle__item[i].classList.add("active");

    slide__btn[i].classList.remove("clear");
    slide__btn[i].classList.add("active");
  });
}
//toggle

// //slider combo

const combo: Swiper = new Swiper(".slider", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".next-slide-combo",
    prevEl: ".prev-slide-combo",
  },
  loop: true,
});

// let comoboBlock = document.getElementsByClassName('slider-item');
// for (let i = 0; i < comoboBlock.length; i++) {
//     if (i == 0 || i == 1 || i == 2) {
//         continue;
//     } else {
//         comoboBlock[i].classList.add('clear');
//     }
// }

// let checkComboList = 0;//Проверяет номер стр. слайда
// let slidesPreGroups = 3;
// let slidesPrevViews = 3;
// let checkSlideClear = 3;
// let removeClear = 0;
// let spaceBetweens = 0;
// if (window.matchMedia("(max-width: 1080px)").matches) {
//     slidesPreGroups = 2;
//     slidesPrevViews = 2;
//     checkComboList = -1;
//     checkSlideClear = 4;
//     removeClear = 2;
//     spaceBetweens = 0;
//     if (window.matchMedia("(max-width: 710px)").matches) {
//         slidesPreGroups = 1;
//         slidesPrevViews = 1;
//         checkComboList = -1;
//         checkSlideClear = 4;
//         removeClear = 4;
//         spaceBetweens = 0;
//     }
// }
// Swiper.use([Navigation]);
// new Swiper('.slider', {
//     slidesPerGroup: slidesPreGroups,
//     slidesPerView: slidesPrevViews,
//     spaceBetween: spaceBetweens,
//     grabCursor: true,
//     navigation: {
//         nextEl: '.next-slide-combo',
//         prevEl: '.prev-slide-combo',
//     },

//     on: {
//         slideNextTransitionStart: function () {
//             checkComboList += 3;//считает номер слайда
//             for (let c = 0; c < comoboBlock.length; c++) {
//                 if (window.matchMedia("(max-width: 710px)").matches) {
//                     for (let i = 0; i < 9; i++) {

//                         comoboBlock[i].classList.remove('clear');
//                     }
//                     break;
//                 }
//                 comoboBlock[c].classList.add('clear');// 1 и след. листам добавляется класс -clear-(прозрачные)
//                 comoboBlock[8].classList.remove('clear');
//                 comoboBlock[7].classList.remove('clear');
//                 if (c == checkComboList) {
//                     for (let i = checkComboList - removeClear; i < checkComboList + checkSlideClear - removeClear; i++) {
//                         if (i >= 9) {
//                             comoboBlock[8].classList.remove('clear');
//                             break;
//                         }
//                     }
//                     break;
//                 }
//             }
//         },
//         slidePrevTransitionStart: function () {
//             checkComboList -= 3;
//             for (let c = 0; c < comoboBlock.length; c++) {
//                 comoboBlock[c].classList.remove('clear');
//                 if (c == checkComboList + 2) {// +1 нужен чтобы на старнице оба слайда были -visible-
//                     for (let i = checkComboList + 3; i < checkComboList + checkSlideClear + 1; i++) {// +2 нужен чтобы два пред. слайда были -clear- А +4 чтобы цикл не затрагивал активные слайды
//                         comoboBlock[i].classList.add('clear');//добавляет класс -clear-
//                         comoboBlock[i].classList.remove('visible');//убираем класс -visible-
//                     }
//                     break;
//                 }
//             }
//         }
//     },
// });
// changeWidth('slider', 1305, 500);
// let marginSlide = document.getElementById('slider');
// function changeMarginSlider() {
//     if (window.matchMedia("(max-width: 1360px)").matches) {
//         if (marginSlide) {
//             marginSlide.style.margin = '0px 0px 0px 0px';
//             console.log('sa');
//         }
//     }
//     else {
//         if (marginSlide) {
//             marginSlide.style.margin = '0px 0px 0px -55px';
//             console.log('sad');
//         }
//     }

// }
// window.setTimeout(changeMarginSlider, 501);

// // //slider combo

// // //slider change view
// function changeWidth(name: string, widh: number, speedReload: number) {
//     window.setTimeout(change, speedReload);
//     function change() {
//         let slider = document.getElementById('' + name);
//         if (window.matchMedia("(max-width: 1360px)").matches) {
//             if (slider) {
//                 slider.style.width = '';
//                 console.log('sfg');
//             }
//         }
//         else {
//             if (slider) {

//                 slider.style.width = widh + 'px';
//             }
//         }
//     }
// }
// //slider change view

// //achors
// let achors = document.querySelectorAll('a[href*="#"]');

// for (let achor of achors as any) {
//     achor.addEventListener('click', function (event: { preventDefault: any; }) {
//         event.preventDefault();
//         let blockId = achor.getAttribute('href');
//         document.querySelector('' + blockId)?.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// }
// //achors

// //cart
// let cart = document.querySelector('.cart');
// let cartNumb = document.getElementById('cart__number');
// let btnInCart = document.querySelectorAll('.in__cart');

// let product = 0;

// for (const btnInCarts of btnInCart as any) {
//     btnInCarts.addEventListener('click', function () {
//         cart?.classList.add('active');
//         product++;
//         // cartNumb?.innerHTML = product.toString();

//     });
// }

// // //cart
// // window
// if (window.matchMedia("(max-width: 710px)").matches) {
//     let bar = document.getElementById('btn-menu');
//     let burge = document.getElementById('right-menu');
//     let check = 0

//     bar?.addEventListener('click', function () {
//         if (check == 0) {
//             burge?.classList.add('active');
//             check++;
//             document.body.style.overflowX = 'hidden';
//         } else {
//             burge?.classList.remove('active');
//             check--;
//             document.body.style.overflowX = 'visible';
//         }
//     });
// }
// // //window
