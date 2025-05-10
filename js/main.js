function addGenericEventHandler(type, selector, callback, parent = document) {
  parent.addEventListener(type, e => {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
}

document.addEventListener('DOMContentLoaded', e => {
  const noteContainer = document.getElementById('note-container');

  addGenericEventHandler('click', '.note', changeToCompleted, noteContainer);

  function changeToCompleted(e) {
    e.target.classList.toggle('completed');
  }
});
