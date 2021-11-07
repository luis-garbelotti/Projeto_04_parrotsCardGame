let numeroDeCartas = 0;
let todasAsCartas = [];

let tirarCartas;



function comparador() { 
	return Math.random() - 0.5; 
}


function inicioDeJogo() {

    numeroDeCartas = parseInt(prompt("Com quantas cartas quer jogar? \nObs: Escolha um numero par de cartas entre 4 e 14."));

    if (numeroDeCartas % 2 !== 0 || numeroDeCartas < 4 || numeroDeCartas > 14) {
        inicioDeJogo();
    } else {
        
        mostrarCartas();
}
} inicioDeJogo();


function mostrarCartas () {
    for (i = 0; i < numeroDeCartas/2; i++) {
        todasAsCartas.push(`Arquivos/${i}.gif`);
        todasAsCartas.push(`Arquivos/${i}.gif`);
    }

    todasAsCartas.sort(comparador);
    
    for( let i = 0; i < numeroDeCartas; i++){
        tirarCartas = document.querySelector(".escondido");
        tirarCartas.classList.remove('escondido');
        tirarCartas.innerHTML = `   <div class="front-face face"  data-identifier="front-face">
                                        <img src="Arquivos/front.png" alt="frente-da-carta">
                                    </div>
                                    <div class="back-face face" data-identifier="back-face">
                                        <img src="${todasAsCartas[i]}">
                                    </div>  `;
    }
    
}

function virarCarta (carta) {

    carta.children[0].classList.add('virada-frente');
    carta.children[1].classList.add('virada-verso');

} 

