const toDoList = [];

const addInput = document.getElementById('add-input');
const taskList = document.querySelector(".items-list");
const burger = document.querySelector(".burger");
const addBtns = document.querySelectorAll(".add-btn")


burger.addEventListener("click", function () {
    burger.classList.toggle("active");
});


//funkcja usuwająca którą podpinasz do buttonów "Delete"
const deleteItem = e => e.target.parentNode.remove();

// funkcja tworząca element <li>, którą podpinasz do buttonów "Add" 
// i do eventa "keyup" inputa
const createItem = value => {
  const newTask = document.createElement("li");
  newTask.classList.add("item");
  newTask.innerText = value 

  const deleteTask = document.createElement("button")
  deleteTask.innerText = "Delete"
  deleteTask.classList.add("del-btn")
  deleteTask.addEventListener("click", deleteItem)

  newTask.appendChild(deleteTask)
  taskList.appendChild(newTask)
}

// evenListener dla inputa
addInput.addEventListener('keyup', (e) => {
  const inputValue = addInput.value.trim();

  if (e.key === 'Enter' && inputValue !== '') {
    createItem(inputValue);
    addInput.value = '';
  };
})

// event listener dla buttonów "Add" z sidebara
addBtns.forEach(btn => btn.addEventListener("click", e => {
  const item = e.target.parentNode.innerText;
  if (item !== '') {
    createItem(item);
    e.target.parentNode.querySelector('.add-input');
    const addBtns = document.createElement('li');
    addBtns.classList.add('item');
    addBtns.innerText = value;
    toDoList.push(addBtns)
    taskList.appendChild(addBtns);
  // delete tasks
    const delBtn = document.createElement('button');
    delBtn.classList.add('del-btn');
    delBtn.innerText = 'Delete';
    delBtn.setAttribute("onClick", deleteItem);
    e.target.parentNode.appendChild(delBtn);
    addInput.value = '';
  }
}))


