class MedicalReport < ApplicationRecord
  belongs_to :patient
  has_one :payment
end
