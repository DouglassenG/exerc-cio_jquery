
$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const espacoDigitavel = $('#espaco-digitavel').val();
        const novaTarefa = $('<li></li>').text(espacoDigitavel);

        novaTarefa.on('click', function() {
            if ($(this).css('text-decoration') === 'line-through') {
                } else {
                $(this).css('text-decoration', 'line-through'); 
            }
        });

        $(espacoDigitavel).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#espaco-digitavel').val('');
    })
})


