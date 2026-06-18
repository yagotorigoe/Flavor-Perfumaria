const bancoDeProdutos = [
    {
        id: "sauvage",
        nome: "Dior Sauvage",
        tamanho: "100ml",
        tipo: "Eau de Toilette",
        familiaOlfativa: "Amadeirado Fresco",
        preco: 849.00,
        imagem: "https://i.pinimg.com/736x/d9/3e/2d/d93e2db71b889176e04f55ee43396c69.jpg",
        descricao: "Uma composição radicalmente fresca, ditada por um nome que soa como um manifesto. Ingredientes naturais, selecionados com extrema exigência, dominam em doses excessivas. A assinatura inconfundível de uma autêntica fragrância de luxo.",
        notas: {
            cabeca: "Bergamota da Calábria e Pimenta.",
            coracao: "Pimenta de Sichuan, Lavanda, Pimenta Rosa, Vetiver, Patchouli, Gerânio e Elemi.",
            fundo: "Ambroxan, Cedro e Ládano."
        }
    },
    {
        id: "chanel",
        nome: "Bleu de Chanel",
        tamanho: "100ml",
        tipo: "Eau de Parfum",
        familiaOlfativa: "Amadeirado Aromático",
        preco: 1050.00,
        imagem: "https://i.pinimg.com/736x/aa/4d/85/aa4d85cdd844b5a729d6ca9ff4b7972d.jpg",
        descricao: "A fragrância de um homem que recusa ser contido por regras. Revela um espírito que se impõe com independência e determinação. O espírito de um homem que escolhe o seu próprio destino.",
        notas: {
            cabeca: "Limão, Hortelã, Pimenta Rosa e Toranja.",
            coracao: "Gengibre, Noz-moscada e Jasmim.",
            fundo: "Incenso, Vetiver, Cedro, Sândalo e Patchouli."
        }
    },
    {
        id: "lemale",
        nome: "Le Male Le Parfum",
        tamanho: "125ml",
        tipo: "Eau de Parfum",
        familiaOlfativa: "Oriental Amadeirado",
        preco: 759.00,
        imagem: "https://i.pinimg.com/736x/4e/ff/69/4eff69561254b98fa83b8344ee62fe54.jpg",
        descricao: "O marinheiro icônico de Jean Paul Gaultier assume o leme. Uma fragrância intensa, elegante e sedutora que deixa um rastro inconfundível de masculinidade e mistério por onde passa.",
        notas: {
            cabeca: "Cardamomo.",
            coracao: "Lavanda e Íris.",
            fundo: "Baunilha, Notas Orientais e Notas Amadeiradas."
        }
    }
];

// Extrai o ID da URL para buscar e renderizar o produto dinamicamente
const parametros = new URLSearchParams(window.location.search);
const idProduto = parametros.get("id");

const produtoEscolhido = bancoDeProdutos.find(produto => produto.id === idProduto);

// Atualiza a interface apenas se o produto existir no banco de dados (evita erros caso a URL esteja vazia ou errada)
if (produtoEscolhido) {
    document.querySelector(".galeria img").src = produtoEscolhido.imagem;
    document.querySelector(".galeria img").alt = produtoEscolhido.nome;
    
    document.querySelector(".info-compra h1").innerText = produtoEscolhido.nome;
    document.querySelector(".subtitulo").innerText = `${produtoEscolhido.tipo} • ${produtoEscolhido.familiaOlfativa}`;
    
    document.querySelector(".preco-grande").innerText = `R$ ${produtoEscolhido.preco.toFixed(2)}`;
    
    document.querySelector(".texto-historia p").innerText = produtoEscolhido.descricao;
    
    const notasOlfativas = document.querySelectorAll(".piramide-olfativa p");
    notasOlfativas[0].innerText = produtoEscolhido.familiaOlfativa;
    notasOlfativas[1].innerText = produtoEscolhido.notas.cabeca;
    notasOlfativas[2].innerText = produtoEscolhido.notas.coracao;
    notasOlfativas[3].innerText = produtoEscolhido.notas.fundo;
}