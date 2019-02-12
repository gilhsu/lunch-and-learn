class CreateCaterers < ActiveRecord::Migration[5.2]
  def change
    create_table :caterers do |t|
      t.belongs_to :event, null: false
      t.belongs_to :restaurant, null: false
      t.timestamps null: false
    end
  end
end
