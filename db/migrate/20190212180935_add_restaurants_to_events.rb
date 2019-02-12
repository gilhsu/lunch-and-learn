class AddRestaurantsToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :restaurants, :string, array: true
  end
end
