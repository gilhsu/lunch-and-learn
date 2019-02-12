class Api::V1::RestaurantsController < ApplicationController
 def search
  restaurant_parser = RestaurantParser.new
  categories = params[:categories]
  location = params[:location]
  event = Event.find(params[:event])
  # categories = "italian"
  # location = "boston, ma"
  # price = 2
  restaurant_parser.search(categories, location, event)
  # session[:yelp_data] = restaurant_parser.data
  render json: { data: restaurant_parser.data }
 end
end
