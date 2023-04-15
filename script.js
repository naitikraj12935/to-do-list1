const btn = document.querySelector(".addbtn");
const input = document.querySelector(".input");
const tasks = document.querySelector(".tasks");

btn.addEventListener('click', function() {
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let label = document.createElement("label");
  label.textContent = input.value;
  input.value = "";
  let task = document.createElement("div");
  task.classList.add("task");
   task.appendChild(checkbox);
  task.appendChild(label); // append label before checkbox
 
  tasks.appendChild(task);
});
