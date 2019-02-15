class AddAttendeesToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :attendees, :integer
  end
end
