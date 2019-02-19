class Api::NotesController < ApplicationController

  def index
    @notes = current_user.notes
  end

  def create
    @note = Note.new(note_params)
    @note.user_id = current_user.id
    if @note.notebook_id == nil
      @note.notebook_id = Notebook.find_by({
        user_id: current_user.id,
        name: "General"
      }).id
    end
    if @note.save
      render :show
    else
      render json: { errors: @note.errors.full_messages }, status: 500
    end
  end

  def updated
  end

  def delete
  end

  def note_params
    params.require(:note).permit(:name, :body, :notebook_id)
  end

end
