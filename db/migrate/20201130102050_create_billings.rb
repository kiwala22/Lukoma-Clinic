class CreateBillings < ActiveRecord::Migration[6.0]
  def change
    create_table :billings do |t|
      t.string :patient_id
      t.json :cost

      t.timestamps
    end
  end
end
