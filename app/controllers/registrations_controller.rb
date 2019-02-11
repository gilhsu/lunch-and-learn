class RegistrationsController < Devise::RegistrationsController
  protected

  def after_sign_up_path_for(resource)
    "/users/#{resource.id}"
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :bio, :company_id, :avatar, :profile_photo])
  end
end
