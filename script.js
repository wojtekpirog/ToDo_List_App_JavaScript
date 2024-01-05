let todoInput; // Tu użytkownik wpisze treść zadania
let errorInfo; // Info o braku zadań
let addBtn; // Przycisk ADD
let ulList; // Lista zadań
let newTask; // Nowe zadanie (element li)
// let toolsArea; // Div przechowujący przyciski "'✔️', 'EDIT' oraz '❌'"
// let checkmarkButton; // Przycisk '✔️'
// let editButton; // Przycisk 'EDIT' 
// let cancelButton; // Przycisk '❌'

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
}

const prepareDOMElements = () => {
  // Tu pobieram elementy
  todoInput = document.querySelector(".todo-input");
  errorInfo = document.querySelector(".error-info");
  addBtn = document.querySelector(".add-btn");
  ulList = document.querySelector(".todo-list>ul");
}

const prepareDOMEvents = () => {
  // Tu nadaję nasłuchiwanie
  addBtn.addEventListener("click", addTodo);
  todoInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
      addTodo();
    }
  });
}

const addTodo = () => {
  if (todoInput.value !== "") {
    newTask = document.createElement("li");
    newTask.textContent = todoInput.value;
    addToolsArea();
    ulList.appendChild(newTask); 
    todoInput.value = "";
    errorInfo.textContent = "";     
  } else {
    errorInfo.textContent = "Your task must have a name!"
    errorInfo.classList.add("bold", "tomato");    
  }
}

const addToolsArea = () => {
  const toolsArea = document.createElement("div");
  toolsArea.classList.add("tools");

  const checkmarkButton = document.createElement("button");
  checkmarkButton.innerHTML = "<i class='fas fa-check lime'></i>";

  const editButton = document.createElement("button");
  editButton.textContent = "EDIT";
  editButton.classList.add("bold");

  const cancelButton = document.createElement("button");
  cancelButton.innerHTML = "<i class='fas fa-times tomato'></i>";

  toolsArea.append(checkmarkButton, editButton, cancelButton);
  newTask.appendChild(toolsArea);
}

document.addEventListener("DOMContentLoaded", main);