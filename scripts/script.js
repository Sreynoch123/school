
var accdr = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accdr.length; i++) {
  accdr[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle('sticky',window.scrollY>0);
  });
  var menu=document.querySelector('.menu');
  var menuBtn=document.querySelector('.fa-bars');
  var closeBtn=document.querySelector('.fa-xmark');
  menuBtn.addEventListener("click",()=>{
    menu.classList.add('activee');
  });
  closeBtn.addEventListener("click",()=>{
    menu.classList.remove('activee');
  });