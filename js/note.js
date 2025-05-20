class TodoItem {
  constructor(note, complete) {
    this.note = note;
    this.complete = complete;
  }
  // Creates a new note HTML element
  // Can also accept additional classes to add to the note element
  createNoteElement() {
    const newElement = document.createElement('div');
    const newTextArea = document.createElement('textarea');
    const newLabel = document.createElement('label');
    const newCheckBox = document.createElement('input');

    newLabel.htmlFor = 'note';
    newLabel.innerHTML = 'Completed';
    newLabel.classList.add('label');

    newTextArea.name = 'note';
    newTextArea.value = this.note;
    // newTextArea.classList.add('textarea');
    newCheckBox.type = 'checkbox';
    newCheckBox.name = 'todo';
    newCheckBox.classList.add('checkbox');
    newElement.classList.add('todo-item');

    newLabel.appendChild(newCheckBox);
    newElement.appendChild(newTextArea);
    newElement.appendChild(newLabel);
    return newElement;
  }
}
