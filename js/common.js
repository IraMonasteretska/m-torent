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
    if ($(this).scrollTop() > 40) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  });

  if ($(this).scrollTop() > 40) {
    $('.header').addClass('sticky');
  } else {
    $('.header').removeClass('sticky');
  }

  // mob menu
  $('.mobmenu').click(function () {
    $('.header-wrapper').addClass('show')
  })

  $('.closemenu').click(function () {
    $('.header-wrapper').removeClass('show');
    $(".overlay").fadeOut();
  })

  $(".mobmenu").click(function () {
    $(".overlay").fadeIn();
  });

  $(document).click(function (event) {
    let $target = $(event.target);
    if (!$target.closest('.header-wrapper').length && !$target.closest('.mobmenu').length) {
      $(".overlay").fadeOut();
      $('.header-wrapper').removeClass('show');
    }
  });

  // faq
  $('.faqrow_title').click(function () {
    $(this).next('.faqrow_descr').slideToggle();
    $(this).parents('.faqrow').toggleClass('open');
  })

  // product slider

  var swiper = new Swiper(".productslider", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      575: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1.7,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3.3,
        spaceBetween: 30,
      },
    },
  });

  //   Space containers
  var windowWidth = $(document).width(),
    containerWidth = $('.container').width(),
    paddingContainer = ((windowWidth - containerWidth) / 2)
  $('.suggestions-slwrap').css('padding-left', paddingContainer);


  $(window).resize(function () {
    var windowWidth = $(document).width(),
      containerWidth = $('.container').width(),
      paddingContainer = ((windowWidth - containerWidth) / 2)
    $('.suggestions-slwrap').css('padding-left', paddingContainer);
  });

  // language
$('.activelang').click(function(){
  $('.langbox__dropdown').toggle();
});
$(document).click(function (event) {
  let $target = $(event.target);
  if (!$target.closest('.activelang').length && !$target.closest('.langbox__dropdown').length) {
    $('.langbox__dropdown').hide();
  }
});





});