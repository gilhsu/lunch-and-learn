class RemoveTimeFromEvents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :time, :time
  end
end
