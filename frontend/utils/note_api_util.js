export const fetchAllNotes = () => (
  $.ajax({
    url: '/api/notes',
    method: 'GET'
  })
);

export const createNote = (note = {name: null, body: null, notebook_id: null}) => (
  $.ajax({
    url: '/api/notes',
    method: 'POST',
    data: { note: note }
  })
);

export const updateNote = (note) => (
  $.ajax({
    url: `/api/notes/${note.id}`,
    method: 'PATCH',
    data: { note: note }
  })
);

export const deleteNote = (id) => (
  $.ajax({
    url: `/api/notes/${id}`,
    method: 'DELETE'
  })
);
