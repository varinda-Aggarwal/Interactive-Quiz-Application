const noteForm = document.getElementById('note-form');
const noteInput = document.getElementById('note-input');
const notesContainer = document.getElementById('notes-container');
const noNotesMessage = document.getElementById('no-notes-message');

noteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const noteText = noteInput.value.trim();

  if (noteText) {
    addNote(noteText);
    noteInput.value = '';
    noNotesMessage.style.display = 'none';
  }
});

function addNote(noteText) {
  const note = document.createElement('div');
  note.classList.add('note');

  const noteContent = document.createElement('p');
  noteContent.textContent = noteText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  deleteBtn.addEventListener('click', () => {
    note.remove();
    if (notesContainer.children.length === 0) {
      noNotesMessage.style.display = 'block';
    }
  });

  note.appendChild(noteContent);
  note.appendChild(deleteBtn);

  notesContainer.appendChild(note);
}