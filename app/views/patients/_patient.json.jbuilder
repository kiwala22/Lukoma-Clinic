json.extract! patient, :id, :patient_id, :first_name, :last_name, :sex, :address, :patient_history, :diagnosis, :results, :conclusion, :created_at, :updated_at
json.url patient_url(patient, format: :json)
