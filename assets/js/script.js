//seleção dos elementos
const listaTarefas = document.querySelector('#lista-tarefas');

const addTarefa = document.querySelector('#add_tarefa');





//Funções -------------

//pegando valores do Local Storage
const getBanco = ()=> JSON.parse(localStorage.getItem('listaTarefas'))  ?? [];
//setando valores no local Storage
const setBanco = (banco)=>localStorage.setItem('listaTarefas', JSON.stringify(banco));

//Limpar tarefa
//evita inserir duplica da lista quando chamamos a função atualizarTela()
const limparTarefas = ()=>{
  while(listaTarefas.firstChild){
    listaTarefas.removeChild(listaTarefas.lastChild);
  }
}

//Atualizar tarefas
const atualizarTela = ()=>{
  limparTarefas();
  const banco = getBanco();
  //para cada item no banco de dados é chamada a funcação para criar a tarefa
  banco.forEach((item, indice)=> criarTarefa(item.tarefa, item.status, indice))
}

//Inserir item na lista
const inserirItem = (texto)=>{
  const banco = getBanco();
  //adiciona chave/valor da tarefa e status

  banco.push({'tarefa': texto, 'status': ''});

  //coloca a chave e valor no banco
  setBanco(banco);
  //atualiza a tela
  atualizarTela();
}
//remover item
const removerItem = (indice)=>{
  //pega o banco
  const banco = getBanco();
  //tira o item do array de acordo com o indice
  banco.splice(indice, 1);
  setBanco(banco);
  //atualiza a tela
  atualizarTela();
}

const atualizarItem = (indice)=>{
  const banco = getBanco();
  banco[indice].status = banco[indice].status === '' ? 'checked' : '';
  setBanco(banco);
  atualizarTela();
}

// criação da tarefa
const criarTarefa = (tarefa, status, indice)=>{
  //criar div para adicionar task
  const div = document.createElement('div');
  div.setAttribute('class', "d-flex justify-content-between mb-2");
  div.innerHTML = `
  <div id="div-tarefa" class="task border w-100 p-1 d-flex justify-content-between align-items-center">
    <p>${tarefa}</p>
    <div class="w-25 d-flex flex-row justify-content-around align-items-center">
      <input type="checkbox" data-indice=${indice} ${status} />      
      <button type="button" data-indice=${indice} class=" btn btn-outline-primary"><i class="fas fa-light fa-trash"></i></button>
    </div>
  </div>
  ` ;

  listaTarefas.appendChild(div);
}


//eventos ------------------

addTarefa.addEventListener('click', (e)=>{
  const tarefa = document.querySelector('#input-tarefa').value;
  const error = 'A tarefa inserida invalida!';

  if(!tarefa == '' && tarefa == Number(tarefa)){
    return alert(error);
  }else{
    inserirItem(tarefa);
  }
  tarefa = '';

});
document.addEventListener('click',(e)=>{
  const elemento = e.target;

  if(elemento.type === 'button'){
    const indice = elemento.dataset.indice;
    removerItem(indice);
  }else if(elemento.type == 'checkbox'){
    const indice = elemento.dataset.indice;
    atualizarItem(indice);
  }
});

//atualiza a tela
atualizarTela();
