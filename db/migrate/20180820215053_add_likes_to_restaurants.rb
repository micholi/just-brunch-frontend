class AddLikesToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :likes, :integer
  end
end
