require 'rails_helper'

RSpec.describe Company, type: :model do
  context "successfully creates a new company" do

  	company = FactoryBot.create(:company)
  	it "should create a new company instance" do
  		expect(company.save).to eq(true)
		end
	end
end
