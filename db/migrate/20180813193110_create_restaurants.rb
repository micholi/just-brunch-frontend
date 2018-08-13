class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :neighborhood
      t.string :cuisine
      t.string :price_range
      t.string :dress_code
      t.string :image
    end
  end
end
