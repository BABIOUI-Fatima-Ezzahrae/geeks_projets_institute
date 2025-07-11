const form = document.querySelector('form');
const input = document.getElementById('task');
const listTasks = document.querySelector('.listTasks');
const clearTasks = document.getElementById("clearTasks");
let taskIdCounter = 0;

const tasks = [];

function doneTask(event) {
  const checkbox = event.target;
  const taskDiv = checkbox.parentElement;
  const task_id = parseInt(taskDiv.getAttribute('data-task-id'));
  const taskObj = tasks.find(t => t.task_id === task_id);

  if (taskObj) {
    taskObj.done = checkbox.checked;
    const label = taskDiv.querySelector('label');

    if (taskObj.done) {
      label.classList.add('done');
    } else {
      label.classList.remove('done');
    }
  }
}

function deleteTask(event) {
  const deleteBtn = event.target.closest('button');
  const taskDiv = deleteBtn.parentElement;
  const task_id = parseInt(taskDiv.getAttribute('data-task-id'));
  listTasks.removeChild(taskDiv);
  const index = tasks.findIndex(t => t.task_id === task_id);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

function addTask(event) {
  event.preventDefault();
  const taskText = input.value.trim();
  if (taskText === "") return;

  const taskObj = {
    task_id: taskIdCounter++,
    text: taskText,
    done: false
  };
  tasks.push(taskObj);

  const taskDiv = document.createElement('div');
  taskDiv.className = 'task-item';
  taskDiv.setAttribute('data-task-id', taskObj.task_id);

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fa fa-times"></i>';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = deleteTask;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onchange = doneTask;

  const label = document.createElement('label');
  label.textContent = taskText;
  const ligne = document.createElement('hr');
  ligne.style.width = "80%";
  ligne.style.backgroundColor = "rgb(24, 161, 202)";

  taskDiv.appendChild(deleteBtn);
  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(label);
  listTasks.appendChild(taskDiv);
  listTasks.appendChild(ligne);

  input.value = '';
}

function clearAllTasks() {
  const taskItems = Array.from(listTasks.querySelectorAll('.task-item'));

  taskItems.forEach(taskDiv => {
    const checkbox = taskDiv.querySelector('input[type="checkbox"]');
    const task_id = parseInt(taskDiv.getAttribute('data-task-id'));

    if (checkbox && checkbox.checked) {
      const nextElement = taskDiv.nextElementSibling;

      listTasks.removeChild(taskDiv);

      if (nextElement && nextElement.tagName === 'HR') {
        listTasks.removeChild(nextElement);
      }

      const index = tasks.findIndex(t => t.task_id === task_id);
      if (index !== -1) {
        tasks.splice(index, 1);
      }
    }
  });
}


form.addEventListener('submit', addTask);
clearTasks.addEventListener('click', clearAllTasks);
