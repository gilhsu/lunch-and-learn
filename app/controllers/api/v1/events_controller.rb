class Api::V1::EventsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def edit
    event = Event.find(params[:id])
    user = event.user
    company = user.company

    render json: {event: event, user: user, company: company}
  end

  def create
    event = Event.new(event_params)
    event.user_id = current_user.id

    if event.save
      render json: event
    else
      render json: {error: review.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private
  def event_params
    params.require(:event).permit(:user_id, :name, :email, :description, :date, :time, :contact_first_name, :contact_last_name, :contact_email, :contact_phone, :address, :suite, :city, :state, :zip, :food_one, :food_two, :allergies, :notes, :client_company)
  end
end
