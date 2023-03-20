var objeto = document.getElementById("objeto"); // Obtém a referência ao objeto

var x = window.innerWidth / 2; // Define a posição inicial do objeto no centro da tela
var y = window.innerHeight / 2;

var velocidadeX = 5; // Define a velocidade do objeto
var velocidadeY = 3;

function moverObjeto() {
	x += velocidadeX; // Atualiza a posição do objeto
	y += velocidadeY;

	if (x + objeto.offsetWidth > window.innerWidth || x < 0) { // Verifica se o objeto bateu nas laterais da tela
		velocidadeX *= -1; // Inverte a direção do movimento
	}

	if (y + objeto.offsetHeight > window.innerHeight || y < 0) { // Verifica se o objeto bateu no topo ou no fundo da tela
		velocidadeY *= -1; // Inverte a direção do movimento
	}

	objeto.style.left = x + "px"; // Atualiza a posição do objeto na tela
	objeto.style.top = y + "px";
}

setInterval(moverObjeto, 20); // Atualiza a posição do objeto a cada 20 milissegundos
