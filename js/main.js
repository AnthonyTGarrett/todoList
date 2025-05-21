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
  // notes.push(new TodoItem('bake a cake', false));
  // notes.push(new TodoItem('Mow my dads yard', false));
  // notes.push(new TodoItem('Finish creating the new big app', false));
  // notes.push(new TodoItem('Try to go to the gym on occasion', false));
  addGenericEventHandler('click', '.add', addItem);
  addGenericEventHandler('click', '.clear', clearList);
  // function changeToCompleted(e) {
  //   e.target.classList.toggle('completed');
  // }
});

function updateList() {
  const todoContainer = document.querySelector('.in-progress');
  const completedContainer = document.querySelector('.completed-section');
  const addHeader = document.getElementById('progress');
  const completedHeader = document.getElementById('completed');

  const inProgress = notes.filter(val => (val.complete = false));
  if (inProgress !== undefined || inProgress.length !== 0) {
    addHeader.style.display = 'block';
  } else {
    addHeader.style.display = 'none';
  }
  for (let task of inProgress) {
    todoContainer.innerHTML = '';
    todoContainer.appendChild(task.createNoteElement());
  }

  const completedTasks = notes.filter(val => (val.complete = true));
  if (inProgress !== undefined || inProgress.length !== 0) {
    completedHeader.style.display = 'block';
  } else {
    completedHeader.style.display = 'none';
  }
  for (let task of completedTasks) {
    completedContainer.innerHTML = '';
    completedContainer.appendChild(task.createNoteElement());
  }
}

function addItem(e) {
  const inputTask = document.getElementById('task');
  if (inputTask.value !== '') {
    notes.push(new TodoItem(inputTask.value, false));
  }
  inputTask.value = '';

  updateList();
}

function clearList() {
  notes.length = 0;
  updateList();
}
