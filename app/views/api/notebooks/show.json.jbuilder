json.set! @notebook.id do
  json.partial! "api/notebook/notebook", notebook: @notebook
end
