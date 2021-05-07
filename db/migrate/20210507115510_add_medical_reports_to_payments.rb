class AddMedicalReportsToPayments < ActiveRecord::Migration[6.0]
  def change
    add_reference :payments, :medical_report, null: false, foreign_key: true
  end
end
