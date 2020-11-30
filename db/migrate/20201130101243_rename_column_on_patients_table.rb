class RenameColumnOnPatientsTable < ActiveRecord::Migration[6.0]
  def change
    rename_column :patients, :patient_history, :patient_medical_history
  end
end
