function criarContainerToast() {
    let container = document.querySelector(".toast-container");
    if (!container) {
        container = document.createElement("div");
        container.classList.add("toast-container");
        document.body.appendChild(container);
    }
    return container;
}

export function mostrarToast(mensagem) {
    const container = criarContainerToast();
    const toast = document.createElement("div");
    
    toast.classList.add("toast");
    toast.innerText = mensagem;
    container.appendChild(toast);

    // Timeout necessário para a engine do navegador registrar o elemento antes de aplicar a transição
    setTimeout(() => {
        toast.classList.add("mostrar");
    }, 10);

    setTimeout(() => {
        toast.classList.remove("mostrar");
        toast.addEventListener("transitionend", () => toast.remove());
    }, 3000);
}