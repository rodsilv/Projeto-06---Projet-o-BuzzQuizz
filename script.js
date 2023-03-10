
let tituloQuizz = document.querySelector('.criar-dados-quizz-titulo');
let imagemQuizz = document.querySelector('.criar-dados-quizz-imagem');
let tituloPergunta1 = document.querySelector('.criar-dados-quizz2-titulo');
let corPergunta = document.querySelector('.criar-dados-quizz2-cor');
let respostaCerta = document.querySelector('.criar-dados-quizz2-correta');
let imagemCerta = document.querySelector('.criar-dados-quizz2-url1');
let respostaErrada1 = document.querySelector('.criar-dados-quizz2-incorreta1');
let respostaErrada2 = document.querySelector('.criar-dados-quizz2-incorreta2');
let respostaErrada3 = document.querySelector('.criar-dados-quizz2-incorreta3');
let imagemErrada1 = document.querySelector('.criar-dados-quizz2-url2');
let imagemErrada2 = document.querySelector('.criar-dados-quizz2-url3');
let imagemErrada3 = document.querySelector('.criar-dados-quizz2-url4');

let tituloNivel = document.querySelector('.criar-dados-quizz2-nivel');
let acertosNivel = document.querySelector('.criar-dados-quizz2-acertos');
let imagemNivel = document.querySelector('.criar-dados-quizz2-imagem');
let descricaoNivel = document.querySelector('.criar-dados-quizz2-descricao');



let tituloPergunta1dois = document.querySelector('.criar-dados-quizz2-titulo-dois');
let corPerguntadois = document.querySelector('.criar-dados-quizz2-cor-dois');
let respostaCertadois = document.querySelector('.criar-dados-quizz2-correta-dois');
let imagemCertadois = document.querySelector('.criar-dados-quizz2-url1-dois');
let respostaErrada1dois = document.querySelector('.criar-dados-quizz2-incorreta1-dois');
let respostaErrada2dois = document.querySelector('.criar-dados-quizz2-incorreta2-dois');
let respostaErrada3dois = document.querySelector('.criar-dados-quizz2-incorreta3-dois');
let imagemErrada1dois = document.querySelector('.criar-dados-quizz2-url2-dois');
let imagemErrada2dois = document.querySelector('.criar-dados-quizz2-url3-dois');
let imagemErrada3dois = document.querySelector('.criar-dados-quizz2-url4-dois');

let tituloNiveldois = document.querySelector('.criar-dados-quizz2-nivel-dois');
let acertosNiveldois = document.querySelector('.criar-dados-quizz2-acertos-dois');
let imagemNiveldois = document.querySelector('.criar-dados-quizz2-imagem-dois');
let descricaoNiveldois = document.querySelector('.criar-dados-quizz2-descricao-dois');



let tituloPergunta1tres = document.querySelector('.criar-dados-quizz2-titulo-tres');
let corPerguntatres = document.querySelector('.criar-dados-quizz2-cor-tres');
let respostaCertatres = document.querySelector('.criar-dados-quizz2-correta-tres');
let imagemCertatres = document.querySelector('.criar-dados-quizz2-url1-tres');
let respostaErrada1tres = document.querySelector('.criar-dados-quizz2-incorreta1-tres');
let respostaErrada2tres = document.querySelector('.criar-dados-quizz2-incorreta2-tres');
let respostaErrada3tres = document.querySelector('.criar-dados-quizz2-incorreta3-tres');
let imagemErrada1tres = document.querySelector('.criar-dados-quizz2-url2-tres');
let imagemErrada2tres = document.querySelector('.criar-dados-quizz2-url3-tres');
let imagemErrada3tres = document.querySelector('.criar-dados-quizz2-url4-tres');

let tituloNiveltres = document.querySelector('.criar-dados-quizz2-nivel-tres');
let acertosNiveltres = document.querySelector('.criar-dados-quizz2-acertos-tres');
let imagemNiveltres = document.querySelector('.criar-dados-quizz2-imagem-tres');
let descricaoNiveltres = document.querySelector('.criar-dados-quizz2-descricao-tres');



let quizzes = [];
let clicks = 0;


function criarQuizz() {

    const add = document.querySelector('.container-conteudos');
    add.classList.add("esconder");

    const remove = document.querySelector('.container-criandoquizz')
    remove.classList.remove("esconder");
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


    criarQuizzNovo();
}

function voltarPaginaInicial() {

    const add = document.querySelector('.container-fim-do-quizz');
    add.classList.add('esconder');

    const remove = document.querySelector('.container-conteudos');
    remove.classList.remove('esconder');

}


