
const alunos =[
    {
        nome:'Douglas',
        nota: 10
    },
    {
        nome:'luiz',
        nota: 1
    },
    {
        nome:'joao',
        nota: 6
    },
    {
        nome:'Maria',
        nota: 7
    },
    
]

function resultado(){
    let teste = alunos.filter(aluno => aluno.nota >=6)
    console.log(teste)
}

resultado()