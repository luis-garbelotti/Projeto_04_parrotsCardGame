let numeroDeCartas = 0;
let cadaCarta;
let todasAsCartas = [];


function comparador() { 
	return Math.random() - 0.5; 
}

function inicioDeJogo(){

numeroDeCartas = parseInt(prompt("Com quantas cartas quer jogar? \nObs: Escolha um numero par de cartas entre 4 e 14."));

if (numeroDeCartas % 2 !== 0 || numeroDeCartas < 4 || numeroDeCartas > 14) {
    inicioDeJogo();
} else {
    sortearCartas();
}
} inicioDeJogo();


function sortearCartas () {

    for( let i = 0; i < numeroDeCartas; i++){
        const tirarCartas = document.querySelector(".escondido");
        tirarCartas.classList.remove('escondido');
        
    }
    
}