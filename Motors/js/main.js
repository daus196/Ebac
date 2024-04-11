$(document).ready(function () {
    $('#carrocel').slick({
        autoplay:true
    })

    $('.menu-hamburguer').click(function (e) { 
        e.preventDefault();
        $('nav').slideToggle();
        
    });


    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'(33) 99999-9999'
    })

    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:true,
                minlength:11
            },
        },
        messages:{
            nome: 'Por favor, insira o seu nome',
            email:'Por Favor, insira seu E-mail'
        },
        submitHandler:function(form){
            console.log(form)
        },
        invalidHandler:function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function () { 
        const destino = $('#contato')
        const nomeVeiculo= $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(nomeVeiculo)
        
        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    });

});