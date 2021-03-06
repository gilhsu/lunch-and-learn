class Api::V1::EventsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    event = Event.find(params[:id])
    user = event.user
    company = user.company
    # restaurants = event.restaurants.limit(3)

    render json: {event: event, user: user, company: company}
  end

  def edit
    event = Event.find(params[:id])
    user = event.user
    company = user.company
    confirmed_events = user.events.where(confirmed: true)
    confirmed_dates = []
    confirmed_events.each do |event|
      confirmed_dates << event.date
    end

    render json: {event: event, user: user, company: company, confirmed_dates: confirmed_dates}
  end

  def create
    @event = Event.new(event_params)
    @event.user_id = current_user.id
    @user = User.find(current_user.id)

    if @event.save
      ConfirmMailer.presenter_invite(@user, @event).deliver_now
      ConfirmMailer.presentee_invite(@user, @event).deliver_now
      render json: @event
    else
      render json: {error: @event.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    @event = Event.find(params[:id])
    @event.confirmed = true
    @user = @event.user
    if @event.update_attributes(event_params)
      ConfirmMailer.presenter_confirm(@user, @event).deliver_now
      ConfirmMailer.presentee_confirm(@user, @event).deliver_now
      render json: @event
    else
      render json: {error: review.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private
  def event_params
    params.require(:event).permit(
      :user_id,
      :name,
      :email,
      :client_company,
      :description,
      :date,
      :time,
      :contact_first_name,
      :contact_last_name,
      :contact_email,
      :contact_phone,
      :address,
      :suite,
      :city,
      :state,
      :zip,
      :food_one,
      :food_two,
      :vegetarian,
      :notes,
      :attendees
    )
  end
end
