let body = document.querySelector("body");
let tenis = document.querySelector(".tenis");
let carrinho = document.querySelector(".botao-carrinho");
const valor = document.querySelector(".Mudar-valor");//chama o a class do paragrafo que irá ter seu nome alterado
// querySelector = pegador / selecionador

const precos = {//definindo o valor pela cor que será chamada
    '#bfff00': 'R$ 399,99', // verde
    '#58cced': 'R$ 459,99', // azul
    '#ff9eb5': 'R$ 429,99'  // rosa
};

function mudarVisual(cor, imagem, botao, Valor){
    tenis.classList.add("troca-efeito")
    body.style.background = cor;
    carrinho.style.background = cor;
    valor.textContent = precos[cor];

    
    setTimeout(() => {// TEMPO DE ANIMACAO
        tenis.src = imagem;
        tenis.classList.remove("troca-efeito")
    }, 500);
    //1000MS==1S
}