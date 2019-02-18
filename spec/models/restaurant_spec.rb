require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  context "created Restaurant succesfully persists" do
    it "Restaurant.all shows 1 instance length" do
      restaurant = FactoryBot.create(:restaurant)
      expect(Restaurant.all.length).to eq(1)
    end
  end
end
