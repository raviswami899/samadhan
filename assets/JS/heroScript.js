let lastScrollTop = 0;
let $sections = $('section');
let arr = [];
let heights = [];
let currentSection = "";


$(document).ready(function () {
  $('#exploreBtn').click(function () {
    $('html, body').animate({
      scrollTop: $('#features').offset().top
    }, 800);
  });

  $('#buyBtn').click(function () {
    $('html, body').animate({
      scrollTop: $('#buy').offset().top
    }, 800);
  });

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = this.hash;
    const $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing');
});



  // Scroll direction detection
  // $(window).on("scroll", function () {
    
  //   const hero = $('.hero');
  //   const h1 = $('.hero h1');
  //   const p = $('.hero p');
  //   const button = $('.hero .btn');

  //   let scrollTop = $(this).scrollTop();
  //   let direction = scrollTop > lastScrollTop ? "down" : "up";
  //   lastScrollTop = scrollTop;

  //   let newSection = "";

  //   $(".section").each(function () {
  //     let offsetTop = $(this).offset().top;
  //     let sectionHeight = $(this).outerHeight();

  //     if (
  //       scrollTop >= offsetTop - sectionHeight / 2 &&
  //       scrollTop < offsetTop + sectionHeight / 2
  //     ) {
  //       newSection = $(this).attr("id");
  //     }
  //   });

  //   if (newSection && newSection !== currentSection) {
  //     $(".section").removeClass("scroll-up scroll-down current-section new-section");
  //     if(currentSection){
  //       if (direction === "down") {
  //         $(`#${currentSection}`).addClass("scroll-down current-section");
  //         $(`#${newSection}`).addClass("scroll-down new-section");
  //       } else {
  //         $(`#${currentSection}`).addClass("scroll-up current-section");
  //         $(`#${newSection}`).addClass("scroll-up new-section");
  //       }
  //     }
  //     console.log(`Moving ${ direction } from "${currentSection}" to "${newSection}"`);
  //     currentSection = newSection;
  //   }

  //   const featureList = $('#featureList');

  //   if ($(window).scrollTop() > hero.height() * 0.6) {
  //     featureList.addClass('animate-down-feature-item');
  //   }


  //   if ($(window).scrollTop() < hero.height() / 4) {
  //     h1.removeClass('animate-up');
  //   }
  //   else {
  //     h1.addClass('animate-up');
  //   }
  //   if ($(window).scrollTop() < hero.height() * 0.8) {
  //     h1.addClass('animate-down');
  //     p.addClass('animate-down');
  //     button.addClass('animate-down');
  //   }
  //   else {
  //     h1.removeClass('animate-down');
  //     p.removeClass('animate-down');
  //     button.removeClass('animate-down');
  //   }

  // });



});

