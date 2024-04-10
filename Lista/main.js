$(document).ready(function(){
    
    $('form').on('submit',(evt)=>{
        evt.preventDefault()
        const novaLista =$('#marcaVerificado').val()
        const novoItem =$('#box')
        $(`<li>${novaLista}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn();
        $('#marcaVerificado').val('')
    } )

    $('ul').on('click','li', function () {

        $(this).addClass('marcarTexto');
       
    });

    

})