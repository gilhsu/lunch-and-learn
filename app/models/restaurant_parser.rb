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
    restaurant_data = response.parse["businesses"].each do |item|
      new_restaurant = Restaurant.new(
        event: event,
        name: item["name"],
        image_url: item["image_url"],
        categories: item["categories"],
        rating: item["rating"],
        address1: item["location"]["address1"],
        city: item["location"]["city"],
        zip_code: item["location"]["zip_code"],
        country: item["location"]["country"],
        state: item["location"]["state"],
        display_phone: item["display_phone"],
        price: item["price"],
        review_count: item["review_count"],
        distance: item["distance"]
      )
      @data << new_restaurant

    end
    @data.map(&:save)
    return @data
  end
end
