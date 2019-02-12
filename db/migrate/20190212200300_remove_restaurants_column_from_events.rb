class RemoveRestaurantsColumnFromEvents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :restaurants, :string, array: true
  end
end
