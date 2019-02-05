class CompaniesController < ApplicationController
  def index
  end


  def company_params
    params.require(:company).permit(:name, :avatar, :description)
  end
end
