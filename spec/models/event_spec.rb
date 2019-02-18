require 'rails_helper'

RSpec.describe Event, type: :model do
  context "created Event succesfully persists" do
    it "Event.all shows 1 instance length" do
      event = FactoryBot.create(:event)
      expect(Event.all.length).to eq(1)
    end
  end
end
