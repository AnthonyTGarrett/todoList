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
  const todoContainer = document.querySelector('.todo');
  const completedContainer = document.querySelector('.completed');
  notes.push(new TodoItem('bake a cake', false));
  notes.push(new TodoItem('Mow my dads yard', false));
  notes.push(new TodoItem('Finish creating the new big app', false));
  notes.push(new TodoItem('Try to go to the gym on occasion', false));

  console.log(notes);
  for (let note of notes) {
    todoContainer.appendChild(note.createNoteElement());
  }

  for (let note of notes) {
    completedContainer.appendChild(note.createNoteElement());
  }
  // addGenericEventHandler('click', '.note ', changeToCompleted, noteContainer);

  // function changeToCompleted(e) {
  //   e.target.classList.toggle('completed');
  // }
});
