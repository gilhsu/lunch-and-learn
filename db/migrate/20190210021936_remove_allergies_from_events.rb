class RemoveAllergiesFromEvents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :allergies, :string
  end
end
