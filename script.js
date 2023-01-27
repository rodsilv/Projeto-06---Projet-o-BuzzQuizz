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

    const altern1 = document.querySelector('.alternativa1');
    const altern2 = document.querySelector('.alternativa2');
    const altern3 = document.querySelector('.alternativa3');
    const altern4 = document.querySelector('.alternativa4');

    altern1.classList.add("errada");
    altern2.classList.add("errada");
    altern3.classList.add("errada");
    altern4.classList.add("errada");

    altern1.classList.add("block");
    altern2.classList.add("block");
    altern3.classList.add("block");
    altern4.classList.add("block");
escolhida.classList.add("correta");
}