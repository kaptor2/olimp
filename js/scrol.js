var lastScrollTop = 0;

$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st < lastScrollTop){
       // код для прокрутки вниз
       $('.top-ph-ba').removeClass('active1');
       $('.top-ph-ba').addClass('activeNon');
   } else {
      // код для прокрутки вверх
		$('.top-ph-ba').removeClass('activeNon');
		$('.top-ph-ba').addClass('active1');
   }
   lastScrollTop = st;
});


function lololo() {
    $('.smol-menu p').fadeTo(300)
    $('.smol-menu').slideToggle(300)
 }
 
 $(function(){
    $(window).resize(function() {
          $(".s-lider-i").height( ($(window).height() - 70) / 1.5);
    })
});

 $(function(){
    $(window).ready(function() {
          $(".s-lider-i").height( ($(window).height() - 70) / 1.5);
    })
});