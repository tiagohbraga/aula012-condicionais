let idade = Number(prompt('Qual a sua idade?')
)
if(idade>=18 && idade<60){
    alert('+ que pode tirar o titulo de eleitor, já deveria ter tirado!')
}else if(idade>=60){
    alert('É optativo seu voto!')
}else if (idade === 16 || idade === 17){
    alert('Você já pode tirar o titulo de eleitor mas o voto ainda é optativo')
}else{
    alert('Você ainda não pode tirar o titulo de eleitor!')
}