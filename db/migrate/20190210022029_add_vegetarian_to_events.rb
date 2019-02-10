class AddVegetarianToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :vegetarian, :string
  end
end
