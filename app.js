let listaDeNumerosSorteados = [];
let numeroMinimo = parseInt(document.querySelector('#de').value);
let numeroMaximo = parseInt(document.querySelector('#ate').value);
let quantidadeDeNumerosSorteados = parseInt(document.querySelector('#quantidade').value);
let numeroAleatorio;

function alterarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarSorteio() {
    listaDeNumerosSorteados = [];
    for (let i = 0; i < quantidadeDeNumerosSorteados; i++) {
        numeroAleatorio = gerarNumeroAleatorio(numeroMaximo, numeroMinimo);
        while (listaDeNumerosSorteados.includes(numeroAleatorio)) {
            numeroAleatorio = gerarNumeroAleatorio(numeroMaximo, numeroMinimo);
        }
    listaDeNumerosSorteados.push(numeroAleatorio);
    }
}

function gerarNumeroAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function validarSorteio() {
    if (numeroMaximo <= numeroMinimo) {
        alterarTexto('#resultado .texto__paragrafo', 'Escolha um intervalo válido de números!');
    } else if (quantidadeDeNumerosSorteados < 1 || quantidadeDeNumerosSorteados > numeroMaximo - numeroMinimo) {
        alterarTexto('#resultado .texto__paragrafo', 'Escolha uma quantidade válida de números para serem sorteados!');
    } else {
        gerarSorteio();
        let numeroDaPalavra = quantidadeDeNumerosSorteados == 1 ? 'Número sorteado' : 'Números sorteados';
        alterarTexto('#resultado .texto__paragrafo', `${numeroDaPalavra}: ${listaDeNumerosSorteados}`);
    }
}
