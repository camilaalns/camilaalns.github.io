// jquery

var Site = {};


Site._init = function(){
    Site._menuMobile();

}

$(function(){
    Site._init();
});

Site._menuMobile = function(){
  var botaoMenu =  $('.menu-burger');
  var menu =  $('#menuTopo');

  botaoMenu.click(function(){
      menu.toggleClass('active');

  })
}
