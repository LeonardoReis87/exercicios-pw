let enviar = document.querySelector("#enviar")
let limpar = document.querySelector("#limpar")
let contador = document.querySelector("#contador")
let ul = document.querySelector("ul")
let tarefas = 0;
contador.textContent = 0;

function enviarTarefa(e) {
  e.preventDefault()

  let input = document.querySelector("input[type='text']");
  let li = document.createElement("li");
  let button = document.createElement("button");
  let text = document.createTextNode(input.value);

  if(!input.value){
    input.style.border = "1px solid red";
    alert("Digite uma tarefa!")
    return
  }
  input.style.border = "1px solid #dee2e6";

  li.setAttribute("class", "item list-group-item d-flex justify-content-between align-items-center");

  button.setAttribute("class", "btn btn-close");
  li.appendChild(text);
  li.appendChild(button);
  input.value = "";
  ul.appendChild(li);
  tarefas++;
  contador.textContent = tarefas

  li.addEventListener("click", (event)=>{
    event.preventDefault();
    li.classList.toggle("riscar")
  })

  button.addEventListener("click",event =>{
    ul.removeChild(li);
    tarefas--
    contador.textContent=tarefas
  })

};

enviar.addEventListener("click",enviarTarefa)

function limparTudo(){
  tarefas=0;
  contador.textContent = 0;
  ul.innerHTML=""
}