let listaDeNumerosSorteados = [];
let numeroMinimo = 1;
let numeroMaximo = 10;
let quantidadeDeNumerosSorteados = 5;

function alterarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarSorteio() {
    listaDeNumerosSorteados = [];
    for (let i = 0; i < quantidadeDeNumerosSorteados.value; i++) {
        let numeroAleatorio = Math.floor(Math.random() * (Number(numeroMaximo.value) - Number(numeroMinimo.value) + 1)) + Number(numeroMinimo.value);
        listaDeNumerosSorteados.push(numeroAleatorio);
    }
}

function validarSorteio() {
    if (quantidadeDeNumerosSorteados < 1 || quantidadeDeNumerosSorteados > Number(numeroMaximo.value) - Number(numeroMinimo.value)) {
        alterarTexto('#resultado .texto__paragrafo', 'Escolha uma quantidade válida de números para serem sorteados!')
    }
}
