const todoInput = document.getElementById("todoInput");
const todobtn = document.getElementById("todobtn");
const todoList = document.getElementById("todoList");
todobtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerText = todoInput.value;
  const deletebtn = document.createElement("button");
  deletebtn.innerText = "Delete";
  deletebtn.classList.add("todobtn");

  deletebtn.addEventListener("click", () => {
    li.remove();
  });

  const completebtn = document.createElement("button");
  completebtn.innerText = "Complete";
  completebtn.classList.add("todobtn");

  completebtn.addEventListener("click", () => {
    li.style.textDecoration = "line-through";
  });
  li.append(deletebtn, completebtn);
  todoList.appendChild(li);
  todoInput.value = "";
});
