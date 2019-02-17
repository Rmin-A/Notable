class RemovefavfromNote < ActiveRecord::Migration[5.2]
  def change
    remove_column :notes, :fav
  end
end
