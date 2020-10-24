$(document).ready(function () {
   $('.carusel').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      dots: false,
      arrows: false,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,

            }
         },
         {
            breakpoint: 965,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 640,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               adaptiveHeight: true,
               centerMode: true
            }
         }

      ]

   });



});