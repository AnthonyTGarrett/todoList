class TodoItem {
  constructor(note, complete) {
    this.note = note;
    this.complete = complete;
    this._seed = Math.random();
  }
  // Creates a new note HTML element
  // Can also accept additional classes to add to the note element
  createNoteElement() {
    const newElement = document.createElement('div');
    const newTopTask = document.createElement('div');
    const newCheckBox = document.createElement('input');
    const newTextArea = document.createElement('textarea');

    newElement.classList.add('todo-item');

    newElement.setAttribute('draggable', true);

    newTopTask.classList.add('top-task');

    newCheckBox.type = 'checkbox';
    newCheckBox.name = 'checkbox';
    newCheckBox.classList.add('checkbox');

    newTextArea.value = this.note;
    if (this.note.length > 50) {
      newTextArea.rows = 2;
    } else {
      newTextArea.rows = 1;
    }

    newTopTask.appendChild(newCheckBox);
    newTopTask.appendChild(newTextArea);
    newElement.appendChild(newTopTask);

    this._seed++;
    return newElement;
  }
}
