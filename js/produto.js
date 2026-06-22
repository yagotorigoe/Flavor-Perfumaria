import { bancoDeProdutos } from "./database.js";
import { atualizarContadorCarrinho } from "./carrinhoUtils.js";

atualizarContadorCarrinho();

// Extrai o ID da URL para buscar o produto correspondente no banco de dados
const parametros = new URLSearchParams(window.location.search);
const idProduto = parametros.get("id");
const produtoEscolhido = bancoDeProdutos.find(produto => produto.id === idProduto);

const botaoComprar = document.querySelector(".botao-comprar-grande");

// Injeta os dados do produto na interface caso ele exista
if (produtoEscolhido && botaoComprar) {
    document.querySelector(".galeria img").src = produtoEscolhido.imagem;
    document.querySelector(".galeria img").alt = produtoEscolhido.nome;
    document.querySelector(".info-compra h1").innerText = produtoEscolhido.nome;
    document.querySelector(".subtitulo").innerText = `${produtoEscolhido.tipo} • ${produtoEscolhido.familiaOlfativa}`;
    document.querySelector(".preco-grande").innerText = `R$ ${produtoEscolhido.preco.toFixed(2)}`;
    document.querySelector(".texto-historia p").innerText = produtoEscolhido.descricao;
    
    // Mapeamento da pirâmide olfativa
    const notasOlfativas = document.querySelectorAll(".piramide-olfativa p");
    notasOlfativas[0].innerText = produtoEscolhido.familiaOlfativa;
    notasOlfativas[1].innerText = produtoEscolhido.notas.cabeca;
    notasOlfativas[2].innerText = produtoEscolhido.notas.coracao;
    notasOlfativas[3].innerText = produtoEscolhido.notas.fundo;

    // Persiste o item selecionado na sessão (LocalStorage) e alerta o usuário
    botaoComprar.addEventListener("click", () => {
        let carrinhoNaMemoria = JSON.parse(localStorage.getItem("carrinhoFlavor")) || [];
        carrinhoNaMemoria.push(produtoEscolhido);
        localStorage.setItem("carrinhoFlavor", JSON.stringify(carrinhoNaMemoria));
        
        atualizarContadorCarrinho();
        alert(`${produtoEscolhido.nome} foi adicionado ao carrinho!`);
    });
}