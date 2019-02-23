class ConfirmMailer < ApplicationMailer
  include InlineStylesMailer

  def presenter_invite(user, event)
    @user = user
    @event = event

    mail(
      to: user.email,
      subject: "Your weLunchandLearn invitation has been sent!"
    )
  end

  def presentee_invite(user, event)
    @user = user
    @event = event

    mail(
      to: event.email,
      subject: "#{user.first_name} #{user.last_name} has invited you to weLunchandLearn event!"
    )
  end

end
