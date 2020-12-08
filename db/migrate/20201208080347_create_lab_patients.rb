class CreateLabPatients < ActiveRecord::Migration[6.0]
  def change
    create_table :lab_patients do |t|
      t.string :lab_patient_id
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.decimal :height
      t.decimal :weight
      t.integer :age
      t.string :sex
      t.string :address
      t.string :doctor
      t.string :phone_number

      t.timestamps
    end
  end
end
