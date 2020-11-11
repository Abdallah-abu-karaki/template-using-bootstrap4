$(document).ready(function()
{

  'use strict';
var windowhight = $(window).height();
var topbar      = $('.upper-bar').innerHeight();
var navbar      = $('.navbar').innerHeight();

$('.slider, .carousel-item').height(windowhight - (topbar + navbar)-100);
//=============================

$('.work ul li').on('click' , function(){
  $(this).addClass('active').siblings().removeClass('active');
  if($(this).data('class') === "All"){
    $('.shuffle-img .col-md').css('opacity' , 1 );
  }else{
    $('.shuffle-img .col-md').css('opacity' , '0.07');
    $($(this).data('class')).parent().css('opacity' ,1);
  }
});
});
