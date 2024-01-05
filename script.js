let todoInput; // Tu użytkownik wpisze treść zadania
let errorInfo; // Info o braku zadań
let addBtn; // Przycisk ADD
let ulList; // Lista zadań
let newTask; // Nowe zadanie (element li)

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
}

const addTodo = () => {
  if (todoInput.value !== "") {
    newTask = document.createElement("li");
    newTask.textContent = todoInput.value;
    ulList.appendChild(newTask); 
    todoInput.value = "";
    errorInfo.textContent = "";     
  } else {
    errorInfo.textContent = "Your task must have a name!"
    errorInfo.classList.add("bold", "tomato");    
  }
}

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
}

document.addEventListener("DOMContentLoaded", main);