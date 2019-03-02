export const fetchAllNotes = (notebookId) => {
  if (notebookId) {
    return(
      $.ajax({
        url: `/api/notebooks/${notebookId}/notes`,
        method: 'GET'
      })
    );
  } else {
    return(
      $.ajax({
        url: '/api/notes',
        method: 'GET'
      })
    );
  }
};

export const createNote = (note) => (
  $.ajax({
    url: `/api/notebooks/${note.notebook_id}/notes`,
    method: 'POST',
    data: { note: note }
  })
);

export const updateNote = (note) => (
  $.ajax({
    url: `/api/notebooks/${note.notebook_id}/notes/${note.id}`,
    method: 'PATCH',
    data: { note: note }
  })
);

export const deleteNote = (note) => (
  $.ajax({
    url: `/api/notebooks/${note.notebook_id}/notes/${note.id}`,
    method: 'DELETE'
  })
);
