$(document).ready(function () {
  // main slider
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  // styled select
  if ($('.styledselect').length) {
    $('.styledselect').select2({
      minimumResultsForSearch: -1,
    });
  }

  // menu
  $('.submenu>a').click(function (e) {
    e.preventDefault();
    $(this).next('.sublist').slideToggle();
  })

  $(document).click(function (event) {
    let $target = $(event.target);
    if (!$target.closest('.submenu>a').length && !$target.closest('.sublist').length) {
      $('.sublist').slideUp();
    }
  });

  // header fixed
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  });

  if ($(this).scrollTop() > 10) {
    $('.header').addClass('sticky');
  } else {
    $('.header').removeClass('sticky');
  }

  // mob menu
  $('.mobmenu').click(function(){
    $('.header-wrapper').addClass('show')
  })




});