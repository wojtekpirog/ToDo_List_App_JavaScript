let todoInput; // Tu użytkownik wpisze treść zadania
let errorInfo; // Info o braku zadań
let addBtn; // Przycisk ADD
let ulList; // Lista zadań
let popup; // Popup do edycji danego zadania
let popupInfo; // Tekst w popup z info o błędzie
let todoToEdit; // Edytowany todo
let popupInput; // Input wewnątrz popup
let saveBtn; // Przycisk "Zatwierdź w popupie"
let cancelBtn; // Przycisk "Anuluj" w popupie

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
  setInitialErrorInfo();
}

const prepareDOMElements = () => {
  todoInput = document.querySelector(".todo-input");
  errorInfo = document.querySelector(".error-info");
  addBtn = document.querySelector(".add-btn");
  ulList = document.querySelector(".todo-list>ul");
  popup = document.querySelector(".popup");
  popupInfo = document.querySelector(".popup-info");
  popupInput = document.querySelector(".popup-input");
  saveBtn = document.querySelector(".save");
  cancelBtn = document.querySelector(".cancel");
}

const prepareDOMEvents = () => {
  addBtn.addEventListener("click", addTodo);
  ulList.addEventListener("click", checkClick);
  saveBtn.addEventListener("click", changeTodoText);
  cancelBtn.addEventListener("click", closePopup); 
  todoInput.addEventListener("keyup", addTodoOnEnterClick);
  popupInput.addEventListener("keyup", changeTodoTextOnEnterClick);
}

const setInitialErrorInfo = () => {
  errorInfo.textContent = "No tasks on the list.";
}

const addTodo = () => {
  if (todoInput.value !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = todoInput.value;
    addToolsArea(newTask);
    ulList.appendChild(newTask); 
    todoInput.value = "";
    errorInfo.textContent = "";         
  } else {
    errorInfo.textContent = "Your task must have a name!"
    errorInfo.classList.add("bold", "tomato");    
  }
}

const addToolsArea = (newTask) => {
  const toolsArea = document.createElement("div");
  toolsArea.classList.add("tools");

  const checkmarkButton = document.createElement("button");
  checkmarkButton.classList.add("lime");
  checkmarkButton.innerHTML = "<i class='fas fa-check'></i>";

  const editButton = document.createElement("button");
  editButton.textContent = "EDIT";
  editButton.classList.add("bold");

  const cancelButton = document.createElement("button");
  cancelButton.classList.add("tomato");
  cancelButton.innerHTML = "<i class='fas fa-times'></i>";

  toolsArea.append(checkmarkButton, editButton, cancelButton);
  newTask.append(toolsArea);
}

const editTodo = (e) => {
  popup.classList.add("popup-active");
  todoToEdit = e.target.closest("li");
  popupInput.value = todoToEdit.firstChild.textContent;
}

const closePopup = () => {
  popupInfo.textContent = "";
  popupInfo.classList.remove("bold");
  popup.classList.remove("popup-active");
}

const changeTodoText = () => {
  if (popupInput.value !== "") {
    todoToEdit.firstChild.textContent = popupInput.value;
    closePopup();
  } else {
    popupInfo.textContent = "Your task must have a name!";
    popupInfo.classList.add("bold");
  }
}

const removeTodo = e => {
  e.target.closest("li").remove();
  if (ulList.childNodes.length === 0) errorInfo.textContent = "No tasks on the list.";
}

const checkClick = e => {
  if (e.target.matches(".lime")) {
    e.target.closest("li").classList.toggle("completed");
    e.target.classList.toggle("completed");
  } else if (e.target.matches(".bold")) {
    editTodo(e);
  } else if (e.target.matches(".tomato")) {
    removeTodo(e);   
  }
}

const addTodoOnEnterClick = (e) => {
  if (e.key === "Enter") addTodo();
}

const changeTodoTextOnEnterClick = (e) => {
  if (e.key === "Enter") changeTodoText();
}

document.addEventListener("DOMContentLoaded", main);