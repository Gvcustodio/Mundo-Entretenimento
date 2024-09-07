function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se compo pesquisa for uma string sem nada
    if (!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado</p>";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    console.log(campoPesquisa);
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let faixaEtaria = "";
  
    // Itera sobre cada dado no array 'dados'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
             // Concatena o HTML de cada resultado à string 'resultados'
      resultados += `
      <div class="item-resultado">
        <h2><a href=${dado.link} target="_blank">${dado.titulo}</a></h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
        <p class="faixaEtaria-meta">${dado.faixaEtaria}</p>
      </div>
    `;
        }
     
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }
// console.log(dados);