function alternativaSelecionada(escolhida) {

    const altern1 = document.querySelector('.lk1');
    const altern2 = document.querySelector('.lk2');
    const altern3 = document.querySelector('.lk3');
    const altern4 = document.querySelector('.lk4');

    altern1.classList.add("errada");
    altern2.classList.add("errada");
    altern3.classList.add("errada");
    altern4.classList.add("errada");

    altern1.classList.add("block");
    altern2.classList.add("block");
    altern3.classList.add("block");
    altern4.classList.add("block");
    escolhida.classList.add("correta");

    altern1.classList.remove("lk1");
    altern2.classList.remove("lk2");
    altern3.classList.remove("lk3");
    altern4.classList.remove("lk4");
    escolhida.classList.add("correta");

    
    clicks = clicks + 1;

    clicktela2(clicks);
}


function pegarquizzdoserve() {
    const promessa = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    promessa.then(quizzchegou);
    promessa.catch(quizzerro);
}

function quizzchegou(resposta) {
    quizzes = resposta.data;
    console.log(resposta.data);
    console.log(quizzes);
    quizzes.map((k) => {
        let titulo = k.title;
        let foto = k.image;
        let nquizz = k.id;
        listarquizz(titulo, foto, nquizz);
    })
}

function listarquizz(titulo, foto, nquizz) {
    document.querySelector(".opcoes-quizz").innerHTML += `
<div onclick="puxarquizztela2(${nquizz});" class="quizz1""> <img class="imagemdaurl" src="${foto}" /> <div class="porcima">${titulo}</div></div>   `



}

