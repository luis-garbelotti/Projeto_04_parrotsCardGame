let numeroDeCartas = 0;
let todasAsCartas = [];

function inicioDeJogo(){

numeroDeCartas = parseInt(prompt("Com quantas cartas quer jogar? \nObs: Escolha um numero par de cartas entre 4 e 14."));

if (numeroDeCartas % 2 !== 0 || numeroDeCartas < 4 || numeroDeCartas > 14) {
    inicioDeJogo();
} else {
    sortearCartas();
}
} inicioDeJogo();


function sortearCartas () {
    // todasAsCartas.length = numeroDeCartas;

    for (let i = 0; i < numeroDeCartas; i++) {
        todasAsCartas.push(i);
    }
}