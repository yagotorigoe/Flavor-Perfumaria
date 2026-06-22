import { atualizarContadorCarrinho } from "./carrinhoUtils.js";

atualizarContadorCarrinho();

const containerCarrinho = document.querySelector(".itens-carrinho");
const mensagemVazio = document.getElementById("mensagem-vazio");
const resumoCarrinho = document.querySelector(".resumo-carrinho");
const spanValorTotal = document.getElementById("valor-total");

// Recupera a sessão atual e orquestra a renderização financeira
if (containerCarrinho) {
    let carrinhoNaMemoria = JSON.parse(localStorage.getItem("carrinhoFlavor")) || [];

    if (carrinhoNaMemoria.length > 0) {
        mensagemVazio.style.display = "none";
        if (resumoCarrinho) resumoCarrinho.style.display = "block";

        // Acumulador de caixa para o resumo financeiro
        let somaTotal = 0;

        carrinhoNaMemoria.forEach(produto => {
            const itemHTML = `
                <div class="item-carrinho">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <div class="item-carrinho-info">
                        <h3>${produto.nome}</h3>
                        <p>${produto.tamanho}</p>
                        <button class="btn-remover" data-id="${produto.id}">Remover</button>
                    </div>
                    <span class="item-carrinho-preco">R$ ${produto.preco.toFixed(2)}</span>
                </div>
            `;
            containerCarrinho.innerHTML += itemHTML;
            somaTotal += produto.preco;
        });

        if (spanValorTotal) {
            spanValorTotal.innerText = `R$ ${somaTotal.toFixed(2)}`;
        }
    }

    // Delegação de eventos: localiza o produto alvo pelo ID e o remove da sessão
    containerCarrinho.addEventListener("click", (evento) => {
        if (evento.target.classList.contains("btn-remover")) {
            const idProduto = evento.target.getAttribute("data-id");
            const index = carrinhoNaMemoria.findIndex(p => p.id === idProduto);
            if (index !== -1) {
                carrinhoNaMemoria.splice(index, 1);
                localStorage.setItem("carrinhoFlavor", JSON.stringify(carrinhoNaMemoria));
                window.location.reload(); 
            }
        }
    });

    // Limpa os dados persistidos e encerra o fluxo de compra
    const btnFinalizar = document.querySelector(".resumo-carrinho .botao-comprar-grande");
    if (btnFinalizar) {
        btnFinalizar.addEventListener("click", () => {
            localStorage.removeItem("carrinhoFlavor");
            alert("Pedido finalizado com sucesso! Obrigado pela compra.");
            window.location.href = "index.html";
        });
    }
}