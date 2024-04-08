document.getElementById('form').addEventListener('submit', (evt)=>{
    evt.preventDefault()
    const CampoA = document.getElementById('CampoA').value
    const CampoB = document.getElementById('CampoB').value
    const menssage = document.getElementById('msg')

    if (CampoB> CampoA){
        menssage.innerHTML='Parabens o B é maior que o A'
        
        LimparFormulario()        
    }else{
        menssage.innerHTML='O numero B deve ser maior que o numero A'
        LimparFormulario()
        
    }
    
})

function LimparFormulario(){
    document.getElementById('CampoA').value = ''
    document.getElementById('CampoB').value =''

}

