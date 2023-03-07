
var btn0 = document.querySelectorAll('.item2__card');
var btn00 = document.querySelectorAll('.little');
var btn1 = document.querySelector('#count');

let btn01 = 0;


btn0.forEach(item =>{
   item.addEventListener('click',  ()=> {
      btn01++
      btn1.innerHTML = btn01;
   })
})

// next

var addItemId = 0;

function addToCard(item) {
   addItemId += 1;
   var selectItem = document.createElement('button');
   selectItem.classList.add('cardImg');
   selectItem.setAttribute('id',addItemId);
   var img = document.createElement('img');
   img.setAttribute('src',item.children[2].children[0].currentSrc);
   img.classList.add('img01');
   var title = document.createElement('p');
   title.classList.add('dis_no');
   title.innerText = item.children[3].innerText;
   var color = document.createElement('button');
   if(item.children[6].children[0].classList.contains('active2')) {
      color = item.children[6].children[0].cloneNode();
   } else if(item.children[6].children[1].classList.contains('active2')) {
      color = item.children[6].children[1].cloneNode();
   } if(item.children[6].children[2].classList.contains('active2')) {
      color = item.children[6].children[2].cloneNode();
   }
   var label = document.createElement('p');
   label.classList.add('tyu');
   label.classList.add('dis_no');
   label.innerText = item.children[4].innerText;
   var select = document.createElement('button');
   if(item.children[5].children[0].classList.contains('active')) {
      select.innerText = item.children[5].children[0].textContent;
      select.classList.add('border');
      select.classList.add('dis_no');
   } else if(item.children[5].children[1].classList.contains('active')) {
      select.innerText = item.children[5].children[1].textContent;
      select.classList.add('border');
      select.classList.add('dis_no');
   } else if(item.children[5].children[2].classList.contains('active')) {
      select.innerText = item.children[5].children[2].textContent;
      select.classList.add('border');
      select.classList.add('dis_no');
   } else if(item.children[5].children[3].classList.contains('active')) {
      select.innerText = item.children[5].children[3].textContent;
      select.classList.add('border');
      select.classList.add('dis_no');
   } else if(item.children[5].children[4].classList.contains('active')) {
      select.innerText = item.children[5].children[4].textContent;
      select.classList.add('border');
      select.classList.add('dis_no');
   }
   var delBtn = document.createElement('img');
   delBtn.setAttribute('src',document.querySelector('.img0').currentSrc);
   delBtn.classList.add('little');
   delBtn.setAttribute('onclick','del('+addItemId+')');
   var cartItems = document.getElementById('title0');
   cartItems.classList.add('center');
   selectItem.appendChild(img);
   selectItem.appendChild(title);
   selectItem.appendChild(color);
   selectItem.appendChild(select);
   selectItem.appendChild(label);
   selectItem.appendChild(delBtn);
   cartItems.appendChild(selectItem);
}

function del(item) {
   document.getElementById(item).remove();
   btn01--
   btn1.innerHTML = btn01;
}

var tyu = document.querySelectorAll('.tyu');

let ryt = tyu.lenght;
console.log(ryt);


var line_lst = document.querySelector('.part2__filter');
line_lst.addEventListener('click', ()=> {
   document.querySelector('.part2__nav').classList.toggle('active');
   document.querySelector('.part2__icon010').classList.toggle('active');
})

// next

var number = document.querySelectorAll('.item2__sixe');
var number2 = document.querySelectorAll('.item2__color');

number.forEach(item =>{ 
   item.addEventListener('click', (e) =>{
      number.forEach(el=>{ el.classList.remove('active'); });
   item.classList.add('active');
});
});
number2.forEach(item =>{ 
   item.addEventListener('click', (e) =>{
      number2.forEach(el=>{ el.classList.remove('active2'); });
   item.classList.add('active2');
});
});


// next 

var basket = document.querySelectorAll('.header__basket');
var basket0 = document.querySelectorAll('.catalog');
var mainp = document.querySelectorAll('.mainp');

basket.forEach(item =>{
   item.addEventListener('click', ()=>{
      document.querySelector('.page2').classList.remove('active');
      document.querySelector('.cart2').classList.add('active');
      document.querySelector('.header__list').classList.remove('active');
      document.querySelector('.header__icon_burger').classList.remove('active');
   })
})


mainp.forEach(item =>{
   item.addEventListener('click', ()=>{
      document.querySelector('.header20').classList.remove('active');
      document.querySelector('.page3').classList.remove('active');
      document.querySelector('.header2').classList.remove('active');
      document.querySelector('.page2').classList.remove('active');
      document.querySelector('.cart2').classList.remove('active');
      document.querySelector('.header__icon_burger').classList.remove('active');
      document.querySelector('.header__icon_burger2').classList.remove('active');
      document.querySelector('.header__list').classList.remove('active');
      document.querySelector('.header__list3').classList.remove('active');
   })
})

basket0.forEach(item =>{
   item.addEventListener('click', ()=>{
      document.querySelector('.page2').classList.add('active');
      document.querySelector('.header20').classList.add('active');
      document.querySelector('.header2').classList.add('active');
      document.querySelector('.page3').classList.add('active');
      document.querySelector('.cart2').classList.remove('active');
      document.querySelector('.header__icon_burger').classList.remove('active');
      document.querySelector('.header__icon_burger2').classList.remove('active');
      document.querySelector('.header__list').classList.remove('active');
      document.querySelector('.header__list3').classList.remove('active');
   })
})



// next