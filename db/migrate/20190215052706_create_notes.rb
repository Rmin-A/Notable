class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :title
      t.text :body
      t.integer :notebook_id

      t.timestamps
    end
    add_index :notes, :title
    add_index :notes, :notebook_id
  end
end
