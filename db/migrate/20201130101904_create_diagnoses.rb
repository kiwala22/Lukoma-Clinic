class CreateDiagnoses < ActiveRecord::Migration[6.0]
  def change
    create_table :diagnoses do |t|
      t.string :patient_id
      t.json :diagnosis

      t.timestamps
    end
  end
end
