export const fetchAllNotes = () => (
  $.ajax({
    url: '/api/notes',
    method: 'GET'
  })
);

const _nullNote = {
  name: null,
  body: null,
  notebook_id: null
};

export const createNote = (note = _nullNote) => (
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
