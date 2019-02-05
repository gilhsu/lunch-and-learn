class AddRepToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :rep, :boolean, default: true
  end
end
