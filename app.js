let listaDeNumerosSorteados = [];
let quantidadeDeNumerosSorteados = document.querySelector('#quantidade');
let numeroMinimo = document.querySelector('#de')
let numeroMaximo = document.querySelector('#ate');

function alterarTexto (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function validarSorteio() {
    if (numeroMaximo.value <= numeroMinimo.value) {
        alterarTexto('#resultado .texto__paragrafo', 'Escolha um intervalo de números válido!');
    } else if (quantidadeDeNumerosSorteados.value < 1 || quantidadeDeNumerosSorteados.value > numeroMaximo.value - numeroMinimo.value + 1) { 
        alterarTexto('#resultado .texto__paragrafo', 'Escolha uma quantidade de números válida para ser sorteada!');
    }
}

function sortear() {
    if (validarSorteio()) {
        listaDeNumerosSorteados = [];
    
        for (i = 1; i <= quantidadeDeNumerosSorteados.value; i++) {
            let numeroAleatorio = (Math.floor(Math.random() * (Number(numeroMaximo.value) - Number(numeroMinimo.value) + 1)) + Number(numeroMinimo.value));
            listaDeNumerosSorteados.push(numeroAleatorio);
        }

        let numeroDaPalavra = quantidadeDeNumerosSorteados.value == 1 ? 'Número sorteado' : 'Números sorteados';
        alterarTexto('#resultado .texto__paragrafo', `${numeroDaPalavra}: ${listaDeNumerosSorteados}`);
        document.getElementById('btn-reiniciar').classList.replace('container__botao-desabilitado', 'container__botao');
    }
}
