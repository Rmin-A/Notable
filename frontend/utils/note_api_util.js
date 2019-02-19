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
