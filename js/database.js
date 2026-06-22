// Catálogo centralizado de produtos. 
// Atua como um "Mock" (simulação) de um banco de dados real ou retorno de API.
export const bancoDeProdutos = [
    {
        id: "sauvage",
        nome: "Dior Sauvage",
        tamanho: "100ml",
        tipo: "Eau de Toilette",
        familiaOlfativa: "Amadeirado Fresco",
        categoria: "masculinos",
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
        categoria: "masculinos",
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
        categoria: "masculinos",
        preco: 759.00,
        imagem: "https://i.pinimg.com/736x/4e/ff/69/4eff69561254b98fa83b8344ee62fe54.jpg",
        descricao: "O marinheiro icônico de Jean Paul Gaultier assume o leme. Uma fragrância intensa, elegante e sedutora que deixa um rastro inconfundível de masculinidade e mistério por onde passa.",
        notas: {
            cabeca: "Cardamomo.",
            coracao: "Lavanda e Íris.",
            fundo: "Baunilha, Notas Orientais e Notas Amadeiradas."
        }
    },
    {
        id: "goodgirl",
        nome: "Good Girl Carolina Herrera",
        tamanho: "80ml",
        tipo: "Eau de Parfum",
        familiaOlfativa: "Floral Oriental",
        categoria: "femininos",
        preco: 649.00,
        imagem: "https://dkolopwjqarcp.cloudfront.net/Custom/Content/Products/11/19/11192_perfume-carolina-herrera-good-girl-eau-de-parfum-feminino-m_m1_638047353422688991.webp",
        descricao: "A audácia e a elegância em um frasco icônico. Uma fragrância poderosa e sensual para mulheres que amam seu lado bom e celebram seu lado mau.",
        notas: {
            cabeca: "Amêndoa e Café.",
            coracao: "Jasmim Sambac e Tuberosa.",
            fundo: "Fava Tonka e Cacau."
        }
    }
];