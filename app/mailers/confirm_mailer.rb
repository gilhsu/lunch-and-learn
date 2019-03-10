class ConfirmMailer < ApplicationMailer
  include InlineStylesMailer

  def presenter_invite(user, event)
    @user = user
    @event = event

    mail(
      to: user.email,
      subject: "Your Lunch&Learn Invitation Has Been Sent!"
    )
  end

  def presentee_invite(user, event)
    @user = user
    @event = event

    mail(
      to: event.email,
      subject: "#{user.first_name} #{user.last_name} Has Invited You To A Lunch&Learn Event!"
    )
  end

  def presenter_confirm(user, event)
    @user = user
    @event = event

    mail(
      to: user.email,
      subject: "A Lunch&Learn Event Was Just Confirmed!"
    )
  end

  def presentee_confirm(user, event)
    @user = user
    @event = event

    mail(
      to: event.email,
      subject: "Thanks For Submitting Your Lunch&Learn Event Details!"
    )
  end
end
