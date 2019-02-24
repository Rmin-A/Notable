export const fetchAllNotebooks = () => (
  $.ajax({
    url: '/api/notebooks',
    method: 'GET'
  })
);

export const createNotebook = (notebook) => (
  $.ajax({
    url: '/api/notebooks',
    method: 'POST',
    data: { notebook: notebook }
  })
);

export const updateNotebook = (notebook) => (
  $.ajax({
    url: `/api/notebooks/${notebook.id}`,
    method: 'PATCH',
    data: { notebook: notebook }
  })
);
