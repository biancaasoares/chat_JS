'use strict'


const criarCard = (cachorro) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./${cachorro.imagem}.jpg`
    img.alt = cachorro.nome

    const info = document.createElement('div')
    info.classList.add('notificacao')

    const nomeContainer = document.createElement('div')
    nomeContainer.classList.add('nome-container')

    const nome = document.createElement('h3')
    nome.classList.add('nome')
    nome.textContent = cachorro.nome

    const qntTxt = document.createElement('span')
    qntTxt.classList.add('qnt-txt')
    qntTxt.textContent = cachorro.mensagens

    const texto = document.createElement('c')
    texto.classList.add('texto')
    texto.textContent = cachorro.texto

    const tempo = document.createElement('c')
    tempo.classList.add('tempo')
    tempo.textContent = cachorro.tempo


    nomeContainer.appendChild(nome)
    
    info.appendChild(nomeContainer)
    card.appendChild(img)
    card.appendChild(info)
    card.appendChild(tempo)
    info.appendChild(texto)

    nomeContainer.appendChild(qntTxt)
  
    return card

}

const mostrarCards = (cachorro) => {

    const containerChat = document.getElementById('container-chat')
    const card = criarCard(cachorro)
    containerChat.appendChild(card)

} 
const usuarios= [

    {
        nome: 'golden retriever',
        imagem: 'golden',
        texto: 'Vamos passear!!',
        tempo: 'agora',
        mensagens: '20',
    },

    {
        nome: 'husky',
        imagem: 'husky',
        texto: 'e o meu petisco?!!',
        tempo: 'Há 30 minutos',
        mensagens: '1',
    },

    {
        nome: 'pinscher',
        imagem: 'pinscher',
        texto: 'já me deu ração hoje?!',
        tempo: 'Há 3 horas',
        mensagens: '7'
    },

    {
        nome: 'yorkshire',
        imagem: 'yorkshire',
        texto: ' vou tomar banho hoje???',
        tempo: 'Há 8 horas',
        mensagens: '50'
    },

]

usuarios.forEach(mostrarCards)