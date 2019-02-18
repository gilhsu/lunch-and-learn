require 'rails_helper'

RSpec.describe User, type: :model do
  context "created user succesfully persists" do
    it "user.all shows 1 instance length" do
      user = FactoryBot.create(:user)
      expect(User.all.length).to eq(1)
    end
  end
end
