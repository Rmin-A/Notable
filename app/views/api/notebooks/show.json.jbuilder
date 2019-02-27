json.set! @notebook.id do
  json.partial! "api/notebooks/notebook", notebook: @notebook
end
