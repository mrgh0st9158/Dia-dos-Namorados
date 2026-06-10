


/* ==========================================================================
   CÓDIGOS SITE
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
   SISTEMA DA ANIMAÇÃO CARROSEL
   ========================================================================== */

var shadow = '0 20px 50px rgba(0,34,45,0.5)';

function styles(item_id, x, y, z , opacity, shadow){
	$(item_id).css({
		transform: 'translate3d('+ x +'px, ' + y + 'px, ' + z +'px) ',
		opacity: opacity,
		'box-shadow': shadow
	});
}

$('#one').click(function(){
	$('#one').addClass('focus');
	$('#two').removeClass('focus');
	$('#three').removeClass('focus');
	styles('#first', 0, 0, 0, 1, shadow);
	styles('#second', 70, -80, -50, 0.6, 'none');
	styles('#third', 110, 80, -60, 0.1, 'none');
}); 


$('#two').click(function(){
	$('#one').removeClass('focus');
	$('#two').addClass('focus');
	$('#three').removeClass('focus');
	styles('#first', 110, 80, -60, 0.1, 'none');
	styles('#second', 0, 0, 0, 1, shadow);
	styles('#third', 70, -80, -50, 0.6, 'none');
});
$('#three').click(function(){
	$('#one').removeClass('focus');
	$('#two').removeClass('focus');
	$('#three').addClass('focus');
	styles('#first', 70, -80, -50, 0.6, 'none');
	styles('#second', 110, 80, -60, 0.1, 'none');
	styles('#third', 0, 0, 0, 1, shadow);
});