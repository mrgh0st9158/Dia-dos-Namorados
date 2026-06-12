
/* ==========================================================================
   1. CÓDIGOS DO SITE
   ========================================================================== */
   

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

/* ==========================================================================
   2. SISTEMA DA ANIMAÇÃO CARROSEL
   ========================================================================== */

var shadow = '0 20px 50px rgba(0,34,45,0.5)';

// Função para aplicar os estilos CSS nos blocos
function styles(item_id, x, y, z, opacity, shadowValue) {
    const elemento = document.querySelector(item_id);
    if (elemento) {
        elemento.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)';
        elemento.style.opacity = opacity;
        elemento.style.boxShadow = shadowValue;
    }
}

// Função para gerenciar qual botão ganha a classe 'focus'
function alternarFoco(botaoAtivo) {
    document.getElementById('one').classList.remove('focus');
    document.getElementById('two').classList.remove('focus');
    document.getElementById('three').classList.remove('focus');
    
    document.getElementById(botaoAtivo).classList.add('focus');
}

// Eventos de clique para cada botão

function alternar_texto(id_texto_bloco){
    if(id_texto_bloco){
        document.getElementById("p-buque").classList.add("tela_escondida")
        document.getElementById("p-caixa_bombom").classList.add("tela_escondida")
        document.getElementById("p-carta_a_mao").classList.add("tela_escondida")
    }

    document.getElementById(id_texto_bloco).classList.remove("tela_escondida")

}

document.getElementById('one').addEventListener('click', function() {
    alternarFoco('one');
    styles('#first', 120, -40, 0, 1, shadow);
    styles('#second', 400, 0, -60, 0.6, 'none');
    styles('#third', -100, 0, -50, 0.1, 'none');

    alternar_texto("p-buque")
});

document.getElementById('two').addEventListener('click', function() {
    alternarFoco('two');
    styles('#first', 400, 0, -60, 0.1, 'none');
    styles('#second', 120, -40, 0, 1, shadow);
    styles('#third', -100, 0, -50, 0.6, 'none');

    alternar_texto("p-caixa_bombom")
    
});

document.getElementById('three').addEventListener('click', function() {
    alternarFoco('three');
    styles('#first', -100, 0, -50, 0.6, 'none');
    styles('#second', 400, 0, -60, 0.1, 'none');
    styles('#third', 120, -40, 0, 1, shadow);

    alternar_texto("p-carta_a_mao")
});