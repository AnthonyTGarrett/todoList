'use strict';

let notes = [];

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

  const allChecks = document.querySelectorAll('.checkbox');
  allChecks.forEach(item => item.addEventListener('click', moveItem));
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
  document.querySelector('.completed-section').innerHTML = '';
  notes = notes.filter(val => val.complete === false);
  updateList();
}

function moveItem(e) {
  console.log('Wut');
  const myTarget = notes.find(item => item.seed == e.target.id.slice(-2));

  myTarget.addClasses('darken', 'item-completed');
  if (e.target.checked) {
    myTarget.complete = true;
  } else {
    myTarget.complete = false;
    myTarget.visible = false;
  }

  updateList();
}
