const tituloQuizz = document.querySelector('.criar-dados-quizz-titulo');
const imagemQuizz = document.querySelector('.criar-dados-quizz-imagem');
const tituloPergunta1 = document.querySelector('.criar-dados-quizz2-titulo');
const corPergunta = document.querySelector('.criar-dados-quizz2-cor');
const respostaCerta = document.querySelector('.criar-dados-quizz2-correta');
const imagemCerta = document.querySelector('.criar-dados-quizz2-url1');
const respostaErrada1 = document.querySelector('.criar-dados-quizz2-incorreta1');
const respostaErrada2 = document.querySelector('.criar-dados-quizz2-incorreta2');
const respostaErrada3 = document.querySelector('.criar-dados-quizz2-incorreta3');
const imagemErrada1 = document.querySelector('.criar-dados-quizz2-url2');
const imagemErrada2 = document.querySelector('.criar-dados-quizz2-url3');
const imagemErrada3 = document.querySelector('.criar-dados-quizz2-url4');
const tituloNivel = document.querySelector('.criar-dados-quizz2-nivel');
const acertosNivel = document.querySelector('.criar-dados-quizz2-acertos');
const imagemNivel = document.querySelector('.criar-dados-quizz2-imagem');
const descricaoNivel = document.querySelector('.criar-dados-quizz2-descricao');

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

    criarQuizz()
}

function criarNiveis() {

    const add = document.querySelector('.desk9');
    add.classList.add('esconder');

    const remove = document.querySelector('.desk10');
    remove.classList.remove('esconder');

    criarQuizz()
}

function finalizarCriacao() {

    const add = document.querySelector('.desk10');
    add.classList.add('esconder');

    const remove = document.querySelector('.container-fim-do-quizz')
    remove.classList.remove('esconder');


    criarQuizz()
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


function createNewQuizz() {

    const objetoQuizz = {
        title: tituloQuizz.value,
        image: imagemQuizz.value,
    }

    const promise = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', objetoQuizz);

    tituloQuizz.value = "";
    imagemQuizz.value = "";

    promise.then(console.log('dados salvos'));
    promise.catch(reload);

}


function reload() {
    alert('erro')
    window.location.reload()
}


function createNewQuestions() {

    const questions = {

        title: tituloPergunta1.value,
        color: "#123456",
        answers: [
            {
                text: respostaCerta.value,
                image: imagemCerta.value,
                isCorrectAnswer: true
            },
            {
                text: respostaErrada1.value,
                image: imagemErrada1.value,
                isCorrectAnswer: false
            },
            {
                text: respostaErrada2.value,
                image: imagemErrada2.value,
                isCorrectAnswer: false
            },
            {
                text: respostaErrada3.value,
                image: imagemErrada3.value,
                isCorrectAnswer: false
            }
        ]

    }

    const promise = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', questions);

    respostaCerta.value = "";
    imagemCerta.value = "";
    respostaErrada1.value = "";
    imagemErrada1.value = "";
    respostaErrada2.value = "";
    imagemErrada2.value = "";
    respostaErrada3.value = "";
    imagemErrada3.value = "";

    promise.then(console.log('dados salvos'));
    promise.catch(reload);

}


function createLevels() {

    const niveisQuizz =
        [
            {
                title: tituloNivel.value,
                image: imagemNivel.value,
                text: descricaoNivel.value,
                minValue: 0
            }
        ]

    const promise = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', niveisQuizz);

    tituloNivel.value = "";
    imagemNivel.value = "";
    descricaoNivel.value = "";

    promise.then(console.log('dados salvos'));
    promise.catch(reload);

}


function criarQuizz() {

    const objetoQuizz = {
        title: tituloQuizz.value,
        image: imagemQuizz.value,
        questions: [
            {
                title: "Título da pergunta 1",
                color: "#123456",
                answers: [
                    {
                        text: respostaCerta.value,
                        image: imagemCerta.value,
                        isCorrectAnswer: true
                    },
                    {
                        text: respostaErrada1.value,
                        image: imagemErrada1.value,
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: "Título da pergunta 2",
                color: "#123456",
                answers: [
                    {
                        text: "Texto da resposta 1",
                        image: "https://http.cat/411.jpg",
                        isCorrectAnswer: true
                    },
                    {
                        text: respostaErrada2.value,
                        image: imagemErrada2.value,
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: "Título da pergunta 3",
                color: "#123456",
                answers: [
                    {
                        text: "Texto da resposta 1",
                        image: "https://http.cat/411.jpg",
                        isCorrectAnswer: true
                    },
                    {
                        text: respostaErrada3.value,
                        image: imagemErrada3.value,
                        isCorrectAnswer: false
                    }
                ]
            }
        ],
        levels: [
            {
                title: tituloNivel.value,
                image: imagemNivel.value,
                text: descricaoNivel.value,
                minValue: 0
            },
            {
                title: "Título do nível 2",
                image: "https://http.cat/412.jpg",
                text: "Descrição do nível 2",
                minValue: 50
            }
        ]
    }

    tituloQuizz.value = "";
    imagemQuizz.value = "";
    respostaCerta.value = "";
    imagemCerta.value = "";
    respostaErrada1.value = "";
    imagemErrada1.value = "";
    respostaErrada2.value = "";
    imagemErrada2.value = "";
    respostaErrada3.value = "";
    imagemErrada3.value = "";
    tituloNivel.value = "";
    imagemNivel.value = "";
    descricaoNivel.value = "";

}

function salvarNoServer() {

    const promise = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');

    promise.then(console.log('dados salvos'));
    promise.catch(reload);

}