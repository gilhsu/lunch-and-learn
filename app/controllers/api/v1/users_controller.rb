class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    user = current_user
    company = user.company
    events = Event.where(user_id: params[:id]).order(created_at: :asc)
    # events = events.order(created_at: :asc)
    confirmed = events.where(confirmed: true).sort_by{|i| i.date}
    # binding.pry
    # confirmed = confirmed.order(created_at: :asc)
    pending = events.where(confirmed: false).order(created_at: :asc)
    # pending = pending.order(created_at: :asc)

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
    # binding.pry

    render json: {
      confirmed: serialized_events(confirmed),
      pending: pending,
      user: user,
      company: company
    }
  end

  private

  def serialized_events(events)
    ActiveModel::Serializer::CollectionSerializer.new(events, serializer: ConfirmedEventsSerializer)
  end
end
