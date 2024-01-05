let todoInput; // Tu użytkownik wpisze treść zadania
let errorInfo; // Info o braku zadań
let addBtn; // Przycisk ADD
let ulList; // Lista zadań
let popup; // Popup do edycji danego zadania
let popupInfo; // Tekst w popup z info o błędzie
let todoToExit; // Edytowany todo
let popupInput; // Input wewnątrz popup
let acceptBtn; // Przycisk "Zatwierdź w popupie"
let cancelBtn; // Przycisk "Anuluj" w popupie

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
  popup = document.querySelector(".popup");
  popupInfo = document.querySelector(".popup-info");
  popupInput = document.querySelector(".popup-input");
  acceptBtn = document.querySelector(".save");
  cancelBtn = document.querySelector(".cancel");
}

const prepareDOMEvents = () => {
  // Tu nadaję nasłuchiwanie
  addBtn.addEventListener("click", addTodo);
  todoInput.addEventListener("keyup", e => {
    if (e.code === "Enter") addTodo();
  });
  ulList.addEventListener("click", checkClick);
  cancelBtn.addEventListener("click", closePopup);
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

const editTodo = () => {
  popup.style.display = "flex";
}

const closePopup = () => {
  popup.style.display = "none";
}

const checkClick = e => {
  if (e.target.matches(".lime")) {
    e.target.closest("li").classList.toggle("completed");
    e.target.classList.toggle("completed");
  } else if (e.target.matches(".bold")) {
    editTodo();
  } else if (e.target.matches(".tomato")) {
    e.target.closest("li");    
  }
}

document.addEventListener("DOMContentLoaded", main);