

new WOW().init();

$(window).on('load' ,function() {
	$(".loader").delay(1000).fadeOut("slow" , function(){
        $("body").removeClass('hide');
    });
    $("#preloader").delay(1000).slideUp("slow");
    $(".bg-img").delay(3000).fadeOut("slow");
});
// slider
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true,

      },
      600:{
          items:3,
          nav:true,

      },
      1000:{
          items:4,
          nav:true,
      }
  }
})

// counter
var counted = 0;
$(window).scroll(function() {

  var oTop = $('.counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2500,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }

        });
    });
    counted = 1;
  }
});
// Frequently Asked Questions
var action="click";
var speed="500";

$(document).ready(function() {
    $('li.q').on(action, function() {
        $(this).next().slideToggle(speed).siblings('li.a').slideUp();
    });
});

//cursor
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})
//nav-bar
$(document).ready(function(){
  $('.toggle').bind('click',function(event){
      $('nav').slideToggle();
  });
  $(window).resize(function(){  
      var w = $(window).width();  
      if(w >= 991) {  
          $('nav').removeAttr('style');  
      }  
  });
});    

$(document).ready(function(){
  $('.impotant-box').bind('click',function(event){
      $('.impotant-box p').slideDown();
  });
});    