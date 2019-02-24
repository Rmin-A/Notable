class Api::NotebooksController < ApplicationController

  def index
    @notebooks = current_user.notebooks
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.user_id = current_user.id
    if @notebook.save
      render :show
    else
      render json: { errors: @notebook.errors.full_messages }, status: 500
    end
  end

  def update
    @note = Note.find(params[:id])
    if @note.update(note_params)
      render :show
    else
      render json: { errors: @note.errors.full_messages }, status: 500
    end
  end

  def delete
  end

  private

  def notebook_params
    params.require(:notebook).permit(:name)
  end

end
