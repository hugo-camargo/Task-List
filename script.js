// 1 - Temos que referenciar o input

let input = document.querySelector("input[name=task]");

// 2 - Temos que referenciar button

let btn = document.querySelector("#button");

// 3 - Temos que referenciar list e .card

let list = document.querySelector("#list");

let card = document.querySelector(".card");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 4 - Renderizar na Pagina

function renderTasks() {
    // Limpar Listagem Antes de Renderizar Novamente
    list.innerHTML = "";

    for(task of tasks) {
        // Criar o item da lista
        let itemList = document.createElement("li");

        // Adicionar classe no item da lista
        itemList.setAttribute("class", "list-group-item list-group-item-action");

        // Adicionar evento click no item da lista
        itemList.onclick = function() {
            removeTask(this);
        }

        // Criar um texto
        let itemText = document.createTextNode(task);

        // Adicionar o texto no item
        itemList.appendChild(itemText);

        // Adicionar o item na lista
        list.appendChild(itemList);
    }
}

// 3 - Escutar o Evento de click do Botao

btn.onclick = function() {
    // 3.1 - Capturar o Valor Inserido no input
    let newTask = input.value; 

    if(newTask !== "") {
        // 3.2 - Atualizar a Nova Task no Array e Renderizar a Tela
        tasks.push(newTask);
    
        renderTasks(); 
    
        // Limpar o input
        input.value = "";

        // Limpar o span
        removeSpans();

        // Salvar Novos Dados no Banco de Dados
        storageData();
    } else {
        // Limpar o span
        removeSpans();
        
        let span = document.createElement("span");
        span.setAttribute("class", "alert-warning");
        
        let msg = document.createTextNode("Informe uma tarefa!");
        
        span.appendChild(msg);
        
        card.appendChild(span);
    }

}

function removeSpans() {
    let spans = document.querySelectorAll("span");

    for(let i = 0; i < spans.length; i++) {
        card.removeChild(spans[i]);
    }
}

function removeTask(task) {
    // Remover do array
    tasks.splice(tasks.indexOf(task.textContent), 1);

    renderTasks();
    
    // Salvar Novos Dados no Banco de Dados
    storageData();
}

function storageData() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
