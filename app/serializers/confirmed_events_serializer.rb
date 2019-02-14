class ConfirmedEventsSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :description, :date, :contact_first_name, :contact_last_name, :contact_email, :contact_phone, :address, :suite, :city, :state, :zip, :food_one, :food_two, :notes, :created_at, :confirmed, :client_company, :time, :vegetarian, :restaurants_one, :restaurants_two

  # has_many :restaurants
  def restaurants_one
    restaurants = []
    object.restaurants.each do |restaurant|
      restaurant.caterers.each do |caterer|
        if caterer.event_id == object.id && caterer.selection == 1
          restaurants << restaurant
        end
      end
    end
    return restaurants
  end

  def restaurants_two
    restaurants = []
    object.restaurants.each do |restaurant|
      restaurant.caterers.each do |caterer|
        if caterer.event_id == object.id && caterer.selection == 2
          restaurants << restaurant
        end
      end
    end
    return restaurants
  end
end
