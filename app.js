function pesquisar() {
    // Obtém a seção HTML com o ID "resultados-pesquisa" e armazena na variável section
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    //se o campoPesquisa for um a string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "Nada foi encontrado! Nenhuma busca realizada."
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    // Para cada dado, cria um elemento HTML com as informações do dado e adiciona ao resultado
    for (let dado of dados) {
        
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }   
    }

    if (!resultados) {
        resultados = "Nada foi encontrado!"
    }
  
    // Atribui o conteúdo HTML gerado à seção de resultados
    section.innerHTML = resultados;
}




