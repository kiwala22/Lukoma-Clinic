Rails.application.routes.draw do
  match "docs" => "docs#index", via: [:get]
  resources :payments#, defaults: { format: :json }
  match "get_payment_data" => "payments#get_data", via: [:get], defaults: { format: :json }
  match "get_patients_data" => "patients#patients_data", via: [:get], defaults: { format: :json }
  resources :medical_reports, except: [:fetch_reports_data]
  match "get_medical_reports" => "medical_reports#fetch_reports_data", via: [:get], defaults: { format: :json }
  match "get_unpaid_medical_reports" => "medical_reports#fetch_unpaid_reports_data", via: [:get], defaults: { format: :json }
  match "full_report/:id" => "medical_reports#complete_reports_data", via: [:get], defaults: { format: :json }
  resources :patients
  root to: 'home#index'
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :doctors
end
