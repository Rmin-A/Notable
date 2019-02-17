class CreateNotebooks < ActiveRecord::Migration[5.2]
  def change
    create_table :notebooks do |t|
      t.string :name
      t.integer :user_id

      t.timestamps
    end
    add_index :notebooks, :name
    add_index :notebooks, :user_id
  end
end
