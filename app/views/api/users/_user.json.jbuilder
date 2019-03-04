json.extract! user, :id, :username
json.general_notebook_id user.notebooks.first.id
json.general_notebook_name user.notebooks.first.name 
