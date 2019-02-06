Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users, controllers: { registrations: "registrations" }

  resources :users, only: [:show]
  resources :events, only: [:show, :new]
end
