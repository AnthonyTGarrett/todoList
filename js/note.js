class TodoItem {
  constructor(note, complete) {
    this.note = note;
    this.complete = complete;
  }
  // Creates a new note HTML element
  // Can also accept additional classes to add to the note element
  createNoteElement() {
    const newElement = document.createElement('div');
    const newTextArea = document.createElement('input');
    const newLabel = document.createElement('label');
    const newCheckBox = document.createElement('input');

    newLabel.htmlFor = 'note';
    newLabel.innerHTML = 'Completed';
    newTextArea.name = 'note';
    newTextArea.value = this.note;
    newCheckBox.type = 'checkbox';
    newCheckBox.name = 'todo';
    newCheckBox.value = 'Completed';
    newElement.classList.add('note');

    newElement.appendChild(newTextArea);
    newElement.appendChild(newLabel);
    newElement.appendChild(newCheckBox);
    return newElement;
  }
}
