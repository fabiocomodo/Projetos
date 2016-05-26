/* Elementos disparadores da função */
var botao = document.querySelector(".btn-sanfona");

/* Elementos que serão sanfonados */
var sanfona = document.querySelector(".sanfona");

/* Captura o valor inicial da propriedade visibility da sanfona */
var	estadoInicial = window.getComputedStyle(sanfona, null).getPropertyValue("display");

/* Fução de animação da sanfona */
function escondeMostra() {
	/* Adiciona ou remova a classe "alterada" à sanfona e ao botão */
	sanfona.classList.toggle("alterada");
	botao.classList.toggle("alterada");
}

/* Definição de disparo da animação quando clicar nos botões */
botao.addEventListener("click", escondeMostra);
