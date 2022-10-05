/*seleção dos elementos*/
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');


/*Funções*/

// const saveLocalStorage = ()=>{
  
// }
const saveTodo =(text, save = 1, done= 0)=>{

  
  //cria uma div para cada tarefa
  const tasks = document.createElement('div');
  tasks.classList.add('d-flex');
  tasks.classList.add('justify-content-between');
  tasks.classList.add('mb-2');
  tasks.classList.add('task');

  const task = document.createElement('div');
  task.classList.add('border');
  task.classList.add('w-100');
  task.classList.add('p-1');
  
  //área descrição da tarefa
  const todoTittle = document.createElement('p');
  todoTittle.innerHTML = text;
  
  //cria a area dos botoes add,edit,remove
  const buttons = document.createElement('div');
  buttons.classList.add('d-flex');
  buttons.classList.add('justify-content-between');
  
  //botão add
  const btn_check = document.createElement('a');
  btn_check.classList.add('btn');
  btn_check.classList.add('btn-outline-primary');
  btn_check.setAttribute('type', 'button');
  

  //criando icone
  const i_add = document.createElement('i');
  i_add.classList.add('fas');
  i_add.classList.add('fa-regular');
  i_add.classList.add('fa-check');
  
  //botão edit
  const btn_edit = document.createElement('a');
  btn_edit.classList.add('btn');
  btn_edit.classList.add('btn-outline-primary');
  btn_edit.setAttribute('type', 'button');
  //criando icone
  const i_edit = document.createElement('i');
  i_edit.classList.add('fas');
  i_edit.classList.add('fa-regular');
  i_edit.classList.add('fa-pen');
  i_edit.classList.add('icon');
  
  //botão remove
  const btn_remove = document.createElement('a');
  btn_remove.classList.add('btn');
  btn_remove.classList.add('btn-outline-primary');
  btn_remove.setAttribute('type', 'button');

  const i_remove = document.createElement('i');
  i_remove.classList.add('fas');
  i_remove.classList.add('fa-light');
  i_remove.classList.add('fa-trash');
  
  
  


  //adicionando itens filhos
  todoList.appendChild(tasks);
  tasks.appendChild(task);
  tasks.appendChild(buttons);
  task.appendChild(todoTittle);
  buttons.appendChild(btn_check);
  btn_check.appendChild(i_add);
  buttons.appendChild(btn_edit);
  btn_edit.appendChild(i_edit);
  buttons.appendChild(btn_remove);
  btn_remove.appendChild(i_remove); 
  
  // Utilizando dados da localStorage
  if (done) {
    todo.classList.add("done");
  }
  
  if (save) {
    saveTodoLocalStorage({ text, done: 0 });
  }
  
  todoInput.value = "";

}


/*Eventos*/



todoForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  
  const inputValue = todoInput.value;
  
  if(inputValue){
    saveTodo(inputValue);
  }
}); 



