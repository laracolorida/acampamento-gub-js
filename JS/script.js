//ELEMENTS
const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-input');
const toDoList = document.querySelector('#todo-list');


//FUNCTIONS
const createTask = (task) => {
    const toDo = document.createElement('div');
    toDo.classList.add("todo");
    console.log(toDo);

    const title = document.createElement('h3');
    title.innerText = task;
    toDo.appendChild(title);

    const doneBTN = document.createElement('button');
    doneBTN.classList.add("finish-todo");
    doneBTN.innerHTML = '<i class="fa-solid fa-check"></i>';
    toDo.appendChild(doneBTN);

    const cancelBTN = document.createElement('button');
    cancelBTN.classList.add("remove-todo");
    cancelBTN.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    toDo.appendChild(cancelBTN);

    toDoList.appendChild(toDo);
}

//EVENTS
toDoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValor = toDoInput.value;
    if(inputValor){
        createTask(inputValor);
    }else{
        window.alert('O campo não pode estar vazio');
    }
})

document.addEventListener('click', (e) => {
    const clicked = e.target;
    const parent = e.target.closest('div')

    if(clicked.classList.contains('finish-todo')){
        parent.classList.toggle('done');
    }else if(clicked.classList.contains('remove-todo')){
        parent.remove();
    }
})
