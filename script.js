const baly_video_miando = document.getElementById("video_baly_miando")
const baly_video_mordendo = document.getElementById("video_baly_mordendo")


function voltar_inicio(){
    const todas_secoes = document.querySelectorAll("section")

    todas_secoes.forEach(function(secoes){
        secoes.classList.add("tela_escondida")

    })

    baly_video_miando.pause();
    baly_video_mordendo.pause();

    document.getElementById("tela_inicial").classList.remove("tela_escondida")

    
}


function abrir_tela_dicas(){
    document.getElementById("tela_inicial").classList.add("tela_escondida")

    document.getElementById("tela_dicas").classList.remove("tela_escondida")

    baly_video_miando.play();

}

function botao_presente(){
    document.getElementById("tela_dicas").classList.add("tela_escondida")
    
    document.getElementById("tela_dica_presentes").classList.remove("tela_escondida")

    baly_video_miando.pause();

    baly_video_mordendo.play();

}
