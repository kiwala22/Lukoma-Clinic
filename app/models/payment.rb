class Payment < ApplicationRecord
  belongs_to :medical_report

  validates :patient, :amount, :reason, :payment_method, presence: true
end
