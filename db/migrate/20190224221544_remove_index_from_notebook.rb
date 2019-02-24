class RemoveIndexFromNotebook < ActiveRecord::Migration[5.2]
  def change
    remove_index :notebooks, :name
  end
end
