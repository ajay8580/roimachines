$(document).ready(function () {
  $('#ast-scroll-top').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#ast-scroll-top').fadeIn();
    } else {
      $('#ast-scroll-top').fadeOut();
    }
  });

  $('#ast-scroll-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
});


$(document).ready(function () {
  var headerHeight = $('.header').outerHeight();

  $(window).scroll(function () {
    if ($(this).scrollTop() > headerHeight) {
      $('.navbar').addClass('fixed-navbar');
    } else {
      $('.navbar').removeClass('fixed-navbar');
    }
  });
});

// Filter
$(document).ready(function () {
  $('.filter-item').click(function () {
    const value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.post-box').show('1000');
    }
    else {
      $('.post-box').not('.' + value).hide('1000');
      $('.post-box').filter('.' + value).show('1000');
    }
  });
  $(".filter-item").click(function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });
});


Fancybox.bind("[data-fancybox]", {
});

AOS.init();

if ($(".mySwiper1")) {
  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 2.5,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
      },
      1024: {
        slidesPerView: 2.5,
      }
    }
  });
}

if ($(".mySwiper2")) {
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    loop: true,
    reverseDirection: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
      },
      1024: {
        slidesPerView: 3,
      }
    }

  });

}



// if($(".mySwiper3")) {
//   var swiper3 = new Swiper(".mySwiper3", {
//     slidesPerView: 7,
//     loop: true,
//     autoplay: {
//         delay: 0, 
//         disableOnInteraction: false 
//     },
//     speed: 5000,
//     breakpoints: {
//         0: {
//             slidesPerView: 2,
//         },
//         500: {
//             slidesPerView: 5,
//         },
//         1024: {
//             slidesPerView: 7,
//         }
//     }
//   });
// //   var swiperContainer = document.querySelector('.mySwiper3');
// // swiperContainer.addEventListener('mouseenter', function () {
// //   swiper3.autoplay.stop();
// // });

// // swiperContainer.addEventListener('mouseleave', function () {
// //   swiper3.autoplay.start();
// // });
// }







if ($(".mySwiper4")) {
  var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 4,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        centeredSlides: true,
      },
      500: {
        slidesPerView: 2,
        centeredSlides: true,
      },
      800: {
        slidesPerView: 3,
        centeredSlides: true,
      },
      1200: {
        slidesPerView: 4,
        centeredSlides: true,
      }
    }

  });
}


if ($(".mySwiper5")) {
  var swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: 6,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1.2,
        centeredSlides: true,
      },
      500: {
        slidesPerView: 3.5,
        centeredSlides: true,
      },
      800: {
        slidesPerView: 4,
        // centeredSlides: true,
      },
      1200: {
        slidesPerView: 5,
        centeredSlides: true,
      }
    }

  });
}


if ($(".mySwiper6")) {
  var swiper6 = new Swiper(".mySwiper6", {
    slidesPerView: 2,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      800: {
        slidesPerView: 1.5,
        centeredSlides: true,
      },
      1200: {
        slidesPerView: 2,
        centeredSlides: false,
      }
    }

  });
}

if ($(".mySwiper7")) {
  var swiper7 = new Swiper(".mySwiper7", {
    slidesPerView: 2,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1.2,
        centeredSlides: true,
      },
      800: {
        slidesPerView: 2.5,
        centeredSlides: true,
      },
      1200: {
        slidesPerView: 3,
        centeredSlides: true,
      }
    }

  });
}



  var splide = new Splide('.splide', {
    perPage: 7,
    type: 'loop',
    drag: 'free',
    focus: 'center',
    // autoScroll: {
    //   speed: 1,
    // },
    arrows: false,
    pagination: false,
    // autoplay: true,
    breakpoints: {
      640: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      },
    },
  });

  splide.mount();


  const offcanvasList = document.querySelectorAll('.offcanvas');

  offcanvasList.forEach(function(offcanvas) {
    const prevSibling = offcanvas.previousElementSibling;
    if (prevSibling) {
      prevSibling.classList.add("active_in");
    }
  });

  
  






