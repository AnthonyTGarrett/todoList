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
    const newTextInput = document.createElement('input');
    const newRadioButton = document.createElement('input');

    newTextInput.name = 'note';
    newTextInput.value = this.note;

    newElement.classList.add(`todoItem-${seed}`);
    _seed++;

    return newElement;
  }
}
