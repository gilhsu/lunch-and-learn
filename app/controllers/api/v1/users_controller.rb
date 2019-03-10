class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: User.all
  end

  def show
    user = current_user
    company = user.company
    events = Event.where(user_id: params[:id]).order(created_at: :asc)
    confirmed = events.where(confirmed: true).sort_by{|i| i.date}
    pending = events.where(confirmed: false).order(created_at: :asc)

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
