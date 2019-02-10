class UsersController < ApplicationController
  before_action :authenticate_user!, only: :show

  def index
  end

  def show
    @user = User.find(params[:id])
    if current_user != @user
      flash[:notice] = "Access Denied"
      redirect_to root_path
    end
  end

  def edit
    @user = User.find(params[:id])
    if current_user != @user
      flash[:notice] = "Access Denied"
      redirect_to root_path
    end
    redirect_to edit_user_registration_path
  end


end
