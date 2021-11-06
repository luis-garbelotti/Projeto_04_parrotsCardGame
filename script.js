function inicioDeJogo(){

let numeroDeCartas = parseInt(prompt("Com quantas cartas quer jogar? \nObs: Escolha um numero par de cartas."));

if (numeroDeCartas % 2 !== 0) {
    inicioDeJogo();
} else {
    
}
} inicioDeJogo();