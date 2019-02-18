$(document).ready(function() {

  /******************************
      BOTTOM SCROLL TOP BUTTON
   ******************************/

  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
  
    var topPos = $(this).scrollTop();

    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  });

  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  }); //scroll top EMD

  /******************************
      MENU SCROLL
  ******************************/

  var menuleft = $(".menuleft");

  $(window).scroll(function() {
  
    var topPos = $(this).menuleft();

    if (topPos > 100) {
      $(menuleft).css("opacity", "1");

    } else {
      $(menuleft).css("opacity", "0");
    }

  });

  $(menuleft).click(function() {
    $('html, body').animate({
      menuleft: 0
    }, 800);
    return false;
  }); //scroll top EMD

  /*************************************
    LEFT MENU SMOOTH SCROLL ANIMATION
   *************************************/
  // declare variable
  var h1 = $("#obrecho").position();
  var h2 = $("#sobremim").position();
  var h3 = $("#curadoria").position();
  var h4 = $("#consumoconsciente").position();
  var h5 = $("#textoSeguranca").position();
  var h6 = $("#envio").position();
  var h7 = $("#troca").position();
  var h8 = $("#perguntas").position();
  var h9 = $("#feedbacks").position();
  var h10 = $("#contato").position();

  $('.link1').click(function() {
    $('html, body').animate({
      scrollTop: h1.top
    }, 500);
    return false;
  });

  $('.link2').click(function() {
    $('html, body').animate({
      scrollTop: h2.top
    }, 500);
    return false;
  });

  $('.link3').click(function() {
    $('html, body').animate({
      scrollTop: h3.top
    }, 500);
    return false;
  }); 

  $('.link4').click(function() {
    $('html, body').animate({
      scrollTop: h4.top
    }, 500);
    return false;
  }); 

  $('.link5').click(function() {
    $('html, body').animate({
      scrollTop: h5.top
    }, 500);
    return false;
  }); 

  $('.link6').click(function() {
    $('html, body').animate({
      scrollTop: h6.top
    }, 500);
    return false;
  }); 

  $('.link7').click(function() {
    $('html, body').animate({
      scrollTop: h7.top
    }, 500);
    return false;
  }); 

  $('.link8').click(function() {
    $('html, body').animate({
      scrollTop: h8.top
    }, 500);
    return false;
  }); 

  $('.link9').click(function() {
    $('html, body').animate({
      scrollTop: h9.top
    }, 500);
    return false;
  }); 

  $('.link10').click(function() {
    $('html, body').animate({
      scrollTop: h10.top
    }, 500);
    return false;
  }); 

 //  scroll to a section on page load

  var page_url = window.location.href;
  var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
  if(page_id == "sustentavel"){
    $("html, body").animate({
      scrollTop: $("#scroll-" + page_id).offset().top
    }, 500);
  }else if(page_id == "seguranca"){
    $("html, body").animate({
      scrollTop: $("#scroll-" + page_id).offset().top
    }, 500);
  }else if(page_id == "entregas"){
    $("html, body").animate({
      scrollTop: $("#scroll-" + page_id).offset().top
    }, 500);
  }
  else if(page_id == "troca"){
    $("html, body").animate({
      scrollTop: $("#scroll-" + page_id).offset().top
    }, 500);
  }else if(page_id == "perguntas"){
    $("html, body").animate({
      scrollTop: $("#scroll-" + page_id).offset().top
    }, 500);
  }else if(page_id == "feedback"){
    $("html, body").animate({
      scrollTop: $("#scroll-" + page_id).offset().top
    }, 500);
  }else if(page_id == "contato"){
    $("html, body").animate({
      scrollTop: $("#scroll-" + page_id).offset().top
    }, 500);
  }


}); // ready() END