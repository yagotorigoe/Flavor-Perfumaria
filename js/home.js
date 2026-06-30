import { bancoDeProdutos } from "./database.js";
import { atualizarContadorCarrinho } from "./carrinhoUtils.js";

atualizarContadorCarrinho();

const containerLista = document.getElementById("lista-produtos");

if (containerLista) {
    renderizarProdutos(bancoDeProdutos);
    configurarFiltrosMenu();
}

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
                <a href="produto.html?id=${produto.id}" class="botao-mais-detalhes">MAIS DETALHES</a>
            </div>
        `;
        containerLista.innerHTML += produtoHTML;
    });
}

function configurarFiltrosMenu() {
    const linksMenu = document.querySelectorAll("header nav ul li a");
    linksMenu.forEach(link => {
        link.addEventListener("click", (evento) => {
            const categoriaSelecionada = evento.target.innerText.toLowerCase();
            const vitrineSection = document.getElementById("catalogo");

            if (categoriaSelecionada === "início" || categoriaSelecionada === "marcas") {
                evento.preventDefault();
                renderizarProdutos(bancoDeProdutos);
                
                if (categoriaSelecionada === "marcas" && vitrineSection) {
                    vitrineSection.scrollIntoView({ behavior: "smooth" });
                }
            } else if (categoriaSelecionada === "masculinos" || categoriaSelecionada === "femininos") {
                evento.preventDefault(); 
                const produtosFiltrados = bancoDeProdutos.filter(p => p.categoria === categoriaSelecionada);
                renderizarProdutos(produtosFiltrados);
                
                if (vitrineSection) {
                    vitrineSection.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
}