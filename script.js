const baly_video = document.getElementById("video_baly_miando")


function voltar_inicio(){
    const todas_secoes = document.querySelectorAll("section")

    todas_secoes.forEach(function(secoes){
        secoes.style.display = "none"

    })

    baly_video.pause();

    document.getElementById("tela_inicial").style.display = "block"

    
}


function abrir_tela_dicas(){
    document.getElementById("tela_inicial").style.display = "none"

    document.getElementById("tela_dicas").style.display = "block"

    baly_video.play();

}

function botao_presente(){
    document.getElementById("tela_dicas").style.display = "none"
    
    document.getElementById("tela_dica_presentes").style.display = "block"

    baly_video.pause();
    
}

function caixa_bombom_dica(){
    document.getElementById("p-dica_caixa_bombom").innerHTML = 
    ("Que tal surpreender seu parceiro ou parceira com uma linda caixa de bombons. Isso aí, você não precisa nem avisar nada. Pode ser uma surpresa para ele(a). Tenho certeza de que ele(a) vai adorar.  (Você ganha pontos extras se tomar banho antes da surpresa!)")

    document.getElementById("foto_gato_chocolate").style.display = "block"

    baly_video.pause();
}
