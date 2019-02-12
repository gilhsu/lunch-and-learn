class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    user = current_user
    company = user.company
    events = Event.where(user_id: params[:id])
    events = events.order(created_at: :asc)
    confirmed = events.where(confirmed: true)
    confirmed = confirmed.order(created_at: :asc)
    pending = events.where(confirmed: false)
    pending = pending.order(created_at: :asc)

    # event_restaurants = []
    # confirmed_with_restaurants = confirmed.each do |c|
    #   event_restaurant = {}
    #   restaurants = []
    #   c.restaurants.each do |r|
    #     restaurants << r.name
    #     event_restaurant[c.name] = restaurants
    #   end
    #   event_restaurants << event_restaurant
    # end
    #
    # confirmed_with_restaurants = confirmed.each do |c|
    #   c.yelp_restaurants = c.restaurants
    # end

    render json: {confirmed: confirmed, pending: pending, user: user, company: company}
  end

end
