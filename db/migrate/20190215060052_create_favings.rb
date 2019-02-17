class CreateFavings < ActiveRecord::Migration[5.2]
  def change
    create_table :favings do |t|
      t.integer :note_id
      t.integer :user_id

      t.timestamps
    end
    add_index :favings, :note_id
    add_index :favings, :user_id
  end
end
