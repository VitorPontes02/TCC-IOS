// Botão do navbar
const container = document.querySelector(".caixa-container");
const navmenu = document.querySelector(".Nav-Menu");

container.addEventListener("click", () => {
    container.classList.toggle("active");
    navmenu.classList.toggle("active");
})


$('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'cortes-btn') {
      eachBoxes('cortes', boxes);
    } else if(type == 'maquiagem-btn') {
      eachBoxes('maquiagem', boxes);
    } else if(type == 'manicure-btn') {
      eachBoxes('manicure', boxes);
    } else {
      eachBoxes('all', boxes);
    }

  });

  function eachBoxes(type, boxes) {

    if(type == 'all') {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }





let navBtn = $('.nav-item');

  let bannerSection = $('#mainSlider');
  let aboutSection = $('#about-area');
  let servicesSection = $('#service-area');
  let avaliacoesSection = $('#avaliacoes-area');
  let portfolioSection = $('#portfolio-area');
  let contactSection = $('#contact-area');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'about-menu') {
      scrollTo = aboutSection;
    } else if(btnId == 'services-menu') {
      scrollTo = servicesSection;
    } else if(btnId == 'avaliacoes-menu') {
      scrollTo = avaliacoesSection;
    } else if(btnId == 'portfolio-menu') {
      scrollTo = portfolioSection;
    } else if(btnId == 'contact-menu') {
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 20
    }, 1200);
  });