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

$(document).ready(function(){

    function carrinho(){
        var botaoRemover =  "<a href='#' id='button-trash'><img class='trash' src='img/icones/trash.png' alt=''></a>"
    }

    $(".botao-remover").click(function(event) {
        event.preventDefault();
        $(this).parent().parent().remove();

    });
})