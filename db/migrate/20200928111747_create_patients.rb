class CreatePatients < ActiveRecord::Migration[6.0]
  def change
    create_table :patients do |t|
      t.string :patient_id
      t.string :first_name
      t.string :last_name
      t.string :sex
      t.string :address
      t.text :patient_history
      t.text :diagnosis
      t.text :results
      t.text :conclusion

      t.timestamps
    end
  end
end
