require 'rails_helper'

RSpec.describe Api::V1::EventsController, type: :controller do
  let!(:event1) { FactoryBot.create(:event)}
  let!(:user1) { FactoryBot.create(:user)}

  describe "GET#show" do
    it "event show page" do

      get :show, params: { id: event1.id }
      returned_json = JSON.parse(response.body)

    # note the fact that you should remove the "validate_session" parameter if this was a scaffold-generated controller
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 3
      expect(returned_json["event"]["name"]).to eq event1.name
      expect(returned_json["event"]["email"]).to eq event1.email
      expect(returned_json["event"]["description"]).to eq event1.description
    end
  end
end
