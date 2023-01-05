//Selectors 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


//eventos(creaciones) del form gracias al boton todo-Button
function addTodo(event) {
    //previniendo que se haga un 'submit' en el form
    event.preventDefault();
    //Creando el div del To-do
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Creando el li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    //bloqueando el text de mi li
    //newTodo.contentEditable = false;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Creando el Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    completedButton.addEventListener('click', confirmCheck);

    //Creando el trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);   

    //Creando el edit button
    const taskText = document.createElement('button');
    taskText.innerHTML = '<i class="fas fa-edit"></i>';
    taskText.classList.add("task-btn");
    todoDiv.appendChild(taskText);  
    taskText.addEventListener('click', editDiv);
    

    //Append a la lista
    todoList.appendChild(todoDiv);
    //Limpiamos el input
    todoInput.value = "";


}
//Funcion para editar el li
function editDiv(e){

    const item = e.target;

    if(item.classList[0] === 'task-btn'){
        var respuesta = confirm("Estas seguro que deseas editar el producto a la lista?");
        const todo = item.parentElement;
        if (respuesta == true )
        {
            todo.contentEditable = true;
            todo.classList.toggle("completed2");
            return true;
        }
        else{          
            todo.contentEditable = false;
            false;
        }
    }


}
function confirmCheck(e){
    const item = e.target;

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        todo.contentEditable = false;     
    }
}

//Funcion para eliminar el elemento
function deleteCheck(e) {
    const item = e.target;

    if(item.classList[0] === 'trash-btn'){
        var respuesta = confirm("Estas seguro que deseas eliminar el producto a la lista?");
        const todo = item.parentElement;
        if (respuesta == true )
        {
            todo.remove();
            return true;
        }
        else{   
            false;
        }
    }
}

// Funcion(mensaje, alerta sencilla) de confirmacion agregar el producto
function addProduct(){
    alert("A agregado correctamente el producto ");
}




