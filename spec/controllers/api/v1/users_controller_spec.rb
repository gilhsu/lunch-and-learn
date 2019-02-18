# require 'rails_helper'
#
# RSpec.describe Api::V1::UsersController, type: :controller do
#   let!(:user1) { FactoryBot.create(:user)}
#   let!(:company1) { FactoryBot.create(:company)}
#   let!(:event1) { FactoryBot.create(:event)}
#   login_user
#
#   describe "GET#show" do
#     it "user show page" do
#       user1.company = company1
#       event1.user = user1
#
#       get :show, params: { id: user1.id }
#       returned_json = JSON.parse(response.body)
#
#     # note the fact that you should remove the "validate_session" parameter if this was a scaffold-generated controller
#       expect(response.status).to eq 200
#       expect(response.content_type).to eq("application/json")
#       expect(returned_json.length).to eq 1
#       expect(returned_json["event"]["name"]).to eq event1.name
#       expect(returned_json["event"]["email"]).to eq event1.email
#       expect(returned_json["event"]["description"]).to eq event1.description
#     end
#   end
# end
