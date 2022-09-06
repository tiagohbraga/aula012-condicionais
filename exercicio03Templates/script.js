let nota1 = Number(prompt('Qual sua primeira nota?'))
let nota2 = Number(prompt('Qual sua segunda nota?'))
let nota3 = Number(prompt('Qual sua terceira nota?'))
let nota4 = Number(prompt('Qual sua quarta nota?'))

let media = Number((nota1+nota2+nota3+nota4)/4)


if(media>=5 && media<=10){
        alert('Aprovado')
        console.log(media)
}else if(media>=3 && media <=10){
        alert('Recuperação')
        console.log(media)
}else if(media<3){
        alert('reprovado')
        console.log(media)    
}else{
    alert('dado invalido')
    console.log(media)
}
