class AddSelectionToCaterers < ActiveRecord::Migration[5.2]
  def change
    add_column :caterers, :selection, :integer, null: false
  end
end
