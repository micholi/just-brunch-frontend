class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :content
      t.string :commenter
      t.integer :restaurant_id
    end
  end
end
