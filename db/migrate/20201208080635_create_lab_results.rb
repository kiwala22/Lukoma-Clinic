class CreateLabResults < ActiveRecord::Migration[6.0]
  def change
    create_table :lab_results do |t|
      t.string :lab_patient_number
      t.string :result
      t.references :lab_patient, null: false, foreign_key: true

      t.timestamps
    end
  end
end
