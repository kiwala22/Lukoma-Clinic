class CreatePayments < ActiveRecord::Migration[6.0]
  def change
    create_table :payments do |t|
      t.string :patient_name
      t.decimal :amount
      t.text :reason
      t.string :doctor_name
      #t.references :medical_report, null: false, foreign_key: true

      t.timestamps
    end
  end
end