function puxarquizztela2(nquizz) {
    const testequizz = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${nquizz}`);
    testequizz.then(selecionarquiz);
}



function selecionarquiz(ou) {
    console.log(ou);
    document.querySelector(".container-conteudos").classList.add("esconder");

    document.querySelector(".tudo").innerHTML += `
<div class="container-conteudos2 "><!--IN??CIO TELA 2-->
    <div class="titulo-perguntas" style="background-image:url(${ou.data.image}); ">
        <p>${ou.data.title}</p>
    </div>`;

    for (let i = 0; i < ou.data.questions.length; i++) {


        document.querySelector(".tudo").innerHTML += `

    <div class="container-pergunta">
        <div style="background-color:${ou.data.questions[i].color};" class="pergunta">
            <p>${ou.data.questions[i].title}</p>
        </div>
        <div class="alternativas">
            <div onclick="alternativaSelecionada(this)" class="alternativa1 lk1">
                <img class="alternativaquizz" src="${ou.data.questions[i].answers[0].image}" alt="">
                <p class="frasedaquest" >${ou.data.questions[i].answers[0].text}</p>
            </div>
            <div onclick="alternativaSelecionada(this)" class="alternativa2 lk2">
            <img class="alternativaquizz" src="${ou.data.questions[i].answers[1].image}" alt="">
            <p class="frasedaquest" >${ou.data.questions[i].answers[1].text}</p>
            </div>
            <div onclick="alternativaSelecionada(this)" class="alternativa3 lk3">
            <img class="alternativaquizz" src="${ou.data.questions[i].answers[2].image}" alt="">
            <p class="frasedaquest" >${ou.data.questions[i].answers[2].text}</p>
            </div>
            <div onclick="alternativaSelecionada(this)" class="alternativa4 lk4">
            <img class="alternativaquizz" src="${ou.data.questions[i].answers[3].image}" alt="">
            <p class="frasedaquest" >${ou.data.questions[i].answers[3].text}</p>
            </div>
        </div>
    </div>
    `;
    }

    document.querySelector(".tudo").innerHTML += `
    <button onclick="tela2quizzPP()" class="resultado-quizz">Ver Resultado</button>`;

    document.querySelector(".tudo").innerHTML += `
<div class="modal-resultado-quizz esconder"><!-- INICIO DO RESULTADO DO QUIZZ (TELA 2)-->
<div>
        <div class="container-caixa-de-resultado">
            <div class="header-caixa-de-resultado">
                <h2>88% de acerto: ${ou.data.levels[0].title}</h2>
            </div>
            <img src="${ou.data.levels[0].image}" alt="Dumbledore-resultado">
            <div class="texto-resultado">${ou.data.levels[0].text}
            </div>
        </div>
    </div>
    <button class="reiniciar-quizz">Reiniciar Quizz</button>
    <button class="voltar-para-home">Voltar pra home</button><!-- FIM DO RESULTADO DO QUIZZ (TELA 2)-->

</div>
<!-- FIM DO CONTAINER-CONTE??DOS(TELA 2)-->`

}
function tela2quizzPP(){
    document.querySelector(".modal-resultado-quizz").classList.remove("esconder");

}

function tela2quizzP(){
    const telafim = document.querySelector(".alternativa4");
    if (telafim.classList.contains("lk4")){
        document.querySelector(".tudo").innerHTML += `
<div class="modal-resultado-quizz "><!-- INICIO DO RESULTADO DO QUIZZ (TELA 2)-->
        <div class="container-caixa-de-resultado">
            <div class="header-caixa-de-resultado">
                <h2>88% de acerto: Voc?? ?? praticamente um aluno de Hogwarts!</h2>
            </div>
            <img src="./Imagens/ResultadoQuizz.png" alt="Dumbledore-resultado">
            <div class="texto-resultado">Parab??ns Potterhead! Bem-vindx a Hogwarts, aproveite o loop infinito de
                comida e clique no bot??o abaixo para usar o vira-tempo e reiniciar este teste.
            </div>
        </div>
    </div>
    <button class="reiniciar-quizz">Reiniciar Quizz</button>
    <button class="voltar-para-home">Voltar pra home</button><!-- FIM DO RESULTADO DO QUIZZ (TELA 2)-->

</div>
<!-- FIM DO CONTAINER-CONTE??DOS(TELA 2)-->`
    }
}

function clicktela2() {
    console.log(clicks);
    if (clicks == luk) {
        document.querySelector(".tudo").innerHTML += `
<div class="modal-resultado-quizz "><!-- INICIO DO RESULTADO DO QUIZZ (TELA 2)-->
        <div class="container-caixa-de-resultado">
            <div class="header-caixa-de-resultado">
                <h2>88% de acerto: Voc?? ?? praticamente um aluno de Hogwarts!</h2>
            </div>
            <img src="./Imagens/ResultadoQuizz.png" alt="Dumbledore-resultado">
            <div class="texto-resultado">Parab??ns Potterhead! Bem-vindx a Hogwarts, aproveite o loop infinito de
                comida e clique no bot??o abaixo para usar o vira-tempo e reiniciar este teste.
            </div>
        </div>
    </div>
    <button class="reiniciar-quizz">Reiniciar Quizz</button>
    <button class="voltar-para-home">Voltar pra home</button><!-- FIM DO RESULTADO DO QUIZZ (TELA 2)-->

</div>
<!-- FIM DO CONTAINER-CONTE??DOS(TELA 2)-->`
    }
}

puxarquizztela2();
pegarquizzdoserve();
quizzchegou();

function quizzerro(resposta) {
    alert("erro no quizz");
}


function reload() {
    alert('Favor preencher os dados corretamente')
    window.location.reload()
}


function criarQuizzNovo() {

    const objetoQuizz = {
        title: tituloQuizz.value,
        image: imagemQuizz.value,
        questions: [
            {
                title: tituloPergunta1.value,
                color: corPergunta.value,
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
                    }, {
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
            },
            {
                title: tituloPergunta1dois.value,
                color: corPerguntadois.value,
                answers: [
                    {
                        text: respostaCertadois.value,
                        image: imagemCertadois.value,
                        isCorrectAnswer: true
                    },
                    {
                        text: respostaErrada1dois.value,
                        image: imagemErrada1dois.value,
                        isCorrectAnswer: false
                    }, {
                        text: respostaErrada2dois.value,
                        image: imagemErrada2dois.value,
                        isCorrectAnswer: false
                    },
                    {
                        text: respostaErrada3dois.value,
                        image: imagemErrada3dois.value,
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: tituloPergunta1tres.value,
                color: corPerguntatres.value,
                answers: [
                    {
                        text: respostaCertatres.value,
                        image: imagemCertatres.value,
                        isCorrectAnswer: true
                    },
                    {
                        text: respostaErrada1tres.value,
                        image: imagemErrada1tres.value,
                        isCorrectAnswer: false
                    }, {
                        text: respostaErrada2tres.value,
                        image: imagemErrada2tres.value,
                        isCorrectAnswer: false
                    },
                    {
                        text: respostaErrada3tres.value,
                        image: imagemErrada3tres.value,
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
                minValue: acertosNivel.value
            },
            {
                title: tituloNiveldois.value,
                image: imagemNiveldois.value,
                text: descricaoNiveldois.value,
                minValue: acertosNiveldois.value
            },
            {
                title: tituloNiveltres.value,
                image: imagemNiveltres.value,
                text: descricaoNiveltres.value,
                minValue: acertosNiveltres.value
            }
        ]
    }



    enviarObjetodoquizz(objetoQuizz);


}

function enviarObjetodoquizz(objetoQuizz) {
    const promise = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', objetoQuizz);

    promise.then(console.log('dados salvos'));
    promise.catch(reload);

}