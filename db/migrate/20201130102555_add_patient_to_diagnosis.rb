class AddPatientToDiagnosis < ActiveRecord::Migration[6.0]
  def change
    rename_column :diagnoses, :patient_id, :patient_number
    rename_column :results, :patient_id, :patient_number
    rename_column :prescriptions, :patient_id, :patient_number
    rename_column :billings, :patient_id, :patient_number
    rename_column :conclusions, :patient_id, :patient_number
    add_reference :diagnoses, :patient, null: false, foreign_key: true
    add_reference :results, :patient, null: false, foreign_key: true
    add_reference :prescriptions, :patient, null: false, foreign_key: true
    add_reference :billings, :patient, null: false, foreign_key: true
    add_reference :conclusions, :patient, null: false, foreign_key: true
  end
end
