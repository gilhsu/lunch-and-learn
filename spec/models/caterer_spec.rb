require 'rails_helper'

RSpec.describe Caterer, type: :model do
  context "created Caterer succesfully persists" do
    it "Caterer.all shows 1 instance length" do
      caterer = FactoryBot.create(:caterer)
      expect(Caterer.all.length).to eq(1)
    end
  end
end
