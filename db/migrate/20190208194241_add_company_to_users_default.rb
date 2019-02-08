class AddCompanyToUsersDefault < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :company_id, :integer, default: 1
  end
end
