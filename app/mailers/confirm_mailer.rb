class ConfirmMailer < ApplicationMailer
  include InlineStylesMailer

  def presenter_invite(user, event)
    @user = user
    @event = event

    mail(
      to: user.email,
      subject: "Event details for #{event.name}"
    )
  end

  def presentee_invite(user, event)
    @user = user
    @event = event

    mail(
      to: event.email,
      subject: "#{user.first_name} has invited you to Event details for #{event.name}"
    )
  end

end
