window.onload=function(){
    var swiper = new Swiper("#mainSwiper", {
        centeredSlides: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      var swiper1 = new Swiper("#product", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        },
        breakpoints: {
            768: {
              slidesPerView: 3,  //브라우저가 768보다 클 때
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,  //브라우저가 1024보다 클 때
              spaceBetween: 30,
            },
          },
      });
}