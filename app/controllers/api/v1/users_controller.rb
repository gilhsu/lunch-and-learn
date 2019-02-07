class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    events = Event.where(user_id: params[:id])
    render json: events
  end

end
