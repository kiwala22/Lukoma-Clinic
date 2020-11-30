class CreatePrescriptions < ActiveRecord::Migration[6.0]
  def change
    create_table :prescriptions do |t|
      t.string :patient_id
      t.json :prescription

      t.timestamps
    end
  end
end
