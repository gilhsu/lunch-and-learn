class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name, null: false
      t.string :avatar
      t.text :description

      t.timestamps null: false
    end
  end
end
