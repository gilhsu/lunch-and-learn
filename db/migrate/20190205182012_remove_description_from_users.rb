class RemoveDescriptionFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :description, :text
  end
end
