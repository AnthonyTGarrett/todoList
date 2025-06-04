import { TodoItem } from './note.js';
('use strict');

// Global array that holds all of the tasks
// Using let because I need to re-assign it to a filtered array later
let notes = [];

// Generic function for adding event listeners
function addGenericEventHandler(type, selector, callback, parent = document) {
  parent.addEventListener(type, e => {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
}

// Document load events
document.addEventListener('DOMContentLoaded', e => {
  clearList();
  const task = document.getElementById('task');
  addGenericEventHandler('click', '.add', addItem);
  addGenericEventHandler('click', '.clear', clearList);
  task.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      addItem(e);
    }
  });
});

// Function that updates all of the tasks that are present including the in progress tasks
// and the completed tasks
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
    if (task.visible != true)
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
  allChecks.forEach(item => item.addEventListener('click', moveItem));
}

// Function to add an item to the task list
function addItem() {
  const inputTask = document.getElementById('task');
  if (inputTask.value !== '') {
    notes.push(new TodoItem(inputTask.value, false));
  }
  inputTask.value = '';

  updateList();
}

// Function to clear out the completed tasks
function clearList() {
  document.querySelector('.completed-section').innerHTML = '';
  notes = notes.filter(val => val.complete === false);
  updateList();
}

// Function to handle the clicks on the checkboxes that toggles a couple of classes
// and updates the object complete property
function moveItem(e) {
  const myTarget = notes.find(item => item.seed == e.target.id.slice(-2));
  console.log(myTarget.complete);
  console.log(myTarget.visible);

  if (myTarget.complete === false) {
    myTarget.addClasses('darken', 'item-completed');
    myTarget.complete = true;
    myTarget.visible = false;
  } else if (myTarget.complete === true) {
    myTarget.removeClasses('darken', 'item-completed');
    myTarget.complete = false;
    myTarget.visible = false;
  }

  updateList();
}
