import { bancoDeProdutos } from "./database.js";
import { atualizarContadorCarrinho } from "./carrinhoUtils.js";

// Inicialização global
atualizarContadorCarrinho();

const containerLista = document.getElementById("lista-produtos");

// Garante a execução apenas na página inicial
if (containerLista) {
    renderizarProdutos(bancoDeProdutos);
    configurarFiltrosMenu();
}

// Limpa o contêiner atual e renderiza os componentes de produto dinamicamente
function renderizarProdutos(listaDeProdutos) {
    containerLista.innerHTML = "";
    
    listaDeProdutos.forEach(produto => {
        const produtoHTML = `
            <div class="cartao">
                <a href="produto.html?id=${produto.id}">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <h3>${produto.nome} - ${produto.tamanho}</h3>
                </a>
                <p>${produto.tipo} • ${produto.familiaOlfativa}</p>
                <span class="preco">R$ ${produto.preco.toFixed(2)}</span>
                <button>ADICIONAR</button>
            </div>
        `;
        containerLista.innerHTML += produtoHTML;
    });
}

// Intercepta os cliques no menu, previne o recarregamento nativo e aplica os filtros de categoria
function configurarFiltrosMenu() {
    const linksMenu = document.querySelectorAll("header nav ul li a");
    linksMenu.forEach(link => {
        link.addEventListener("click", (evento) => {
            const categoriaSelecionada = evento.target.innerText.toLowerCase();

            if (categoriaSelecionada === "início" || categoriaSelecionada === "marcas") {
                evento.preventDefault();
                renderizarProdutos(bancoDeProdutos);
            } else if (categoriaSelecionada === "masculinos" || categoriaSelecionada === "femininos") {
                evento.preventDefault(); 
                const produtosFiltrados = bancoDeProdutos.filter(p => p.categoria === categoriaSelecionada);
                renderizarProdutos(produtosFiltrados);
            }
        });
    });
}