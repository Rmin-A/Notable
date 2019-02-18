class RemoveIndexNote < ActiveRecord::Migration[5.2]
  def change
    remove_index :notes, :title
  end
end
