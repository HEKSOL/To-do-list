const input = document.getElementById("input-tarefa");
const btnAdicionar = document.getElementById("btn-adicionar");
const listaDeTarefa = document.getElementById("tarefalista")
const btnDelete = document.getElementById("btn-delete")

btnAdicionar.addEventListener("click",adicionar);


function adicionar (evento) {
     evento.preventDefault();

     const tarefaNova = document.createElement("li");
     const tarefa = document.createElement("div");
     tarefa.classList.add("div-btns");
      
     const nomeTarefa = document.createElement("p");
     nomeTarefa.innerText = input.value;
     const botaoDeletar = document.createElement("button");
     const imgDelete = document.createElement("img");
     imgDelete.src = "img/delete-button-svgrepo-com.svg";
     botaoDeletar.appendChild(imgDelete);

     botaoDeletar.addEventListener("click", function() {
          excluirTarefa(tarefaNova);
     })
     tarefa.appendChild(nomeTarefa);
     tarefa.appendChild(botaoDeletar);

    

     tarefaNova.appendChild(tarefa);
     listaDeTarefa.appendChild(tarefaNova)
}   

 const excluirTarefa = (elemento) => {
     let confirmacao = confirm("Deseja remover essa tarefa");

     if(confirmacao) {
          elemento.remove();
     }
 }