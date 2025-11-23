const cardContainer = document.querySelector(".card-container");
const inputBusca = document.getElementById("input-busca");
let dados = [];

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const resposta = await fetch("data.json");
        dados = await resposta.json();
    } catch (error) {
        console.error("Erro ao carregar os dados:", error);
    }
});

function iniciarBusca() {
    const termoBusca = inputBusca.value.toLowerCase().trim();
    let resultados = [];

    if (termoBusca) {
        resultados = dados.filter(dado => 
            dado.nome.toLowerCase().includes(termoBusca)
        );
    }

    renderizarCards(resultados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = "";

    for (let dado of dados){
        let article = document.createElement("article");
        article.classList.add("card", "card-animated");
        article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p>${dado.ano}</p>
            <p>${dado.descricao}</p>
            <p><strong>Exemplo de código:</strong></p>
            <pre><code>${dado.exemplo_codigo}</code></pre>
            <a href="${dado.link}" target="_blank">Saiba mais</a>
        `;
        cardContainer.appendChild(article);
    }
}