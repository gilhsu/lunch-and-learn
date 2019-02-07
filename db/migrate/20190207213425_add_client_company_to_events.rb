class AddClientCompanyToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :client_company, :string, null: false
  end
end
