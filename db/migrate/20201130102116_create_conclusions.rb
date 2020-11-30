class CreateConclusions < ActiveRecord::Migration[6.0]
  def change
    create_table :conclusions do |t|
      t.string :patient_id
      t.json :conclusion

      t.timestamps
    end
  end
end
