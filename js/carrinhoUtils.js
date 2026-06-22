// Utilitário compartilhado de interface.
// Lê os dados do LocalStorage e sincroniza visualmente o contador global do cabeçalho.
export function atualizarContadorCarrinho() {
    const carrinhoNaMemoria = JSON.parse(localStorage.getItem("carrinhoFlavor")) || [];
    const spanCarrinho = document.querySelector(".carrinho span");
    
    if (spanCarrinho) {
        spanCarrinho.innerText = `Carrinho (${carrinhoNaMemoria.length})`;
    }
}