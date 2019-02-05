class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.belongs_to :user, null: false
      t.string :name, null: false
      t.string :email, null: false
      t.text :description, null: false
      t.date :date
      t.time :time
      t.string :contact_first_name
      t.string :contact_last_name
      t.string :contact_email
      t.string :contact_phone
      t.string :address
      t.string :suite
      t.string :city
      t.string :state
      t.string :zip
      t.string :food_one
      t.string :food_two
      t.string :allergies
      t.text :notes

      t.timestamps null: false
    end
  end
end
