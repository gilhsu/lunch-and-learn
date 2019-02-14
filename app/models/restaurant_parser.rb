require "json"
require "http"
require "optparse"

class RestaurantParser
  attr_reader :data

  def initialize
    @data = []
    @restaurant_array1 = []
    @restaurant_array2 = []
  end

  API_HOST = "https://api.yelp.com"
  SEARCH_PATH = "/v3/businesses/search"
  BUSINESS_PATH = "/v3/businesses/"

  DEFAULT_BUSINESS_ID = "yelp-boston"
  DEFAULT_TERM = "italian"
  DEFAULT_LOCATION = "Boston, MA"
  DEFAULT_PRICE = 2
  SEARCH_LIMIT = 20


  def search(food1, food2, location, event)
    url = "#{API_HOST}#{SEARCH_PATH}"
    params1 = {
      categories: food1.downcase,
      location: location,
      limit: 3,
    }
    params2 = {
      categories: food2.downcase,
      location: location,
      limit: 3,
    }

    response1 = HTTP.auth("Bearer #{ENV["YELP_KEY"]}").get(url, params: params1)
    response1.parse["businesses"].each do |restaurant|
      if Restaurant.find_by(name: restaurant["name"])
        restaurant = Restaurant.find_by(name: restaurant["name"])
        @restaurant_array1 << restaurant.name
        new_caterer = Caterer.new(event: event, restaurant: restaurant, selection: 1)
        if new_caterer.save!
        end
      else

        categories_array = []
        restaurant["categories"].each do |category|
          categories_array << category["title"]
        end

        new_restaurant = Restaurant.new(
          name: restaurant["name"],
          image_url: restaurant["image_url"],
          categories: categories_array,
          rating: restaurant["rating"],
          address1: restaurant["location"]["address1"],
          city: restaurant["location"]["city"],
          zip_code: restaurant["location"]["zip_code"],
          country: restaurant["location"]["country"],
          state: restaurant["location"]["state"],
          display_phone: restaurant["display_phone"],
          price: restaurant["price"],
          review_count: restaurant["review_count"],
          distance: restaurant["distance"]
        )
        if new_restaurant.save
          @restaurant_array1 << new_restaurant.name
          new_caterer = Caterer.new(event: event, restaurant: new_restaurant, selection: 1)
          if new_caterer.save!
          end
        end
      end
    end
    @data << {params1[:categories] => @restaurant_array1}

    response2 = HTTP.auth("Bearer #{ENV["YELP_KEY"]}").get(url, params: params2)
    response2.parse["businesses"].each do |restaurant|
      if Restaurant.find_by(name: restaurant["name"])
        restaurant = Restaurant.find_by(name: restaurant["name"])
        @restaurant_array2 << restaurant.name
        new_caterer = Caterer.new(event: event, restaurant: restaurant, selection: 2)
        if new_caterer.save!
        end
      else

        categories_array = []
        restaurant["categories"].each do |category|
          categories_array << category["title"]
        end

        new_restaurant = Restaurant.new(
          name: restaurant["name"],
          image_url: restaurant["image_url"],
          categories: categories_array,
          rating: restaurant["rating"],
          address1: restaurant["location"]["address1"],
          city: restaurant["location"]["city"],
          zip_code: restaurant["location"]["zip_code"],
          country: restaurant["location"]["country"],
          state: restaurant["location"]["state"],
          display_phone: restaurant["display_phone"],
          price: restaurant["price"],
          review_count: restaurant["review_count"],
          distance: restaurant["distance"]
        )
        if new_restaurant.save
          @restaurant_array2 << new_restaurant.name
          new_caterer = Caterer.new(event: event, restaurant: new_restaurant, selection: 2)
          if new_caterer.save!
          end
        end
      end
    end
    @data << {params2[:categories] => @restaurant_array2}
  end
end
