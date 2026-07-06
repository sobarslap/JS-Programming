var tasks = [];
window.onload = function () {
  var savedTasks = localStorage.getItem("myTasks");

  if (savedTasks !== null) {
    tasks = JSON.parse(savedTasks);
  }

  renderTasks();
  var input = document.getElementById("taskInput");
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
};
function saveTasks() {
  localStorage.setItem("myTasks", JSON.stringify(tasks));
}

function addTask() {
  var input = document.getElementById("taskInput");
  var taskText = input.value.trim();
  if (taskText === "") {
    return;
  }
  tasks.push({ text: taskText, completed: false });

  input.value = ""; 
  input.focus();    

  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);

  saveTasks();
  renderTasks();
}
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;

  saveTasks();
  renderTasks();
}
function updateSummary() {
  var counter = document.getElementById("taskCounter");
  var emptyMessage = document.getElementById("emptyMessage");

  if (tasks.length === 0) {
    counter.textContent = "";
    emptyMessage.style.display = "block";
    return;
  }

  emptyMessage.style.display = "none";

  var completedCount = 0;
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      completedCount = completedCount + 1;
    }
  }

  counter.textContent = completedCount + " of " + tasks.length + " completed";
}
function renderTasks() {
  var list = document.getElementById("taskList");
  list.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.title = "Mark as completed";
    checkbox.onclick = (function (taskIndex) {
      return function () { toggleComplete(taskIndex); };
    })(i);
    var span = document.createElement("span");
    span.textContent = task.text;
    span.className = "task-text";
    if (task.completed) {
      span.classList.add("completed");
    }
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.title = "Remove this task";
    deleteBtn.onclick = (function (taskIndex) {
      return function () { deleteTask(taskIndex); };
    })(i);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  }

  updateSummary();
}
