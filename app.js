let numeroMinimo;
let numeroMaximo;
let quantidadeDeNumerosSorteados;
let listaDeNumerosSorteados = [];

function alterarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function gerarSorteio() {
    listaDeNumerosSorteados = [];
    for (let i = 0; i < quantidadeDeNumerosSorteados; i++) {
        let numeroAleatorio = gerarNumeroAleatorio(numeroMinimo, numeroMaximo);
        while (listaDeNumerosSorteados.includes(numeroAleatorio)) {
            numeroAleatorio = gerarNumeroAleatorio(numeroMinimo, numeroMaximo);
        }
    listaDeNumerosSorteados.push(numeroAleatorio);
    }
}

function validarSorteio() {
    numeroMinimo = document.querySelector('#de').valueAsNumber;
    numeroMaximo = document.querySelector('#ate').valueAsNumber;
    quantidadeDeNumerosSorteados = document.querySelector('#quantidade').valueAsNumber;

    if (isNaN(numeroMinimo) || isNaN(numeroMaximo) || isNaN(quantidadeDeNumerosSorteados)) {
    alterarTexto('#resultado .texto__paragrafo', 'Preencha todos os campos com números!');
    } else if (!Number.isInteger(numeroMinimo) || !Number.isInteger(numeroMaximo) || !Number.isInteger(quantidadeDeNumerosSorteados)) {
        alterarTexto('#resultado .texto__paragrafo', 'Use apenas números inteiros, sem decimais!');
    } else if (numeroMinimo > numeroMaximo || numeroMinimo < 1 || numeroMaximo < 1) {
        alterarTexto('#resultado .texto__paragrafo', 'Escolha um intervalo válido de números!');
    } else if (quantidadeDeNumerosSorteados < 1 || quantidadeDeNumerosSorteados > numeroMaximo - numeroMinimo + 1) {
        alterarTexto('#resultado .texto__paragrafo', 'Escolha uma quantidade válida de números para serem sorteados!');
    } else {
        gerarSorteio();
        let numeroDaPalavra = quantidadeDeNumerosSorteados == 1 ? 'Número sorteado' : 'Números sorteados';
        alterarTexto('#resultado .texto__paragrafo', `${numeroDaPalavra}: ${listaDeNumerosSorteados}`);
        document.querySelector('#btn-reiniciar').classList.replace('container__botao-desabilitado', 'container__botao');
    }
}

function limparCampo() {
    document.querySelector('#de').value = '';
    document.querySelector('#ate').value = '';
    document.querySelector('#quantidade').value = '';
}

function reiniciar() {
    limparCampo();
    alterarTexto('#resultado .texto__paragrafo', 'Números sorteados: nenhum até agora');
    document.querySelector('#btn-reiniciar').classList.replace('container__botao', 'container__botao-desabilitado');
}
