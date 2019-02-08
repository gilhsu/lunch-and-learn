class RemoveCompanyFromUsersSecond < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :company_id, :integer
  end
end
