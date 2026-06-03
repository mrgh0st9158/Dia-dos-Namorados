function abrir_tela2(){
    document.getElementById("tela_inicial").style.display = "none"

    document.getElementById("tela2").style.display = "block"

}

function botao_presente(){
    document.getElementById("tela2").style.display = "none"
    
    document.getElementById("tela_dica_namoro").style.display = "block"
    
}

function caixa_bombom_dica(){
    document.getElementById("p-dica_caixa_bombom").innerHTML = 
    ("Que tal surpreender seu parceiro ou parceira com uma linda caixa de bombons. Isso aí, você não precisa nem avisar nada. Pode ser uma surpresa para ele(a). Tenho certeza de que ele(a) vai adorar.  (Você ganha pontos extras se tomar banho antes da surpresa!)")

    document.getElementById("foto_gato_chocolate").style.display = "block"
}
