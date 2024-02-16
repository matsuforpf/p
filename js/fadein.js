// JavaScript Document
$(function(){
  $(window).scroll(function (){
    $('.js-fade').each(function(){
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > pos - windowHeight + 100){
        $(this).addClass('scroll');
      }
    });
  });
});

