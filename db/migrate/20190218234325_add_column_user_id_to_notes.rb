class AddColumnUserIdToNotes < ActiveRecord::Migration[5.2]
  def change
    add_column :notes, :user_id, :integer

    add_index :notes, :user_id
  end
end
