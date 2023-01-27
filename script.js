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
    if(altern1.classList.contains("correta")){
        altern1.classList.remove("correta");
    }
    if(altern2.classList.contains("correta")){
        altern2.classList.remove("correta");
    }
    if(altern3.classList.contains("correta")){
        altern3.classList.remove("correta");
    }
    if(altern4.classList.contains("correta")){
        altern4.classList.remove("correta");
    }
    if(altern1.classList.contains("errada")){
        altern1.classList.remove("errada");
    }
    if(altern2.classList.contains("errada")){
        altern2.classList.remove("errada");
    }
    if(altern3.classList.contains("errada")){
        altern3.classList.remove("errada");
    }
    if(altern4.classList.contains("errada")){
        altern4.classList.remove("errada");
    }

    altern1.classList.add("errada");
    altern2.classList.add("errada");
    altern3.classList.add("errada");
    altern4.classList.add("errada");
escolhida.classList.add("correta");
}