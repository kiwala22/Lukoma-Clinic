class ChangeColumnConclusionOnMedicalReports < ActiveRecord::Migration[6.0]
  def change
    change_column :medical_reports, :conclusion, :text
  end
end
