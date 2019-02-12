require "json"
require "http"
require "optparse"

class RestaurantParser
  attr_reader :data

  def initialize
    @data = []
  end

  API_HOST = "https://api.yelp.com"
  SEARCH_PATH = "/v3/businesses/search"
  BUSINESS_PATH = "/v3/businesses/"

  DEFAULT_BUSINESS_ID = "yelp-boston"
  DEFAULT_TERM = "italian"
  DEFAULT_LOCATION = "Boston, MA"
  DEFAULT_PRICE = 2
  SEARCH_LIMIT = 20


  def search(categories, location, event)
    url = "#{API_HOST}#{SEARCH_PATH}"
    params = {
      categories: categories.downcase,
      location: location,
      limit: 3,
      # categories: DEFAULT_TERM,
      # location: DEFAULT_LOCATION,
      # price: DEFAULT_PRICE,
      # limit: SEARCH_LIMIT
    }

    response = HTTP.auth("Bearer #{ENV["YELP_KEY"]}").get(url, params: params)
    @data = response.parse
    response.parse["businesses"].each do |restaurant|
      if Restaurant.find_by(name: restaurant["name"])
        restaurant = Restaurant.find_by(name: restaurant["name"])
        new_caterer = Caterer.new(event: event, restaurant: restaurant)
        if new_caterer.save!
        end
      else
        new_restaurant = Restaurant.new(
          name: restaurant["name"],
          image_url: restaurant["image_url"],
          categories: restaurant["categories"],
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
          new_caterer = Caterer.new(event: event, restaurant: new_restaurant)
          if new_caterer.save!
          end
        end
      end
    end
  end
end
