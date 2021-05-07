class CreatePatients < ActiveRecord::Migration[6.0]
  def change
    create_table :patients do |t|
      t.string :patient_id
      t.string :full_name
      t.string :sex
      t.integer :age
      t.string :category

      t.timestamps
    end
  end
end
