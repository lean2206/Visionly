window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'),{    
        slidesToShow: 7,
        slidesToScroll: 2,
        draggable: true,
        dots: '.carousel__indicadores',
        dragVelocity: 1.2,
        rewind: true,
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente'
        }
    });
});

