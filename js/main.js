'use strict';

const notes = [];

function addGenericEventHandler(type, selector, callback, parent = document) {
  parent.addEventListener(type, e => {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
}

document.addEventListener('DOMContentLoaded', e => {
  clearList();
  const task = document.getElementById('task');
  addGenericEventHandler('click', '.add', addItem);
  addGenericEventHandler('click', '.clear', clearList);
  task.addEventListener('keydown', e => {
    if (e.code === 'Enter') {
      addItem(e);
    }
  });
});

function updateList() {
  const todoContainer = document.querySelector('.in-progress');
  const completedContainer = document.querySelector('.completed-section');
  const addHeader = document.getElementById('progress');
  const completedHeader = document.getElementById('completed');

  const inProgress = notes.filter(val => val.complete === false);
  if (inProgress.length !== 0) {
    addHeader.style.display = 'block';
  } else {
    addHeader.style.display = 'none';
  }
  todoContainer.innerHTML = '';
  for (let task of inProgress) {
    todoContainer.appendChild(task.createNoteElement());
  }

  const completedTasks = notes.filter(val => val.complete === true);
  if (completedTasks.length !== 0) {
    completedHeader.style.display = 'block';
  } else {
    completedHeader.style.display = 'none';
  }
  completedContainer.innerHTML = '';
  for (let task of completedTasks) {
    completedContainer.appendChild(task.createNoteElement());
  }

  const allChecks = document.querySelectorAll('.checkbox');
  allChecks.forEach(item => item.addEventListener('change', moveItem));
}

function addItem() {
  const inputTask = document.getElementById('task');
  if (inputTask.value !== '') {
    notes.push(new TodoItem(inputTask.value, false));
  }
  inputTask.value = '';

  updateList();
}

function clearList() {
  notes.length = 0;
  document.getElementById('task').value = '';
  updateList();
}

function moveItem(e) {
  console.log(e.target);
  e.target.classList.add('item-completed');
}
