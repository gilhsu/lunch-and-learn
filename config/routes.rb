Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users, controllers: { registrations: "registrations" }

  resources :users, only: [:show]
  resources :events, only: [:show, :new]


  namespace :api do
    namespace :v1 do
      resources :users, only: [:show]
      resources :events, only: [:create]
    end
  end
end
