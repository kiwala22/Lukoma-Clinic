class CreateResults < ActiveRecord::Migration[6.0]
  def change
    create_table :results do |t|
      t.string :patient_id
      t.json :results

      t.timestamps
    end
  end
end
