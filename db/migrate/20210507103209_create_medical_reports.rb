class CreateMedicalReports < ActiveRecord::Migration[6.0]
  def change
    create_table :medical_reports do |t|
      t.string :report_number
      t.json :diagnosis
      t.json :result
      t.json :prescription
      t.json :conclusion
      t.string :patient_name
      t.string :doctor_name
      t.boolean :paid, default: false
      t.references :patient, null: false, foreign_key: true

      t.timestamps
    end
  end
end
