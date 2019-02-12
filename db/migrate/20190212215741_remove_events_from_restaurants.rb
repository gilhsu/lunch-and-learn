class RemoveEventsFromRestaurants < ActiveRecord::Migration[5.2]
  def change
    remove_column :restaurants, :event_id, :bigint
  end
end
