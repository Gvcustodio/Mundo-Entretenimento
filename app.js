// Create the audio element and set the source
const audio = new Audio('./son/Good Starts.mp3');

// Function to start the audio with looping
function startLoopingAudio() {
  audio.loop = true; // Enable looping
  audio.play().then(() => {
    // Handle successful playback (optional)
    console.log('Audio started looping successfully!');
  }).catch((error) => {
    // Handle errors (optional)
    console.error('Error playing audio:', error);
  });
}

// Start the audio loop
startLoopingAudio();

// (Optional) Stop the audio loop (if needed)
function stopLoopingAudio() {
  audio.loop = false;
  audio.pause();
}

// Example usage for stopping (uncomment if needed)
// clearInterval(loop); // Assuming 'loop' is an interval for stopping (if applicable)
// stopLoopingAudio();

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