import { atualizarContadorCarrinho } from "./carrinhoUtils.js";

atualizarContadorCarrinho();

const containerCarrinho = document.querySelector(".itens-carrinho");
const mensagemVazio = document.getElementById("mensagem-vazio");
const resumoCarrinho = document.querySelector(".resumo-carrinho");
const spanValorTotal = document.getElementById("valor-total");

if (containerCarrinho) {
    let carrinhoNaMemoria = JSON.parse(localStorage.getItem("carrinhoFlavor")) || [];

    if (carrinhoNaMemoria.length > 0) {
        mensagemVazio.style.display = "none";
        if (resumoCarrinho) resumoCarrinho.style.display = "block";

        let somaTotal = 0;
        let itensAgrupados = [];
        
        // Agrupa produtos idênticos e consolida a propriedade de quantidade
        carrinhoNaMemoria.forEach(pO => {
            const itemExistente = itensAgrupados.find(p => p.id === pO.id);
            if (itemExistente) {
                itemExistente.quantidade += 1;
            } else {
                itensAgrupados.push({ ...pO, quantidade: 1 });
            }
        });

        // Renderiza os produtos agrupados na interface do usuário
        itensAgrupados.forEach(produto => {
            const itemHTML = `
                <div class="item-carrinho">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <div class="item-carrinho-info">
                        <h3>${produto.nome}</h3>
                        <p>${produto.tamanho || "100ml"}</p>
                        <button class="btn-remover" data-id="${produto.id}">Remover</button>
                    </div>
                    
                    <div class="item-carrinho-quantidade" style="display: flex; align-items: center; gap: 10px; margin: 0 20px;">
                        <button class="btn-menos" data-id="${produto.id}" style="padding: 5px 10px; cursor: pointer;">-</button>
                        <span class="qtd-numero" style="font-weight: bold;">${produto.quantidade}</span>
                        <button class="btn-mais" data-id="${produto.id}" style="padding: 5px 10px; cursor: pointer;">+</button>
                    </div>
                    
                    <span class="item-carrinho-preco">R$ ${(produto.preco * produto.quantidade).toFixed(2)}</span>
                </div>
            `;
            containerCarrinho.innerHTML += itemHTML;
            somaTotal += (produto.preco * produto.quantidade);
        });

        if (spanValorTotal) {
            spanValorTotal.innerText = `R$ ${somaTotal.toFixed(2)}`;
        }
    }

    // Delegação de eventos para gestão das quantidades e exclusão de itens
    containerCarrinho.addEventListener("click", (evento) => {
        const idProduto = evento.target.getAttribute("data-id");
        
        if (evento.target.classList.contains("btn-remover")) {
            carrinhoNaMemoria = carrinhoNaMemoria.filter(p => p.id !== idProduto);
            localStorage.setItem("carrinhoFlavor", JSON.stringify(carrinhoNaMemoria));
            window.location.reload(); 
        }

        if (evento.target.classList.contains("btn-mais")) {
            const produtoOriginal = carrinhoNaMemoria.find(p => p.id === idProduto);
            if (produtoOriginal) {
                carrinhoNaMemoria.push(produtoOriginal);
                localStorage.setItem("carrinhoFlavor", JSON.stringify(carrinhoNaMemoria));
                window.location.reload();
            }
        }

        if (evento.target.classList.contains("btn-menos")) {
            const index = carrinhoNaMemoria.findIndex(p => p.id === idProduto);
            if (index !== -1) {
                carrinhoNaMemoria.splice(index, 1);
                localStorage.setItem("carrinhoFlavor", JSON.stringify(carrinhoNaMemoria));
                window.location.reload();
            }
        }
    });

    // Limpa a sessão e encerra o fluxo de checkout
    const btnFinalizar = document.querySelector(".resumo-carrinho .botao-comprar-grande");
    if (btnFinalizar) {
        btnFinalizar.addEventListener("click", () => {
            localStorage.removeItem("carrinhoFlavor");
            alert("Pedido finalizado com sucesso! Obrigado pela compra.");
            window.location.href = "index.html";
        });
    }
}