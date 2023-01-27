function criarQuizz() {

    const remove = document.querySelector('.container-conteudos');
    remove.classList.add('esconder');

    const add = document.querySelector('.container-criandoquizz');
    add.classList.remove('esconder');

}

function continuarCriacao() {

    const add = document.querySelector('.container-criandoquizz');
    add.classList.add('esconder');

    const remove = document.querySelector('.desk9');
    remove.classList.remove('esconder');

}

function criarNiveis() {

    const add = document.querySelector('.desk9');
    add.classList.add('esconder');

    const remove = document.querySelector('.desk10');
    remove.classList.remove('esconder');

}

function finalizarCriacao() {

    const add = document.querySelector('.desk10');
    add.classList.add('esconder');

    const remove = document.querySelector('.container-fim-do-quizz')
    remove.classList.remove('esconder');

}

function voltarPaginaInicial() {

    const add = document.querySelector('.container-fim-do-quizz');
    add.classList.add('esconder');

    const remove = document.querySelector('.container-conteudos');
    remove.classList.remove('esconder');

}


function alternativaSelecionada(escolhida) {

    const alternativaErrada = document.querySelector('.correta');
    const alternativaCerta = document.querySelector('.errada')

    if (alternativaErrada !== null) {

        alternativaErrada.classList.remove('correta');

    }

    const selecionada = document.querySelector(escolhida);

    selecionada.classList.add('correta');

    if (!selecionada.classList.contains('.errada'))
        selecionada.classList.add('errada');
}