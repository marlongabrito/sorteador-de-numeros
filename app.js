let listaDeNumerosSorteados = [];
let quantidadeDeNumerosSorteados = document.querySelector('#quantidade');
let numeroMinimo = document.querySelector('#de')
let numeroMaximo = document.querySelector('#ate');

function sortear() {
    listaDeNumerosSorteados = [];
    for (i = 1; i <= quantidadeDeNumerosSorteados.value; i++) {
        let numeroAleatorio = (Math.floor(Math.random() * Number(numeroMaximo.value)) + Number(numeroMinimo.value));
        listaDeNumerosSorteados.push(numeroAleatorio);
    }

    alterarTexto('#resultado .texto__paragrafo', `Números sorteados: ${listaDeNumerosSorteados}`)
    
    console.log(listaDeNumerosSorteados);
    console.log(numeroMinimo.value);
    console.log(numeroMaximo.value);
    return listaDeNumerosSorteados;
}

function alterarTexto (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}