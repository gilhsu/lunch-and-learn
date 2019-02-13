class Api::V1::RestaurantsController < ApplicationController
 def search
  restaurant_parser = RestaurantParser.new
  food1 = params[:food1]
  food2 = params[:food2]
  location = params[:location]
  event = Event.find(params[:event])

  restaurant_parser.search(food1, food2, location, event)
  binding.pry
  render json: { data: restaurant_parser.data }
 end
end
