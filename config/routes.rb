Rails.application.routes.draw do
  resources :patients
  root to: 'home#index'
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :doctors
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
