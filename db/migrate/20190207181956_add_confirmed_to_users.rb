class AddConfirmedToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :confirmed, :boolean, default: false
  end
end
