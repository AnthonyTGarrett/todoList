class TodoNote {
  constructor(note, complete) {
    this.note = note;
    this.complete = complete;
    this._seed = 1;
  }

  incrementSeed() {
    this._seed++;
  }

  // Creates a new note HTML element
  // Can also accept additional classes to add to the note element
  createNoteElement(...args) {
    const newElement = document.createElement('div');
    const newTextArea = document.createElement('input');
    const newLabel = document.createElement('label');
    const newCheckBox = document.createElement('input');

    newLabel.htmlFor = 'note';
    newTextArea.name = 'note';
    newTextArea.value = 'Bake a cake for the quake.';
    newCheckBox.type = 'checkbox';
    newCheckBox.name = 'todo';
    newCheckBox.value = 'Completed';
    newElement.classList.add('note');
    if (args.length > 0) {
      for (let arg of args) {
        newElement.classList.add(arg);
      }
    }

    newElement.appendChild(newTextArea);
    newElement.appendChild(newLabel);
    newElement.appendChild(newCheckBox);
    return newElement;
  }
}

const newNote = new TodoNote('Bake some cookies with my mom', false);
