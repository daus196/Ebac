$(document).ready(function () {
    $('#telefone').mask('(33) 99999-9999',{
        placeholder:'(33) 99999-9999'
    })

    $('#cpf').mask('000.000.000-00', {
        reverse: true,
        placeholder:'000.000.000-00'
    });

    $('#cep').mask('00000-000',{
        placeholder:'00000-000'
    }); 

    $('#numeroEnd').mask('00000000')

});