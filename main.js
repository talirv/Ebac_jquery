$(document).ready(function(){
 
  $('form').on('submit', function(e){
    e.preventDefault(); 
    const novaTarefa = $('#input-tarefa').val();
    const novoItem = $('<li></li>').text(novaTarefa);
    $(`${novaTarefa}`).appendTo(novoItem);
    $(novoItem).appendTo('ul'); 
  })

  $('ul').on('click', 'li', function(){
    $(this).toggleClass('tarefaCompleta')
  })





})