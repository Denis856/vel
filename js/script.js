


window.onload = function () {
   document.addEventListener("click", activet);

   function activet(e) {
      const targetElem = e.target;
      if(targetElem.classList.contains('header__icon_burger')) {
         document.querySelector('.header__list').classList.toggle('active');
         document.querySelector('.header__icon_burger').classList.toggle('active');
      }
      
      if(targetElem.classList.contains('header__icon_burger2')) {
         document.querySelector('.header__list3').classList.toggle('active');
         document.querySelector('.header__icon_burger2').classList.toggle('active');
      }
      
      if(targetElem.classList.contains('header__icon_arr0')) {
         document.querySelector('.header__icon_arr0').classList.toggle('active');
         document.querySelector('.list0').classList.toggle('active');
      }

      if(targetElem.classList.contains('rus')) {
         document.querySelector('.header__bnt_text').textContent = 'RU';
      }
      
      if(targetElem.classList.contains('eng')) {
         document.querySelector('.header__bnt_text').textContent = 'EN';
      }
      if(targetElem.classList.contains('part1__title')) {
         document.querySelector('.part1__box').classList.toggle('active');
         document.querySelector('.part1__icon00').classList.toggle('active');
      }
   }
}

// next

var line_last = document.querySelectorAll('.footer__column');

line_last.forEach(elem => {
   elem.addEventListener('click', ()=>{
      elem.querySelector('.footer__block').classList.toggle('active');
      elem.querySelector('.footer__icon2').classList.toggle('active');
   });
});

// next


// next


var productContainers = document.querySelectorAll('.category__items');
var item20 = document.querySelectorAll('.category__item')[0];
var preBtn = document.querySelectorAll('.category__icon');
var nextBtn = document.querySelectorAll('.category__icon2');

productContainers.forEach((item, i) => {
   let containerWidth = item20.clientWidth + 15;

   preBtn[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth;
      document.querySelector('.category__icon2').classList.add('active');
   });
   nextBtn[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth;
   });
   
});