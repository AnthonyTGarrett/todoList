class TodoItem {
  static _seed = 1;

  constructor(note, complete) {
    this.note = note;
    this.complete = complete;
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
    newCheckBox.name = `check-${this._seed}`;
    newCheckBox.id = `check-${this._seed}`;

    newTextArea.value = this.note;
    newTextArea.rows = 2;
    newTextArea.name = `text-${this._seed}`;
    newTextArea.id = `text-${this._seed}`;

    newTopTask.appendChild(newCheckBox);
    newTopTask.appendChild(newTextArea);
    newElement.appendChild(newTopTask);

    this._seed++;
    return newElement;
  }
}
