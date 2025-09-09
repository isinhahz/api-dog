'use strict'

const campoDeTexto = document.getElementById('barra');

//serve para selecionar um elemnto da HTML
const botaoDeBusca = document.querySelector('.buscar');
const dogsContainer = document.getElementById('dogs');


async function buscarImagens (raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch (url)
    const imagens = await response.json()
    console.log (imagens.message)
    return imagens.message
}

function criarCards(urlImagens) {
    //limpa o container para nova pesquisa
    while (dogsContainer.firstChild){
        dogsContainer.removeChild(dogsContainer.firstChild);
    }

    urlImagens.forEach(url => {
        const card = document.createElement('div');
        card.classList.add('card-dog');

        const imagem = document.createElement('img');
        imagem.src = url;

        card.appendChild(imagem);
        dogsContainer.appendChild(card);
    });
}

async function buscarExibirDogs() {

    //garante que independente da forma que o usuário pesquisar a resposta seja bem sucedida
    const raca = campoDeTexto.value.toLowerCase();
    const urls = await buscarImagens(raca);
    criarCards(urls);
}

botaoDeBusca.addEventListener('click', buscarExibirDogs);