function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado, Pesquise novamente!</p>"
        return
    }
    

    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
   
    // Itera sobre cada dado na lista de resultados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        
        if(dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)){
            // Cria uma nova div para cada resultado
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
          `;
        }

        console.log(dado.titulo.includes(campoPesquisa))
      
     
    }
    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"

    }
    // Atribui os resultados formatados para o conteúdo da seção
    section.innerHTML = resultados;
  }