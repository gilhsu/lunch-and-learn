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
    render json: {confirmed: confirmed, pending: pending, user: user, company: company}
  end

end
