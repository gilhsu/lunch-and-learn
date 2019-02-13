class ConfirmedEventsSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :description, :date, :contact_first_name, :contact_last_name, :contact_email, :contact_phone, :address, :suite, :city, :state, :zip, :food_one, :food_two, :notes, :created_at, :confirmed, :client_company, :time, :vegetarian

  has_many :restaurants
  # def restaurants_one
  #   binding.pry
  # end
  #
  # def restaurants_two
  #   binding.pry
  # end
end
