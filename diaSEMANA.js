let resposta = document.getElementById('resposta')

function verificar(){
    let dia = Number(document.getElementById('dia').value)
    console.log(dia)

    if(dia == 1){
        resposta.innerHTML = "O dia da semana selecionado é domingo!"
    }else if (dia == 2){
        resposta.innerHTML = "O dia da semana selecionado é segunda!"

    }else if (dia == 3){
        resposta.innerHTML = "O dia da semana selecionado é terça!"

    }else if (dia == 4){
        resposta.innerHTML = "O dia da semana selecionado é quarta!"
        
    }else if (dia == 5){
        resposta.innerHTML = "O dia da semana selecionado é quinta!"

    }else if (dia == 6){
        resposta.innerHTML = "O dia da semana selecionado é sexta!"
        
    }else if (dia == 7){
        resposta.innerHTML = "O dia da semana selecionado é sábado!"

    }else{
        resposta.innerHTML = "O valor digitado é invalido! não corresponde à um dia da semana!"
    }

    // Estilo da Resposta
    resposta.style.fontSize = "5rem"
    resposta.style.color= "black"
    resposta.style.fontFamily = "System UI"
    resposta.style.transition = "10s"

}