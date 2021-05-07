class AddAmountPaidToMedicalReports < ActiveRecord::Migration[6.0]
  def change
    add_column :medical_reports, :amount_paid, :decimal
  end
end
