
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


let quizzes = [];
let clicks = 0;


function criarQuizz(){

    document.querySelector('.container-conteudos').classList.add("esconder");
    
    document.querySelector('.container-criandoquizz').classList.remove("esconder");
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


clicks= clicks + 1;

clicktela2(clicks);
}


function pegarquizzdoserve(){
const promessa = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
promessa.then(quizzchegou);
promessa.catch(quizzerro);
}

function quizzchegou(resposta){
quizzes = resposta.data;
console.log(resposta.data);
console.log(quizzes);
quizzes.map((k)=>{
let titulo = k.title;
let foto = k.image;
let nquizz = k.id;
listarquizz(titulo,foto,nquizz);
})
}

function listarquizz(titulo,foto,nquizz){
document.querySelector(".opcoes-quizz").innerHTML +=`
<div onclick="puxarquizztela2(${nquizz});" class="quizz1""> <img class="imagemdaurl" src="${foto}" /> <div class="porcima">${titulo}</div></div>   `



}

function puxarquizztela2(nquizz){
const testequizz = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${nquizz}`);
testequizz.then(selecionarquiz);
}



function selecionarquiz(ou){
console.log(ou);
document.querySelector(".container-conteudos").classList.add("esconder");

document.querySelector(".tudo").innerHTML +=`
<div class="container-conteudos2 "><!--INÍCIO TELA 2-->
    <div class="titulo-perguntas" style="background-image:url(${ou.data.image}); ">
        <p>${ou.data.title}</p>
    </div>`;

for(let i = 0; i <= ou.data.questions.length; i++){


document.querySelector(".tudo").innerHTML +=`

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

}

function clicktela2(){
console.log(clicks);
if(clicks == luk){
document.querySelector(".tudo").innerHTML +=`
<div class="modal-resultado-quizz "><!-- INICIO DO RESULTADO DO QUIZZ (TELA 2)-->
        <div class="container-caixa-de-resultado">
            <div class="header-caixa-de-resultado">
                <h2>88% de acerto: Você é praticamente um aluno de Hogwarts!</h2>
            </div>
            <img src="./Imagens/ResultadoQuizz.png" alt="Dumbledore-resultado">
            <div class="texto-resultado">Parabéns Potterhead! Bem-vindx a Hogwarts, aproveite o loop infinito de
                comida e clique no botão abaixo para usar o vira-tempo e reiniciar este teste.
            </div>
        </div>
    </div>
    <button class="reiniciar-quizz">Reiniciar Quizz</button>
    <button class="voltar-para-home">Voltar pra home</button><!-- FIM DO RESULTADO DO QUIZZ (TELA 2)-->

</div>
<!-- FIM DO CONTAINER-CONTEÚDOS(TELA 2)-->`
}
}

puxarquizztela2();
pegarquizzdoserve();
quizzchegou();

function quizzerro(resposta){
alert("erro");
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
