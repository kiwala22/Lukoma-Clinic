Rails.application.routes.draw do
  resources :lab_patients
  resources :lab_results
  resources :billings
  resources :conclusions
  resources :prescriptions
  resources :results
  resources :diagnoses
  resources :patients
  root to: 'home#index'
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :doctors
end
