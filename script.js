const botoesComprar = document.querySelectorAll('button');
const contadorCarrinho = document.querySelector('.carrinho span');

let quantidadeItems = 0;

botoesComprar.forEach(botao => {
    botao.addEventListener('click', () => {
        quantidadeItems++;
        contadorCarrinho.innerText = `🛒 Carrinho (${quantidadeItems})`;
        alert("Produto adicionado ao carrinho com a essência da Flavor!");
    });
});