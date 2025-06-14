export class TodoItem {
  constructor(note, complete) {
    this.note = note;
    this.complete = complete;
    this.visible = false;
    this.classes = [];
    this.seed = Math.floor(Math.random() * 90 + 10);
  }

  addClasses(...args) {
    for (let item of args) {
      this.classes.push(item);
    }
  }

  removeClasses(...args) {
    this.classes = [];
  }
  // Creates a new note HTML element
  // Can also accept additional classes to add to the note element
  createNoteElement() {
    const newElement = document.createElement('div');
    const newTopTask = document.createElement('div');
    const newCheckBox = document.createElement('input');
    const newTextArea = document.createElement('textarea');

    newElement.classList.add('todo-item');
    for (let item of this.classes) {
      newElement.classList.add(item);
    }

    newTopTask.classList.add('top-task');

    newCheckBox.type = 'checkbox';
    newCheckBox.name = `check-${this.seed}`;
    newCheckBox.id = `check-${this.seed}`;
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

    return newElement;
  }
}
