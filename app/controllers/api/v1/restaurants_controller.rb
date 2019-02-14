class Api::V1::RestaurantsController < ApplicationController
 def search
   event = Event.find(params[:event])
   event.restaurants.delete_all
   restaurant_parser = RestaurantParser.new
   food1 = params[:food1]
   food2 = params[:food2]
   location = params[:location]

   restaurant_parser.search(food1, food2, location, event)
   render json: { data: restaurant_parser.data }
 end
end
