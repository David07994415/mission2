$(document).ready(function(){
    $(".navbar-btn").click(function () {
      $(".navbar-collapse").toggleClass("show");
    })
});

const swiper = new Swiper('.swiper', {
    slidesPerView:1,
    spaceBetween:0,
    breakpoints: {
        376: {
          slidesPerView: 3,
          spaceBetween: 24,
          slidesPerGroup: 3,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
     },
});


// 開起選單
$('.dropdown-btn').click(function(e) {
  $('.dropdown-menu').toggleClass('show');
});

// 切換按鈕文字
$('.new-to-old').click(function(e) {
  e.preventDefault();
  $('.dropdown-menu').toggleClass('show');
  $('.dropdown-btnText').text($('.new-to-old').text());
});

$('.old-to-new').click(function(e) {
  e.preventDefault();
  $('.dropdown-menu').toggleClass('show');
  $('.dropdown-btnText').text($('.old-to-new').text());
});